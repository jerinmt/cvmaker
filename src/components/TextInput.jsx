import { useState } from "react";

function TextInput({description}) {
    const [value, setValue] = useState("");
    return (
        <>
        <label>{description}:
        <input type="text" value={value} onChange={(Event) => setValue(Event.target.value)}
        />
        </label>
        
        </>
        
    );
}

export default TextInput;