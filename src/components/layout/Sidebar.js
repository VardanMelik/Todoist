import React from 'react';
import { 
    FaChevronDown, 
    FaInbox, 
    FaRegCalendarAlt, 
    FaRegCalendarCheck 
} from 'react-icons/fa';;

function Sidebar() {
    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar__generic">
                <li className="inbox" data-testid="inbox">
                    <span><FaInbox/></span>
                    <span>Inbox</span>
                </li>
                <li className="today" data-testid="today">
                    <span><FaRegCalendarCheck/></span>
                    <span>Today</span>
                </li>
                <li className="next_7" data-testid="next_7">
                    <span><FaRegCalendarAlt/></span>
                    <span>Next 7 days</span>
                </li>
            </ul>

            <div className="sidebar__middle">
                <span><FaChevronDown/></span>
                <h2>Project</h2>
            </div>

            <ul className="sidebar__projects">
                Projects will be here
            </ul>
            Add projects Component!
        </div>
    )
}

export default Sidebar
