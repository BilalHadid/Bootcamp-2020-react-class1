import React from 'react'
import './hello.css'

const mediaCard = ({title,body,imageurl}) => {
    return(
        <div>
            <h3>TITLE IS :{title}</h3>
            <table id='bodi'>
                <th>Body:</th>
                <td>{body}</td>
            </table>
            <img src={imageurl} alt="Nature" width="600" height="400" />
        </div>
    )
}
export default mediaCard