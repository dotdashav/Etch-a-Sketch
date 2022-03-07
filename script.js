const containerDiv = document.querySelector ('.container');
const size8 = document.querySelector ('.size8')
const size16 = document.querySelector ('.size16')
const size32 = document.querySelector ('.size32')
const size64 = document.querySelector ('.size64')
const resetButton = document.querySelector('.reset')
 
let quantity = 'Eight'
let quantityNumber= 8
let totalSquares= quantityNumber * quantityNumber
let divCreated
let allDivs 
function createDiv (){
    let newDiv = document.createElement('div');
    newDiv.classList.add ('square'+quantity)
    containerDiv.appendChild(newDiv);
    return newDiv
};


function createSquares(){
    for (i=0; i<totalSquares; i++){
        divCreated = createDiv();
    }; 
    allDivs = containerDiv.querySelectorAll ('div');
    return allDivs;
};

function addBlack (e){
    this.classList.add ('black')
};

function hoverBlack (){allDivs.forEach (div => {
    div.addEventListener("mouseover", addBlack)
})};


let divAdded = createSquares();

function reset (){
    allDivs.forEach (div =>{div.classList.remove ('black')})
};

function deleteSquares(){
    allDivs.forEach(div => { 
        div.remove ();
    });
};

function resetButtonClick (){
    resetButton.addEventListener ('click', ()=>{
        allDivs.forEach (div =>{
            div.classList.remove ('black')}
            )}
    )
}


function buttonClicked (){
    size8.addEventListener('click', ()=>{
        deleteSquares();
        quantity = 'Eight'
        quantityNumber= 8
        totalSquares= quantityNumber * quantityNumber
        createSquares();
        hoverBlack();
    })
    size16.addEventListener('click', ()=>{
        deleteSquares();
        quantity = 'Sixteen'
        quantityNumber= 16
        totalSquares= quantityNumber * quantityNumber
        createSquares();
        hoverBlack();
    })
    size32.addEventListener('click', ()=>{
        deleteSquares();
        quantity = 'Thirtytwo'
        quantityNumber= 32
        totalSquares= quantityNumber * quantityNumber
        createSquares();
        hoverBlack();
    })
    size64.addEventListener('click', ()=>{
        deleteSquares();
        quantity = 'Sixtyfour'
        quantityNumber= 64
        totalSquares= quantityNumber * quantityNumber
        createSquares();
        hoverBlack();
    })
}



buttonClicked();
hoverBlack();
resetButtonClick();


