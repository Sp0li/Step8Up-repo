

document.getElementById("addtaskButton").addEventListener("click",addNewTask)

function addNewTask() {
    let TodoTask = document.getElementById("todotask").value;
    document.getElementById("todotask").value = "";
    let isunique = true;

    for(i=0;i<todolist.children.length;i++)
    {
        if(todolist.children[i].innerHTML==TodoTask)
        {
            isunique=false;
            document.getElementById("todotask").setAttribute("placeholder","Enter a unique task")
        }
    }

    if(TodoTask!="" && isunique)
    {
        document.getElementById("todotask").setAttribute("placeholder","Enter a task")
        addItem(TodoTask);
    }
}

var index = 0;
function addItem(TodoTask) {
    let NewTask = document.createElement("li");
    NewTask.id = index;
    index++;
    NewTask.textContent = TodoTask;
    document.getElementById("todolist").appendChild(NewTask);
    NewTask.addEventListener("click",function(e) {
        let todolist = document.getElementById("todolist");
        try {
            //todolist.removeChild(todolist.children[e.target.id]);
            document.getElementById(e.target.id).remove()
            
        } catch (TypeError) {
            console.log(todolist.children)
            for(i=0;i<todolist.children.length;i++)
            {
                console.log(todolist.children[i].innerHTML,i);
                if(todolist.children[i].innerHTML=="") {
                    console.log(document.getElementById(i))
                }
            }
        }
        
        
    })
}

addItem("Click to delete me!");


/*
//sessionStorage

clearLocalStorage();

var localStorageLength = 0

function clearLocalStorage() {
    localStorage.clear();
}


document.getElementById("addtaskButton").addEventListener("click",addNewTask)

function addNewTask() {
    let TodoTask = document.getElementById("todotask").value;
    if(TodoTask!="")
    {
        localStorage.setItem(localStorage.length,TodoTask);
        addItem(TodoTask,localStorage.length-1);
    }
    refreshToDoList();
}

function addItem(TodoTask,index) {
    let NewTask = document.createElement("li");
    NewTask.id = index;
    NewTask.textContent = TodoTask;
    document.getElementById("todolist").appendChild(NewTask);
    document.getElementById(index).addEventListener("click",function(e) {
        let todolist = document.getElementById("todolist");
        //todolist.removeChild(todolist.children[e.target.id]);
        document.getElementById(e.target.id).remove();
        localStorage.removeItem(e.target.id);

        refreshToDoList();
    })
}

function refreshToDoList() {
    let todolist = document.getElementById("todolist")

    //console.log(localStorage);
    while (todolist.hasChildNodes()) {
        //console.log(todolist.firstChild.textContent);

        todolist.removeChild(todolist.firstChild);
    }

    for(i=0;i<localStorage.length;i++)
    {
        addItem(localStorage.getItem(i),i)
    }
}

*/