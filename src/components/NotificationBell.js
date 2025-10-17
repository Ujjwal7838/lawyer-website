import React, { useState } from 'react';
import { FaRegBell } from 'react-icons/fa';
import './NotificationBell.css';

function NotificationBell() {
  const [hasNew, setHasNew] = useState(true); 
  const [isOpen, setIsOpen] = useState(false);

   
  const notifications = [
    { id: 1, text: 'Rohan Sharma has booked an appointment.' },
    { id: 2, text: 'Your appointment with Advocate Verma is confirmed.' },
  ];

  return (
    <div className="notification-bell">
      <button onClick={() => setIsOpen(!isOpen)} className="bell-button">
        <FaRegBell />
        {hasNew && <div className="notification-dot"></div>}
      </button>

      {isOpen && (
        <div className="notifications-panel">
          <div className="panel-header">
            <h3>Notifications</h3>
          </div>
          <div className="panel-body">
            {notifications.map(notif => (
              <div key={notif.id} className="notification-item">
                {notif.text}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default NotificationBell;