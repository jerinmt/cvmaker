function TextInput({description, value, handler}) {
    return (
        <>
            <label>{description}:
            <input type="text" value={value} onChange={(Event) => handler(Event.target.value)}
            />
            </label>
        </>            
    );
}

export default TextInput;