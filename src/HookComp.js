import React, { useState } from "react";

export default function (){
    const [count , setCount] = useState(0);

    return <div>
        <button onClick={ () => setCount(count+1) }>+</button>
        count: {count}
        <button onClick={ () => setCount(count-1) }>-</button>
    </div>
}
