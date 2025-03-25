export default function Button ({count, content = "Ghuta marar content dei nai tai eirokom asteche"}) {
    const handleClick = () => {
        alert(`${content}`); 
    }
    return (
        <button onClick={handleClick}>{count ? "Click me" : "Button er count set kora hoy nai"} {count}</button>
    )
}