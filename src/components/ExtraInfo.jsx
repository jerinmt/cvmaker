import { useState } from "react";
import TextInput from "./TextInput";

function ExtraInfo({mode}) {
    const [achieve1, setAchieve1] = useState('');
    const [achieve2, setAchieve2] = useState('');
    const [achieve3, setAchieve3] = useState('');
    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');
        
    if(mode === 'Edit') {
        return (
            <>
                <div>
                    <h2>Your achievements (if any):</h2>
                    <TextInput description="Achievement 1" value={achieve1} handler={setAchieve1} />
                    <TextInput description="Achievement 2" value={achieve2} handler={setAchieve2} />
                    <TextInput description="Achievement 3" value={achieve3} handler={setAchieve3} />
                </div>
                <div>
                    <h2>Write 3 relevant skills:</h2>
                    <TextInput description="Skill 1" value={skill1} handler={setSkill1} />
                    <TextInput description="Skill 2" value={skill2} handler={setSkill2} />
                    <TextInput description="Skill 3" value={skill3} handler={setSkill3} />
                </div>
            </>
        );
    } else if(achieve1 || achieve2 || achieve3){
        return (
            <>
                <div>
                    <h2>My achievements</h2><hr/>
                    <p>{achieve1}<br/>{achieve2}<br/>{achieve3}</p>
                </div>
                <div>
                    <h2>My skills</h2><hr/>
                    <p>{skill1}<br/>{skill2}<br/>{skill3}</p>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div>
                    <h2>My skills</h2><hr/>
                    <p>{skill1}<br/>{skill2}<br/>{skill3}</p>
                </div>
            </>
        );
    }
}

export default ExtraInfo;