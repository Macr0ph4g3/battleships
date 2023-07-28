
import './style.css';
import {generateGrid } from './gameUI'
import { Ship } from "./ships";
import {computer, player} from "./gameLoop"
// Adding event listeners to newly created table cells

const tdList = document.querySelectorAll('td')
tdList.forEach( td => {
    td.addEventListener('click', ()=>{
        console.log(`${td.dataset.x} X`)
        console.log(`${td.parentElement.dataset.y} Y`)
        console.log(`${td.dataset.owner}`)
        
        if(td.dataset.owner == 'Computer'){
            const x = Number(td.dataset.x)
            const y = Number(td.parentElement.dataset.y)
            computer.gameBoard.receiveAttack(x,y)
            if(computer.gameBoard.coordinateList[y*10+x].includes('Miss')){
                console.log('YAY')
                const row = document.querySelectorAll(`[data-y="${y}"]`);
                const square = row[1].querySelector(`[data-x="${x}"]`)
                square.style.backgroundColor = "gray"


            }
            if(computer.gameBoard.coordinateList[y*10+x].includes('Hit')){
                console.log('OW')
                const row = document.querySelectorAll(`[data-y="${y}"]`);
                        const square = row[1].querySelector(`[data-x="${x}"]`)
                        square.style.backgroundColor = "red"
                       }     
             }
                
    }) })

// function revealShips(player,ship,x,y){
//     let squares = document.querySelectorAll(`[data-x="${x}"]`);
//     squares.forEach((square)=> {
//         if (square.parentNode.dataset.y == y && player=="human"){
//     square.style.backgroundColor = "blue"
//         }
//     })
    
// }

// if(gameboard.placeShip(smallShip,5,5) == true ) {
//     revealShips("human",smallShip,5,5)
// }

// let pSmallShipTwo = Ship(3,'Small Ship')

// function revealShipPlacement(player,ship,x,y){
//     // First locate the square with y coordinate below
//     let row = document.querySelectorAll(`[data-y="${y}"]`);
//     // Then verify it belongs to the X coordinate below
//     // this won't work because it has multiple Y's selected need to verify the
//     // person it's using
//     // Then, for that specific square, perform the following code.
    
//         if (player=="human"){
//         for (let I = 0; I < ship.length; I++) {
//             let square = row[0].querySelector(`[data-x="${x+I}"]`)

//             square.style.backgroundColor = "blue"
//         }   }      
//  }
