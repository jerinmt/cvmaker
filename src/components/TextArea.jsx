import { useState } from "react";

function TextArea({description, size}) {
    const [value, setValue] = useState("");
    return (
        <>
        <label>{description}<br/>
        <textarea rows={size} cols="60" value={value} onChange={(Event) => setValue(Event.target.value)}
        />
        </label>
        
        </>
        
    );
}

export default TextArea;