import { useState } from "react"; 
export default function Counter () {
    // const useState = (value) => {
    //     let stateValue = value;
    //     const setState = (newValue) => {
    //         stateValue = newValue;
    //     };
    //     const newArray = [stateValue, setState]; 
    //     console.log(newArray);
    //     return newArray; 
    // }
    const [count, setCount] = useState(0)
    const counterStyles = {
        border: "2px solid yellow", 
    }; 
    const handleClick = () => {
        const newCountValue = count + 1; 
        setCount(newCountValue)
    }
    return (
        <>
        <div style={counterStyles}>
            <h3>Count: {count}</h3>
            <button onClick={handleClick}>Add</button>
        </div>
        </>
    )
}