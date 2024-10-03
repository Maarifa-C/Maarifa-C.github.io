import React, { useState } from 'react'
import { Leaderboard } from './database';

export default function Board() {

    const [period, setPeriod] = useState(0);


  return (
    <div className="board">
        <table>
            <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Questions</th>
            </tr>
            {Leaderboard.map((val, index) => {
                return(
                    <tr key = {index}>
                        <td>{val.rank}</td>
                        <td>{val.name}</td>
                        <td>{val.score}</td>
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