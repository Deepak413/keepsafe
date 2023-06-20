import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Button from '@mui/material/Button';


const Note = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id);
    }

    return <>
        <div className='note'>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <button className='delete_btn' onClick={deleteNote}>
                <DeleteOutlineIcon />
            </button>
            {/* <Button> <DeleteOutlineIcon className='delete_btn' /> </Button> */}
        </div>

    </>;
}

export default Note;