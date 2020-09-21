import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Registry() {
    const [registryData, setRegistryData] = useState([]);
    const [textInput, setTextInput] = useState("");
    
    const addItem = (e) => {
        e.preventDefault();
        const tempDate = [...registryData];
        tempDate.push(textInput);
        setRegistryData(tempDate);
        setTextInput("");
    }
    console.log(registryData);

    return (
        <div>
            <h1>Registry</h1>
            <Link to="/">CLick here to go to Home</Link>
            <form onSubmit={addItem}>
                <label>Input: 
                <input type="text" value={textInput}
                    onChange={(e)=> setTextInput(e.target.value)}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
            
        </div>
    )
}

export default Registry;