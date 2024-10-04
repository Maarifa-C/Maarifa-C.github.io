import '../../scripts.js'
export const Leaderboard = [
    {
        rank: 2,
        name: email,
        score : 12,
        dt: "2022-02-10"
    },
    {
        rank: 1,
        name: "test2",
        score : 14,
        dt: "2021-08-17"
    },
]

Leaderboard.sort(function(a, b) {
    return a.rank - b.rank;
});