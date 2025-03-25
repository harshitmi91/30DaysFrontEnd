//Funtion for adding task

function AddTask(){
    let taskinput = document.getElementById("taskinput");
    let taskList = document.getElementById("taskList");

    if(taskinput.value.trim() === ""){
        alert("Please Enter a task!");
        return;
    }
   
    //Creating New List item
    let li = document.createElement("li");
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete-btn");
   
    //delete button click event
    deleteBtn.onclick = function (){
       li.remove();
    };
    //list item me task aur dlt add karna
    li.textContent = taskinput.value;
    li.appendChild(deleteBtn);

    //task list me new task add karna
    taskList.appendChild(li);

    //clear input field
    taskinput.value = "";

}
