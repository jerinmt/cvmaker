function TextArea({description, size, value, handler}) {
    return (
        <>
            <label>{description}<br/>
            <textarea rows={size} cols="60" value={value} onChange={(Event) => handler(Event.target.value)}
            />
            </label>
        </>
    );    
}

export default TextArea;