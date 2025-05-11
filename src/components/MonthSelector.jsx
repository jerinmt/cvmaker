import { useState } from "react";

function MonthSelector() {
    const [value, setValue] = useState("");

    return (
        <>
        <input type="month" min="1950-01" value={value} onChange={(Event) => setValue(Event.target.value)}
        />
        </>
    );
}

export default MonthSelector;