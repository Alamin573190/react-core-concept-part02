import { useState } from "react"

export default function Counter(){
    const [count ,setCount] = useState(0);
    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount)

    }
    const handleAdd2 = () =>{
        const newCount = count - 1;
        setCount(newCount)
    }


    // .....................
    const counterStyle ={
        border:'2px solid brown'
    }
    return(
        <div style={{border:'2px solid brown'
        ,borderRadius:'10px' }}>
            <h3>Counter:{count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleAdd2}>Add2</button>
        </div>
    )
}

