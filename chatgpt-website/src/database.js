import React, { useEffect, useState } from "react";
import App from "./App";
export const Leaderboard = []

// Leaderboard.sort(function(a, b) {
//     return a.rank - b.rank;
// });


function assignRanks(leaderboard) {
    // Sort the leaderboard by score in descending order and assign ranks
    leaderboard.sort((a, b) => b.score - a.score);

    // Assign ranks based on sorted order
    leaderboard.forEach((player, index) => {
        player.rank = index + 1; // Rank starts from 1
    });
}

assignRanks(Leaderboard);
