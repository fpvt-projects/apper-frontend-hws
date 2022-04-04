import Button from "./Button";
import Input from "./Input";
import "../App.scss"

const Checklist = () => {

    // const [Checklist, setChecklist] = useState(["Lorem Ipsum"]);
    const lorem = ["Lorem Ipsum"]

    const addTODO = (e) => {
        console.log("Added")
    }

    const removeTODO = (e) => {
        console.log(e)
    }

    const clearTODO = (e) => {
        console.log("Cleared!")
    }

    return (
        <div className="checklistWrapper">
            <div className="inputWrapper">
                <Input />
                <Button className="UButton add" onClick={addTODO}>Add Item</Button>
                <Button className="UButton clear"onClick={clearTODO}>Clear Checklist</Button>
            </div>
            <ul className="UList">
                {lorem.map((items, index) => <li className="item" onClick={removeTODO}>{items}</li>)}
            </ul>
        </div>
    );
}

export default Checklist;