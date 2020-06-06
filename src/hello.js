import React from 'react'
import './hello.css'

const arrfun = ({name, age}) => {
    return(

    <div class="arrfun">
        <p id="subhead">Arrow function</p>
        Hello <strong>{name}</strong>
        <ol>
            it's order list
            <p>Age is {age-6}</p>
        </ol>
    </div>
    )
    
}

export default arrfun