import React, { Component } from 'react';

let CollectionList = (itemsList) => {
  itemsList.map((item) => {
    <li className="collection-list-item">
      {item}
    </li>
  })
}

let Footer = () => {
  return (
    <main className="user-profile">
      <div className="collection-display">
        FOOTER (links, etc.)
      </div>
    </main>
  );
};

export default Footer;