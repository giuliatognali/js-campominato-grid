'use strict';

/************ 
 * Function
 ************/
function mycreateElement(elementHTML, className, ValueHTML) {
    const element = document.createElement(elementHTML);
    element.classList.add(className);
    element.innerText = ValueHTML;
    return element;
}

function myAppendElement(containerHTML, elementHTML) {
    containerHTML.append(elementHTML);
}


/************ 
 * Main
 ************/


const containerBoard = document.querySelector('.board');

const playBtn =document.getElementById ('play');

let cellNumber = 100; // TODO cambiare in base al livello


playBtn.addEventListener('click',
function(){
    
for (let i = 1; i <= cellNumber; i++) {
    
    const myCell = mycreateElement('div', 'cell', i);
    myAppendElement(containerBoard, myCell);

    myCell.addEventListener('click',
        function () {
            myCell.classList.add('blue');
        }
    )
}

})