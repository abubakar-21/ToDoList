let btnAdd = document.querySelector(".todo_button");
let toDoList = document.querySelector(".todo_list");
let display = document.querySelector(".todo_input");
let dropDown = document.querySelector('.filter_todo');

btnAdd.addEventListener("click", addElement);
toDoList.addEventListener("click", check);
dropDown.addEventListener("click", dropDownMenu);

function addElement(event) {
    event.preventDefault();

    if (display.value === '') {
        return null;
    }
    
    let li = document.createElement("li");
    let div = document.createElement('div');
    div.classList.add('todo');
    li.classList.add('todo-item');
    
    div.appendChild(li);
    toDoList.appendChild(div);
    li.innerText = display.value;

    let completedBtn = document.createElement('button');
    completedBtn.classList.add("complete_btn");
    completedBtn.innerHTML = '<i class="fas fa-check"></i>'
    let deletedBtn = document.createElement('button');
    deletedBtn.classList.add("delete_btn");
    deletedBtn.innerHTML = '<i class="fas fa-trash"></i>'
    div.appendChild(completedBtn);
    div.appendChild(deletedBtn);
    display.value = '';
    
}

function check(e) {

    //console.log(e.target);

    if (e.target.classList[0] === 'complete_btn') {
        let toDoItem = e.target.parentElement;
        toDoItem.classList.toggle('completedItem');
    }

    if (e.target.classList[0] === 'delete_btn') {
        let toDoItem = e.target.parentElement;
        toDoItem.classList.toggle('fall');
        toDoItem.addEventListener('transitionend', () => {
            toDoItem.remove();
          });
        
    }
    
}

function dropDownMenu(e) {
    //console.log(e.target.value);
    let items = toDoList.childNodes;
    console.log(items);

    items.forEach(function(item){
        switch (e.target.value) {
            case 'all':
                item.style.display = "flex";
                break;
            case 'completed':
                if (item.classList.contains('completedItem')) {                   
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
                break;
            case 'uncompleted':
                if (!item.classList.contains('completedItem')) {
                    
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
                break;        
            default:
                break;
        }
    })
}
