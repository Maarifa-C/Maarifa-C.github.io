import React, { useState } from 'react'
import { Leaderboard } from './database';

function Active(active) {
    if (active) {
      return <img src="https://cdn-icons-png.flaticon.com/512/100/100470.png" />
    }
    return <img src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/prod-pict-xmark_2.png" />
  }

export default function Board() {
  return (
    <div className="board">
        <table>
            <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Questions</th>
                <th>Active</th>
                <th>Duration</th>
            </tr>
            {Leaderboard.map((val, index) => {
                return(
                    <tr key = {index}>
                        <td>{val.rank}</td>
                        <td>{val.name}</td>
                        <td>{val.score}</td>
                        <td>{Active(val.active)}</td>
                        <td>{val.duration}</td>
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