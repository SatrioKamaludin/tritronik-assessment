import React, { useState, useEffect } from 'react';
import axios from "axios";
import ReactStickyNotes from '@react-latest-ui/react-sticky-notes';
import "./feapptest.css";

const Feapptest = () => {

    const [color, setColor] = useState("");
    const [createdDate, setCreatedDate] = useState(false);
    const [id, setId] = useState("");
    const [modifiedDate, setModifiedDate] = useState("");
    const [note, setNote] = useState("");
    const url = "https://note-dot-dev-tritronik.appspot.com"

    useEffect(() => {
        if (note != null){
          getNotes();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [note]);

    const getNotes = () => {
        axios.get(`${url}/Note`)
        .then((res) => {
            setNote(res.note[0]);
        })
        .catch((err) => console.log(err));
    }

    return (
        <div className="feapptest">
            <h1 className="feapptest-title">Front End Application Test (Unfinished)</h1>
            <ReactStickyNotes />
        </div>
    )
}

export default Feapptest;