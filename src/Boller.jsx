import { useState } from "react"

export default function Boller () {
    const [remainOver, setRemainOver] = useState(10); 
    const [ball, setBall] = useState(0); 
    const [over, setOver] = useState(0); 
    const handleBall = () => {
        setBall(ball + 1); 
        // const over2 = Math.floor(ball / 6); 
        // setOver(over2)
        if(ball % 6 === 0 && ball >0 ){
            setOver(over + 1); 
            setRemainOver(remainOver - 1)
        }
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