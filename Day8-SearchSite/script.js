function handleSearch(){
    const query = document.getElementById("searchInput").value;
    const answerBox = document.getElementById("answerBox");

    if(query.trim() === ''){
        answerBox.innerHTML = "Please enter a question!";
        return;
    }

    answerBox.innerHTML = "Thinking ...";

    //Dummy answer (simulate AI response)
    setTimeout(() =>{
        //Replace this part with Actual API call later
    answerBox.innerHTML = "This is AI-generated response for: <b>${query}</b>";
    },1500)
}
function handleReset(){
    document.getElementById("searchInput").value='';
    document.getElementById("answerBox").innerHTML='';
}