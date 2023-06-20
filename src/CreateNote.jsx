import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {  

    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title : "",
        content : "",
    });

    const InputEvent = (event) => {

        const {name, value} = event.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name] : value,
            };
        });
    }

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title : "",
            content : "",   
        })
    }

    const expandForm = () => {
        setExpand(true);
    }
    const shrinkForm = () => {
        setExpand(false);
    }

    return<>
        <div className='main_note' onDoubleClick={shrinkForm}>
            <form>
                {expand?
                <input type='text'
                    name="title"
                    value={note.title}
                    onChange={InputEvent}
                    placeholder='Add title' 
                    autoComplete='off' />:null}

                <textarea rows=""
                    column="" 
                    name="content"
                    value={note.content}
                    onChange={InputEvent}
                    placeholder='Write a note...'
                    onClick={expandForm}
                ></textarea>
                    
                <br/>
                {expand?
                <Button onClick={addEvent}> 
                    <AddIcon className='plus_sign' /> 
                </Button>:null}
            </form>
        </div>
    </>;
}

export default CreateNote;