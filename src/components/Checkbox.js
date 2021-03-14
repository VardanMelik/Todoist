import React from 'react';
import { firebaseApp } from '../firebase';

function Checkbox({ id }) {
    const archiveTask = () => {
        firebaseApp
            .firestore()
            .collection('tasks')
            .doc(id)
            .update({
                archived: true
            });
    }
    return (
        <div 
            className="checkbox-holder" 
            data-testid="checkbox-action"
            onClick={ () => archiveTask()}
            >
            <span className="checkbox"/>
            
        </div>
    )
}

export default Checkbox
