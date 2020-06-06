import React from 'react'
import './hello.css'

const gate = ({isOpen}) => {
    return(
        <div>
            <h1>Gate Task</h1>
            <h3>Gate is <span>{isOpen === true ? 'open': 'closed'}</span></h3>
        </div>
    )
}
export default gate