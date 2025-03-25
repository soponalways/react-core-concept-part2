import { useState } from "react"

export default function Boller () {
    const [remainOver, setRemainOver] = useState(10); 
    const [ball, setBall] = useState(0); 
    const [over, setOver] = useState(0); 

    const handleBall = () => {
        const updateBall = ball + 1; 
        console.log("before", ball);
        setBall(ball + 1); 
        if(updateBall % 6 === 0 ){
            setOver(over + 1); 
            setRemainOver(remainOver - 1)
        }
        console.log("after", ball);
    }
    const bollerStyles = {
        border: "2px solid", 
        borderRadius: "10px", 
        marginTop: "10px", 
        padding: "10px"
    }; 
    return(
        <div style={bollerStyles}>
        <h3 style={{textDecoration: "underline dotted green 4px"}}>Boller Bangladesh</h3>
        <h4>Total Remaining Over: {remainOver} </h4>
        <h4>Total Succes over: {over}</h4>
        <h4>Total succes ball: {ball} </h4>

        <button onClick={handleBall}>ball</button>
        </div>
    )
}