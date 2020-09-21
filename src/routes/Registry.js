import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Registry() {
    const [registryData, setRegistryData] = useState([]);
    const [textInput, setTextInput] = useState("");
    const [error, setError] = useState(false);

    const addItem = (e) => {
        e.preventDefault();
        const tempDate = [...registryData];
        tempDate.push(textInput);
        setRegistryData(tempDate);
        setTextInput("");
    }

    useEffect(()=> {
        if(textInput.length > 10) {
            setError(true);
        } else {
            setError(false);
        }
    }, [textInput]);

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
            {error ? <span style={{color:"red"}}>Error Occured</span> : null}
        </div>
    )
}

export default Registry;