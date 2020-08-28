import React from 'react';
import './style.css';
const UserCard = (props)  => {
return (
    <div className="card">
        <img src={props.avatar} alt =""/>
        <span>{props.first_name} {props.last_name} </span>
        <span>{props.email}</span>
    </div>
)
}
export default UserCard;