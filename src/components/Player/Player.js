import React, { useEffect, useState } from 'react';
import './Player.css';
import fakeData from '../fakeData/data.json'



const Player = (props) => {
    const [players, setplayer] = useState([]);
    // console.log(props);
    const handleAddPlayer = props.handleAddPlayer;

    useEffect(() => {
        setplayer(fakeData);
        // console.log(fakeData);
        // const pl_data = fakeData.map(player => player.name);
        // console.log(pl_data);
    }, []);

    
    return (
        <div className="player">
            {/* <h1>Players: {players.length}</h1> */}
            {
                fakeData.map(player => 
                    <div className="playerDiv">
                        <div className="player-img"><img src={player.image} alt=""/></div>
                        <div className="player-info">
                            <h3 className="player-name">Name: {player.name}</h3>
                            <br/>
                            <p><small>Position: {player.position}</small></p>
                            <p><small>From: {player.from}</small></p>
                            <p>Salary: ${player.price}</p>
                            <button onClick={() => handleAddPlayer(player.price, player.name)} className='main-button'>Add Player</button>
                        </div>
                    </div>   
                )
            }
        </div>
    );
};

export default Player;