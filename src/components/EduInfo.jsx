import TextInput from "./TextInput";
import MonthSelector from "./MonthSelector";
import { useState } from "react";
import '../styles/components.css';
import FormatedDate from "./FormatedDate";

function EduInfo({mode}) {
    const [qual1, setQual1] = useState('');
    const [qual2, setQual2] = useState('');
    const [qual3, setQual3] = useState('');
    const [inst1, setInst1] = useState('');
    const [inst2, setInst2] = useState('');
    const [inst3, setInst3] = useState('');
    const [date1, setDate1] = useState('');
    const [date2, setDate2] = useState('');
    const [date3, setDate3] = useState('');
    if(mode === 'Edit') {
        return (
            <div className="container">
                <h2>Educational Information:</h2>
                <div>Highest qualification:<br/>
                    <TextInput description="Qualification" value={qual1} handler={setQual1} />
                    <TextInput description="Institute" value={inst1} handler={setInst1} />
                    <label>Graduated in:
                        <MonthSelector value={date1} handler={setDate1} />
                    </label>
                </div><hr/>
                <div>Qualification 2:<br/>
                    <TextInput description="Qualification" value={qual2} handler={setQual2} />
                    <TextInput description="Institute" value={inst2} handler={setInst2} />
                    <label>Graduated in:
                        <MonthSelector value={date2} handler={setDate2} />
                    </label>
                </div><hr/>
                <div>Qualification 3:<br/>
                    <TextInput description="Qualification" value={qual3} handler={setQual3} />
                    <TextInput description="Institute" value={inst3} handler={setInst3} />
                    <label>Graduated in:
                        <MonthSelector value={date3} handler={setDate3} />
                    </label>
                </div>
            </div>
        );
    } else {
        return (
        <div className="lefties">
            <h2>Education</h2><hr />
            <div>
                <b>{qual1}</b>
                <p>{inst1}<br/><FormatedDate date={date1} /></p>
            </div>
            <div>
                <b>{qual2}</b>
                <p>{inst2}<br/><FormatedDate date={date2} /></p>
            </div>
            <div>
                <b>{qual3}</b>
                <p>{inst3}<br/><FormatedDate date={date3} /></p>
            </div>
        </div>
        );
    }
}

export default EduInfo;