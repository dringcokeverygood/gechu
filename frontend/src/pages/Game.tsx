import React from 'react';
import GameDetailContainer from '../components/Games/containers/GameDetailContainer';
import GameReviewContainer from '../components/Games/containers/GameReviewContainer';

const Game=()=>{
    return (
        <div className='container flex flex-col justify-center '>
            <GameDetailContainer/>
            <GameReviewContainer/>
        </div>
        );
}
export default Game;