function makeGrid(size=16) {
    randomColor = false
    let grid = document.querySelector('.grid-container')
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div')
        row.setAttribute('class', 'row')
        grid.appendChild(row)
        for(let j = 0; j < size; j++){
            let gridElement = document.createElement('div')
            gridElement.setAttribute('class', 'grid-element')
            gridElement.addEventListener('mouseover', (e) => {
                gridElement.setAttribute('style', 'background-color: black')
            })
            row.appendChild(gridElement)
        }
    }
}

function cleanGrid() {
    randomColor = false
    let grid = document.querySelector('.grid-container')
    grid.innerHTML = ''
}

let size = 16
let randomColor = false

const btn = document.querySelector('.button')
const btn2 = document.querySelector('.button-2')
const btn3 = document.querySelector('.button-3')

btn2.addEventListener('click', () => {
    cleanGrid()
    makeGrid(size)
})

btn.addEventListener('click', () => {
    let temp = prompt('Input the size of the new grid. Less than 100.')
    if (temp > 100) {
        alert('The size cant be larger than 100')
    } else {
        size = temp
        cleanGrid()
        makeGrid(size)
    }
})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

btn3.addEventListener('click', () => {
    if (!randomColor) {
        randomColor = true
        let blocks = document.querySelectorAll('.grid-element')
        blocks.forEach(element => {
            element.addEventListener('mouseover', (e) => {
                element.setAttribute('style', 'background-color: '+ getRandomColor())
            })
        });
    }else {
        randomColor = false
        let blocks = document.querySelectorAll('.grid-element')
        blocks.forEach(element => {
            element.addEventListener('mouseover', (e) => {
                element.setAttribute('style', 'background-color: black')
            })
        });
    }
})

makeGrid(size)