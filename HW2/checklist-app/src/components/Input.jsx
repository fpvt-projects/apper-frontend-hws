function Input (props) {
    return ( 
        <input type="text" className="UInput" onChange={props.onChange} placeholder={props.placeholder} value={props.value} id={props.id}/>
     );
}

export default Input ;