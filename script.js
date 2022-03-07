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
let classStyles = ['black', 'color1', 'color2','color3', 'color4','color5']
let classDefault = classStyles[0]; 

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

let divAdded = createSquares();

function deleteSquares(){
    allDivs.forEach(div => { 
        div.remove ();
    });
};


function random (){
    for (i=0; i<60; i++){
    let randomNumber = Math.floor (Math.random () * 6);
    classDefault = classStyles [randomNumber];} 
    return classDefault
}


function addColor (e){
    this.classList.add (`${classDefault}`)
};

function hoverBlack (){allDivs.forEach (div => {
    div.addEventListener("mouseover", addColor)
})};


function reset (){
    allDivs.forEach (div =>{div.classList.remove ('black')})
};

function resetButtonClick (){
    resetButton.addEventListener ('click', ()=>{
        allDivs.forEach (div =>{
            div.classList.remove (`${classDefault}`)}
            )}
    )
}





function buttonSizeClicked (){
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



buttonSizeClicked();
hoverBlack();
resetButtonClick();


