/* const lists = document.querySelector('.list');
const doneBox = document.querySelector('.done')
const toDoBox = document.querySelector('.to-do')

for (list of lists) {
    list.addEventListener('dragstart', function(e){
        let selected = e.target;

        doneBox.addEventListener('dragover', function(e){
            e.preventDefault();
        })
        doneBox.addEventListener('drop', function(e){
            rightBox.appendChild(selected);
            selected = null;
        })
    })
}
 */

let lists = document.getElementsByClassName('list');
let doneBox = document.querySelector('.done')
let toDoBox = document.querySelector('.to-do')

function handleDragStart(e) {
    let selected = e.target;

    doneBox.addEventListener('dragover', function(e){
        e.preventDefault();
    })
    doneBox.addEventListener('drop', function(e){
        doneBox.appendChild(selected);
        selected = undefined;
    })

    toDoBox.addEventListener('dragover', function(e){
        e.preventDefault();
    })
    toDoBox.addEventListener('drop', function(e){
        toDoBox.appendChild(selected);
        selected = undefined;
    })
}

for (let list of lists) {
    list.addEventListener('dragstart', handleDragStart)
}