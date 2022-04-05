import Button from "./Button";
import Input from "./Input";
import "../App.scss";
import { useState} from "react";


const Checklist = () => {

    const [Checklist, setChecklist] = useState([]);
    const [dataInput, setdataInput] = useState('');

    const addTODO = (e) => {
        e.preventDefault()
        setChecklist(() => [...Checklist, {Key: Checklist.length+1, value: dataInput}]);
        console.log(Checklist)
        resetFields()
    }

    const resetFields = () => {
        setdataInput("")
    }

    const removeTODO = (str) => {
        setChecklist(Checklist.filter((items) => items.Key !== str))
        console.log(str)
    }

    const clearTODO = (e) => {
        e.preventDefault()
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
                {Checklist.map((items) => <li className="item" onClick={()=>removeTODO(items.Key)} id={items.Key}>{items.value}</li>)}
            </ul>
        </div>
    );
}

export default Checklist;