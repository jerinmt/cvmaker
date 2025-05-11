import TextInput from "./TextInput";
import TextArea from "./TextArea";
import { useState } from "react";

function GenInfo({mode}) {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [objective, setObjective] = useState('');

    if(mode === 'Edit') {
        return (
            <>
                <h1>Make your own Resume/CV</h1>
                <div className="container">
                    <h2>General Information:</h2>
                    <TextInput description="Name" mode='Edit' value={name} handler={setName}/>
                    <TextInput description="Email id" mode='Edit' value={mail} handler={setMail}/>
                    <TextInput description="Phone number" mode='Edit' value={phone} handler={setPhone}/>
                    <br/><br/>
                    <TextArea description="Write a bit about yourself" size="3" mode='Edit' value={objective} handler={setObjective}/>
                </div>
            </>
        );
    } else {
        return (
        <>
            <h1>{name}</h1>
            <div>Email: {mail}<br/>
            Phone: {phone}</div>
            <h2>Objective</h2><hr/>
            <p>{objective}</p>
        </>
        );
    }
}

export default GenInfo;