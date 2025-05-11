import TextInput from "./TextInput";
import TextArea from "./TextArea";
import MonthSelector from "./MonthSelector";
import { useState } from "react";


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
        <>
            <h2>Experience Information:</h2>
            <div>Recent experience:<br/>
                <TextInput description="Designation" mode="Edit" value={post1} handler={setPost1}/>
                <TextInput description="Organisation" mode="Edit" value={org1} handler={setOrg1}/>
                <label>From:
                <MonthSelector mode="Edit" value={startDate1} handler={setStartDate1}/>
                </label>
                <label>To:
                <MonthSelector mode="Edit" value={endDate1} handler={setEndDate1}/>
                </label>
                <br/>
                <TextArea description="Responsibilities" size="1" mode="Edit" value={resp1} handler={setResp1}/>
            </div>
            <div>Experience 2:<br/>
                <TextInput description="Designation" mode="Edit" value={post2} handler={setPost2}/>
                <TextInput description="Organisation" mode="Edit" value={org2} handler={setOrg2}/>
                <label>From:
                <MonthSelector mode="Edit" value={startDate2} handler={setStartDate2}/>
                </label>
                <label>To:
                <MonthSelector mode="Edit" value={endDate2} handler={setEndDate2}/>
                </label>
                <br/>
                <TextArea description="Responsibilities" size="1" mode="Edit" value={resp2} handler={setResp2}/>
            </div>
            <div>Experience 3:<br/>
                <TextInput description="Designation" mode="Edit" value={post3} handler={setPost3}/>
                <TextInput description="Organisation" mode="Edit" value={org3} handler={setOrg3}/>
                <label>From:
                <MonthSelector mode="Edit" value={startDate3} handler={setStartDate3}/>
                </label>
                <label>To:
                <MonthSelector mode="Edit" value={endDate3} handler={setEndDate3}/>
                </label>
                <br/>
                <TextArea description="Responsibilities" size="1" mode="Edit" value={resp3} handler={setResp3}/>
            </div>
        </>
        );
    } else if(post1 || post2 || post3){
        return (
        <>
            <h2>Experience</h2>
            <div>
                <b>{post1}</b>
                <p>{org1} <MonthSelector mode='duration' value={startDate1} />{endDate1}</p>
                <p>{resp1}</p>
            </div>
            <div>
                <b>{post2}</b>
                <p>{org2} <MonthSelector mode='duration' value={startDate2} />{endDate2}</p>
                <p>{resp2}</p>
            </div>
            <div>
                <b>{post3}</b>
                <p>{org3} <MonthSelector mode='duration' value={startDate3} />{endDate3}</p>
                <p>{resp3}</p>
            </div>
        </>
        );
    } else {
        return (<></>);
    }
}

export default ExpInfo;