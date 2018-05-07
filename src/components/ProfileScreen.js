import React, { Component } from 'react';

let CollectionList = (itemsList) => {
  return [
    'Robot Body',
    'Battery',
    'Robot Head'
  ].map((item) => {
    <li className="collection-list-item">
      {item}
    </li>
  })
};

let ProfileScreen = () => {
  return (
    <main className="user-profile">
      <header>
        <img src="" alt="" className="avatar" />
        <div className="user-name">
          <h2>User Name</h2>
        </div>
      </header>
      <div className="collection-display">
        <h2>Collection:</h2>
        <ul>
          <CollectionList
            itemsList={ [
              'Robot Body',
              'Battery',
              'Robot Head'
            ] }
          />
        </ul>

      </div>
    </main>
  );
};

export default ProfileScreen;