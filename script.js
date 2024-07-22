const adjective = {
    1 : 'Crazy',
    2 : "Fire",
    0 : "Amazing"
};
const nam = {
    1: "Engine",
    2: "Foods",
    0:"Garments"
};
const word = {
    1 : "Bros",
    2 : "Limited",
    0 : "Hub"
};
    let and = Math.floor(Math.random() * 3);
    let nd = Math.floor(Math.random() * 3);
    let rand = Math.floor(Math.random() * 3);

    document.write(`${adjective[rand]} ${nam[and]} ${word[nd]}`);

    

    

    

