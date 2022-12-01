import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items , deleteItem, editItemName }) => {
  return (
    <>
      {items.map((item, index) => {
        return (
          <div className="grocery-item" key={index}>
            <div className="title">{item}</div>
            <div>
              <FaEdit className="edit-btn" onClick={()=>{editItemName(item)}}/>
              <FaTrash className="delete-btn" onClick={()=> deleteItem(item)} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
