import React from 'react';

let CollectionList = ({ itemsList }) => {
  console.log('itemsList: ', itemsList);

  let list = itemsList.map(item => <li className="collection-list-item"
  key={ item.id } >
   <div style={{ background:"url("+item.image_url+")" }} alt={item.name}></div>
   <div><b>{item.name}</b><br/> {item.description}</div>
  </li>
  );
  return list;
};

export default CollectionList;