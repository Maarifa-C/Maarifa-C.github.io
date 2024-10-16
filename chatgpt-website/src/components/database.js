export const Leaderboard = [
    {
        rank: 2,
        name: "test1",
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

// import React, { useEffect, useState } from 'react'; //1 

// function Leaderboard() {  //2 
//     const [items, setItems] = useState([]); //3
 
//     useEffect(() => { //4 
//         fetch('http://localhost:5000/api/items') //5 
//             .then(response => response.json()) //6 
//             .then(data => setItems(data)); //7 
//     }, []); //8 

//     return (
//         <ul>
//             {items.map((item, index) => (    //9 
//                 <li key={index}>{item}</li>  //10 
//             ))}
//         </ul>
//     );
// }
// export default Leaderboard; //11