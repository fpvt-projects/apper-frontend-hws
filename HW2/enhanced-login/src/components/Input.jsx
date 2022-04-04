const Input = (props) => {
    return (
        <input className="UInput" type={props.type} placeholder={props.placeholder} onChange={props.change}></input>
    );
}

export default Input;