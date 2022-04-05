import Button from "./Button";
import Input from "./Input";
import "../App.scss";
import { useState, useEffect } from "react";


const Checklist = () => {

    const [Checklist, setChecklist] = useState([]);
    const [dataInput, setdataInput] = useState('');

    const addTODO = (e) => {
        // const textinputref = useRef();

        e.preventDefault()
        setChecklist(() => [...Checklist, {Key: 2, value: dataInput}]);
        resetFields()
        console.log(Checklist)
    }

    const resetFields = () => {
        setdataInput("")
    }

    const removeTODO = (e) => {
        document.getElementById(id).remove();
    }

    const clearTODO = (e) => {
        setChecklist([]);
        console.log("Cleared!")
    }

    return (
        <div className="checklistWrapper">
            <form className="inputWrapper">
                <Input type="text"  placeholder="Enter a Task..." onChange={(e)=>setdataInput(e.target.value)} value={dataInput}/>
                <Button className="UButton add" onClick={addTODO}>Add Item</Button>
                <Button className="UButton clear"onClick={clearTODO}>Clear Checklist</Button>
            </form>
            <ul className="UList">
                {Checklist.map((items, i) => <li className="item" onClick={removeTODO}>{i+1}. {items.value}</li>)}
            </ul>
        </div>
    );
}

export default Checklist;


// ref={textinputref}