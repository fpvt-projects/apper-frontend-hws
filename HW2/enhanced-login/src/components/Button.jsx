import '../App.scss';

const Button = (props) => {
    return (
        <button className='UButton' onClick={props.onClick}>{props.children}</button>
    );
}

export default Button;