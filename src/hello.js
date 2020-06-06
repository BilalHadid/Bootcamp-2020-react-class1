import React from 'react'
import './hello.css'

const arrfun = ({name, age}) => {
    return(

    <div class="arrfun">
        <p id="subhead">Arrow function</p>
        Hello <strong>{name}</strong>
        <ol id="order">
            <li>Order List</li>
           <li>Sir Adil</li>
           <li>Sir Zia</li>
           <li>Sir Zeeshan</li>

        </ol>
        <ul id="unorder">
            <li>it's unorder list</li>
            <li>Age is {age-6}</li>
        </ul>
    </div>
    )
    
}

export default arrfun