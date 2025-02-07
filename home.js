document.getElementById("button").addEventListener("click", clickButton)

function clickButton (){
    if(document.getElementById('text').value.length ==0){
        alert("Please add your task.!")
    }

    else{
        document.getElementById('tasks').innerHTML += `
    <div class="task">
        <span id="taskname">
            ${
                document.getElementById('text').value
            }
        </span>
        <button class="delete">
            Delete
        </button>
    </div>
`;

    }

    var current_task=document.querySelectorAll(".delete");
    for(var i=0; i<current_task.length;i++){
        current_task[i].addEventListener("click", removeTask)
        function removeTask(){
            this.parentNode.remove();
        }
    }

    var taskFinish=document.querySelectorAll(".task");
    for(var i=0; i<taskFinish.length; i++){
        taskFinish[i].addEventListener("click", finish);
        function finish(){
            this.classList.toggle('finish');
        }
        
    }

    document.getElementById("text").value="";
}