import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GameTable.css';


//Components
import Game from './Game.js';
import AddGame from './AddGame';
const GameTable = () => {
    const [data,setData] = useState([]);

    const handleDelete = (e,id) => {
        axios.delete(`https://flask.9h8feme1mh5au.ca-central-1.cs.amazonlightsail.com/games/${id}`)
            .then(function (response) {
                console.log(response.response.data);
            })
            .catch(function (error) {
                console.log(error.response);
            });
    }

    const postGame = ({title,genre,played}) => {
        axios.post('https://flask.9h8feme1mh5au.ca-central-1.cs.amazonlightsail.com/games',{ title:title, genre:genre, played:played })
            .then(function (response) {
                console.log(response.response.data);
            })
            .catch(function (error) {
                console.log(error.response);
         });        
    }

    useEffect(() => {
        const dataAxios = async () => {
            const res = await axios('https://flask.9h8feme1mh5au.ca-central-1.cs.amazonlightsail.com/games');
            setData(res.data.games);
        };
        dataAxios();
    },[handleDelete,postGame]);
    
        
    const listItems = data.map((game) =>
        <Game game={game} id={game.id} handleDelete={handleDelete} />
    );


    return (
        <div className="gameboard">
            <h1>Game Database</h1>
            <AddGame postGame={postGame} />
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Played ?</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                {listItems}

                </tbody>
            </table>
            
        </div>
    );
};

export default GameTable;