const btn = document.querySelector('#rules-btn');

//open and close rules when button is clicked

function show_hide() {
    let rules = document.querySelector('#rules');
    if (rules.style.display !== 'none') {
        rules.style.display = 'none';
        btn.innerText = "Rules";

    } else {
        rules.style.display = 'block';
        btn.innerText = "Close rules";   
    }  
};

btn.addEventListener('click', show_hide);


//Gameboard
//5x6 game board requiring 30 tiles
//create board tiles and append to board id in HTML

let box = 30;

for (let i = 0; i < box; i++) { 
        let tile = document.createElement("input");
        tile.classList.add("tile");
        tile.setAttribute("maxlength", 1);
        document.getElementById("board").appendChild(tile);
    
};
