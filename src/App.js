import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [items, setItems] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [item, setItem] = useState('');
  const [indexOfItem, setIndexOfItem] = useState(0);
  const [msg, setMsg] = useState('');
  const [showA, setShowAlert] = useState(false);
  const [msgType, setMsgType] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!item){
      setMsg('please enter value');
      setMsgType('alert-danger');
      showAlert();
    }else 
    if(!isEdit) {
      setItems((items)=>{
        return [...items, item]
      })
      setMsg('Item Added To The List');
      setMsgType('alert-success');
      showAlert();
      setItem('');
    }
    else {
      items[indexOfItem] = item;
      setItems(items);
      setMsgType('alert-success');
      setMsg('Value Changed');
      showAlert();
      setItem('');
      setIsEdit(false);
    }
  };

  const deleteItem = (i) =>{
    const newItems = items.filter((it)=> it !== i);
    setItems(newItems);
    setMsg('Item Removed');
    setMsgType('alert-danger');
    showAlert();
  }
  const editItemName =(i) => {
    setItem(i);
    setIndexOfItem( items.indexOf(i));
    setIsEdit(true);
  }
  const deleteAll = () => {
    setItems([]);
    setMsg('Empty List');
    setMsgType('alert-danger');
    showAlert();
  }
  const showAlert = () => {
    setShowAlert(true)
    setTimeout(()=>setShowAlert(false), 3000);
  }
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
      {showA && <Alert msg={msg} type={msgType}/>}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input placeholder="e.g. eggs" type="text" className="grocery" value={item} onChange={(e)=> setItem(e.target.value)} />
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <div>
          <List items={items} deleteItem={deleteItem} editItemName={editItemName} />
        </div>
        <button className="clear-btn" onClick={deleteAll} >Clear Items</button>
      </div>
    </section>
  );
}

export default App;
