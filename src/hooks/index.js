import React, { useState, useEffect } from 'react';
import  { firebaseApp } from '../firebase';
import { collatedTasksExist } from '../helpers/index';
import moment from 'moment';

// Custom Hook
export const useTasks = (selectedProjects) => {
    const [tasks, setTasks] = useState([]);
    const [archivedTasks, setArchivedTasks] = useState([]);

    useEffect( () => {
        let unsubscribe = firebaseApp
            .firestore()
            .collection('tasks')
            .where('userId', '==', 'UWp4alPgXA3e8Ux9');

        unsubscribe = selectedProjects && !collatedTasksExist(selectedProjects) ?
        (unsubscribe = unsubscribe.where('projectId', '==', selectedProjects))
        : selectedProjects === 'TODAY'
        ? (unsubscribe == unsubscribe.where(
            'date', 
            '==', 
            moment().format('DD/MM/YYYY')
            ))
            : selectedProjects === 'INBOX' || selectedProjects === 0
            ? (unsubscribe = unsubscribe.where('date', '==', ''))
            : unsubscribe;
        unsubscribe = unsubscribe.onSnapshot( snapshot => {
            const newTasks = snapshot.docs.map( task => ({
                id: task.id,
                ...task.data(),
            }));

            setTasks(
                selectedProjects === 'NEXT_7' 
                ? newTasks.filter(
                    task => moment(task.date, 'DD-MM-YYYYY')
                    .diff( moment(), 'days') <= 7 && 
                    task.archived !== true
                )
                : newTasks.filter( task => task.archived !== true)
            )
            setArchivedTasks(newTasks.filter( task => task.archived !== false))
        })
        return () => unsubscribe();
    }, [selectedProjects]);

    return { tasks, archivedTasks};
}

export const useProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        firebaseApp
            .firestore()
            .collection('projects')
            .where('userId', '==', 'UWp4alPgXA3e8Ux9')
            .order('projectId')
            .get()
            .then(snapshot => {
                const allProjects = snapshot.docs.map(project => ({
                    ...project.date(),
                    docId: project.id,
                }));

                if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
                    setProjects(allProjects);
                }
            });
    }, [projects]);

    return { projects, setProjects }
}

