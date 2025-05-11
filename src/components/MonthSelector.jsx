function MonthSelector({value, handler}) {
    return (
        <>
            <input type="month" min="1950-01" value={value} onChange={(Event) => handler(Event.target.value)}
            />
        </>
    );
}

export default MonthSelector;