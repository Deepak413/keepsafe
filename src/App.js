import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {

  const [addItem, setAddItem] = useState([]);

  const AddNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
    console.log(note);
  };

  const onDelete = (id) => {
    setAddItem((olddata) =>
      olddata.filter((currData, index) => {
        return index!==id;
      })
    );
  };

  return <>
    <Header />
    <CreateNote
      passNote = {AddNote}  
    />

    <div className="note_container">
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
    </div>

    {/* <Footer /> */}
  </>;
}

export default App;
