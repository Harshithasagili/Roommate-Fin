import React from 'react';

function RoommateList({ roommates }) {
  return (
    <div className="roommates">
      <h2>Available Roommates</h2>
      {roommates.length === 0 ? (
        <p>No roommates found.</p>
      ) : (
        roommates.map((roommate, index) => (
          <div className="roommate" key={index}>
            <p><strong>Name:</strong> {roommate.name}</p>
            <p><strong>Number:</strong> {roommate.number}</p>
            <p><strong>Budget:</strong> {roommate.budget}</p>
            <p><strong>Preferences:</strong> {roommate.preferences}</p>
            <p><strong>Search Type:</strong> 
              {roommate.searchType === 'roommate' 
                ? 'Searching for roommate only' 
                : 'Searching for roommate and apartment both'}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default RoommateList;
