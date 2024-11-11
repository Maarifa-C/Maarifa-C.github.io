import React, { useEffect, useState } from "react";
import App from "./App";
export const Leaderboard = []

Leaderboard.sort(function(a, b) {
    return a.rank - b.rank;
});


    