import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './join.css';
import image from './../../layout/download.png';

export default function Join() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (
        <div className="joinOuterContainer">
             
            <div className="joinInnerContainer">
                <div className="image_container">
                    <img src={image} alt="logo" />
                </div>
                <div className="heading">Join</div>
                <div>
                    <input placeholder=" Name" className="name" type="text"
                        onChange={(event) => setName(event.target.value)} />
                </div>
               
                <div>
                    <select className="browser-default" onChange={(event) => setRoom(event.target.value)}>
                        <option value="" disabled selected>Choose chatroom</option>
                        <option value="Music">Music</option>
                        <option value="Game">Game</option>
                        <option value="Movie">Movie</option>
                    </select>
                </div>
                <div className='button_wrapper'>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="btn btn-large waves-effect waves-light hoverable grey darken-3" type="submit">Enter Chatroom</button>
                </Link>
                </div>
                
            </div>

        </div>
    )
}
