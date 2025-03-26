let totalAmount = 0;

function addExpense(){

    let name = document.getElementById("expenseName").value;
    let amount = document.getElementById("expenseAmount").value;
    let totalDisplay = document.getElementById("totalAmount");
    let expenseList = document.getElementById("expenseList");

    if(name.trim() === "" || amount.trim() === ""){
        alert("Please Enter Valid Details ");
        return;
    }

    //creating a new expense item
    let li = document.createElement("li");
    li.innerHTML = `${name}: ${amount} <button class="delete-btn" onclick = "deleleExpense(this, ${amount})">X</button>`;

    expenseList.appendChild(li);

    //updating input fields
    totalAmount += parseInt(amount);
    totalDisplay.textContent = totalAmount;
    
    //clearing input fields
    document.getElementById("expenseName").value = "";

    document.getElementById("expenseAmount").value = "";
}

function deleteExpense(button,amount){
    button.parseElement.remove();
    totalAmount -= parseInt(amount);

    document.getElementById("totalAmount").textContent = totalAmount;
}