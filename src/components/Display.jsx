import MonthSelector from "./MonthSelector";
import TextArea from "./TextArea";
import TextInput from "./TextInput";

function Display() {
    return (
        <>
        <h1>Make your own Resume/CV</h1>
        <div>
            <h2>General Information:</h2>
            <TextInput description="Name" />
            <TextInput description="Email id" />
            <TextInput description="Phone number" />
            <br/>
            <TextArea description="Write a bit about yourself" size="3"/>
        </div>
        <div>
            <h2>Educational Information:</h2>
            <div>Highest qualification:<br/>
                <TextInput description="Qualification" />
                <TextInput description="Institute" />
                <label>Graduated in:
                <MonthSelector />
                </label>
            </div>
            <div>Qualification 2:<br/>
                <TextInput description="Qualification" />
                <TextInput description="Institute" />
                <label>Graduated in:
                <MonthSelector />
                </label>
            </div>
            <div>Qualification 3:<br/>
                <TextInput description="Qualification" />
                <TextInput description="Institute" />
                <label>Graduated in:
                <MonthSelector />
                </label>
            </div>
        </div>
        <div>
            <h2>Experience Information:</h2>
            <div>Recent experience:<br/>
                <TextInput description="Designation" />
                <TextInput description="Organisation" />
                <label>From:
                <MonthSelector />
                </label>
                <label>To:
                <MonthSelector />
                </label>
                <br/>
                <TextArea description="Responsibilities" size="1"/>
            </div>
            <div>Experience 2:<br/>
                <TextInput description="Designation" />
                <TextInput description="Organisation" />
                <label>From:
                <MonthSelector />
                </label>
                <label>To:
                <MonthSelector />
                </label>
                <br/>
                <TextArea description="Responsibilities" size="1"/>
            </div>
            <div>Experience 3:<br/>
                <TextInput description="Designation" />
                <TextInput description="Organisation" />
                <label>From:
                <MonthSelector />
                </label>
                <label>To:
                <MonthSelector />
                </label>
                <br/>
                <TextArea description="Responsibilities" size="1"/>
            </div>
        </div>
        <div>
            <h2>Your achievements (if any):</h2>
            <TextInput description="Achievement 1" />
            <TextInput description="Achievement 2" />
            <TextInput description="Achievement 3" />
        </div>
        <div>
            <h2>Write 3 relevant skills:</h2>
            <TextInput description="Skill 1" />
            <TextInput description="Skill 2" />
            <TextInput description="Skill 3" />
        </div>
        <br/>
        <button type="button">Preview</button>
        </>
    );
}

export default Display;