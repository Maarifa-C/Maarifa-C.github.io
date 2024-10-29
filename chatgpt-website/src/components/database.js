import React, { useEffect, useState } from "react";

export const Leaderboard = [
    {
        rank: 2,
        name: "test1",
        score : 12,
        active: false,
        duration: 0,
    },
    {
        rank: 1,
        name: "test2",
        score : 14,
        active: false,
        duration: 0,
    },
]

Leaderboard.sort(function(a, b) {
    return a.rank - b.rank;
});

