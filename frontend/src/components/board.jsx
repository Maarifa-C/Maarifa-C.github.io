import React, { useState } from 'react'
import { Leaderboard } from '../database';

export default function Board() {
  return (
    //makes the leaderboard
    <div className="board">
        <table>
            <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Questions</th>
                <th>Messages</th>
            </tr>
            {Leaderboard.map((val, index) => {
                return(
                    //shows the values of rank, name, score and gets the last 5 messages 
                    <tr key = {index}>
                        <td>{val.rank}</td>
                        <td>{val.name}</td>
                        <td>{val.score}</td>
                        <td>{val.messages.slice(-5).reverse() + ''}</td>
                    </tr>
                )
            })}
        </table>

    </div>

  )
}



function between(data, between){
    const today = new Date();
    const previous = new Date(today);
    previous.setDate(previous.getDate() - (between + 1));

    let filter = data.filter(val => {
        let userDate = new Date(val.dt);
        if (between == 0) return val;
        return previous <= userDate && today >= userDate;
    })

    // sort with asending order
    return filter.sort((a, b) => {
        if ( a.questions === b.questions){
            return b.questions - a.questions;
        } else{
            return b.questions - a.questions;
        }
    })

}