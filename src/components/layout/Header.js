import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';

function Header() {
    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Todoist_logo.png"
                        alt="Todolist"
                    />
                </div>

                <div className="settings">
                    <ul>
                        <li>+</li>
                        <li>
                            <FaPizzaSlice/>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
