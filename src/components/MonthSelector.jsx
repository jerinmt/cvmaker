function MonthSelector({mode, value, handler}) {
    if(mode === 'duration') {
        if(value) {
            return (
                <>
                <span>{value} - </span>
                </>
            );
        } else {
            return (
                <>
                </>
            );
        }
        
    } else {
        return (
            <>
                <input type="month" min="1950-01" value={value} onChange={(Event) => handler(Event.target.value)}
                />
            </>
        );
    }
}

export default MonthSelector;