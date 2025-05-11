import TextInput from "./TextInput";
import TextArea from "./TextArea";
import MonthSelector from "./MonthSelector";
import { useState } from "react";
import FormatedDate from "./FormatedDate";
import '../styles/components.css';


function ExpInfo({mode}) {
    const [post1, setPost1] = useState('');
    const [post2, setPost2] = useState('');
    const [post3, setPost3] = useState('');
    const [org1, setOrg1] = useState('');
    const [org2, setOrg2] = useState('');
    const [org3, setOrg3] = useState('');
    const [startDate1, setStartDate1] = useState('');
    const [startDate2, setStartDate2] = useState('');
    const [startDate3, setStartDate3] = useState('');
    const [endDate1, setEndDate1] = useState('');
    const [endDate2, setEndDate2] = useState('');
    const [endDate3, setEndDate3] = useState('');
    const [resp1, setResp1] = useState('');
    const [resp2, setResp2] = useState('');
    const [resp3, setResp3] = useState('');

    if(mode === 'Edit') {
        return (
        <div className="container">
            <h2>Experience Information:</h2>
            <div>Recent experience:<br/>
                <TextInput description="Designation" value={post1} handler={setPost1}/>
                <TextInput description="Organisation" value={org1} handler={setOrg1}/>
                <label>From:
                <MonthSelector value={startDate1} handler={setStartDate1}/>
                </label>
                <label>To:
                <MonthSelector value={endDate1} handler={setEndDate1}/>
                </label>
                <br/>
                <TextArea description="Responsibilities" size="2" value={resp1} handler={setResp1}/>
            </div><hr/>
            <div>Experience 2:<br/>
                <TextInput description="Designation" value={post2} handler={setPost2}/>
                <TextInput description="Organisation" value={org2} handler={setOrg2}/>
                <label>From:
                <MonthSelector value={startDate2} handler={setStartDate2}/>
                </label>
                <label>To:
                <MonthSelector value={endDate2} handler={setEndDate2}/>
                </label>
                <br/>
                <TextArea description="Responsibilities" size="2" value={resp2} handler={setResp2}/>
            </div><hr/>
            <div>Experience 3:<br/>
                <TextInput description="Designation" value={post3} handler={setPost3}/>
                <TextInput description="Organisation" value={org3} handler={setOrg3}/>
                <label>From:
                <MonthSelector value={startDate3} handler={setStartDate3}/>
                </label>
                <label>To:
                <MonthSelector value={endDate3} handler={setEndDate3}/>
                </label>
                <br/>
                <TextArea description="Responsibilities" size="2" value={resp3} handler={setResp3}/>
            </div>
        </div>
        );
    } else if(post1 || post2 || post3){
        return (
        <div className="lefties">
            <h2>Experience</h2><hr/>
            <div>
                <b>{post1}</b>
                <p>{org1} <FormatedDate mode='duration' date={startDate1} /><FormatedDate date={endDate1} /></p>
                <p>{resp1}</p>
            </div>
            <div>
                <b>{post2}</b>
                <p>{org2} <FormatedDate mode='duration' date={startDate2} /><FormatedDate date={endDate2} /></p>
                <p>{resp2}</p>
            </div>
            <div>
                <b>{post3}</b>
                <p>{org3} <FormatedDate mode='duration' date={startDate3} /><FormatedDate date={endDate3} /></p>
                <p>{resp3}</p>
            </div>
        </div>
        );
    } else {
        return (<></>);
    }
}

export default ExpInfo;