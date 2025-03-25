import { useState } from "react"; 
export default function Player() {
    const [runs, setRuns] = useState(0); 
    const [sixes, setSixes] = useState(0); 
    const [fours, setFours] = useState(0); 
    const handleSingle = () => {
        setRuns(runs + 1)
    }; 
    const handleFour = () => {
        setRuns(runs + 4); 
        setFours(fours + 1); 
    }; 
    const handleSixes = () => {
        setRuns(runs + 6); 
        setSixes(sixes + 1)
    }
    return (
        <div style={{
            border: "2px solid green", 
            marginTop: "5px",
            borderRadius: '10px', 
            padding: "10px"
        }}>
            <h3>Players: Bangladeshi</h3>
            <p><small>six: {sixes}</small></p>
            <p><small>four: {fours}</small></p>
            {
                (runs >= 50 && runs < 100) && <p>Your runs is 50 + </p>
            }
            {
                runs >= 100 && <p>Wow you got century</p>
            }
            <h2>Score: {runs}</h2>
            <button onClick={handleSingle}>single Run</button>
            <button onClick={handleFour}>4 Run</button>
            <button onClick={handleSixes}>6 Run</button>
        </div>
    )
}