const food =document.getElementsByClassName("food)"){};
const pencil = document.getElementById("pencil");
const allitems = document.getElementById("allitems");
const user input = document.getElementById("user Input");




pencil.addEventListener(click, function(){} )



userInput.addEventListener("keydown", function (event){
    if(event.key == "enter")
    addItem();
})
function addItem(){
    var h2 = document.createComment("h2");
    h2.innerHTML ="-" + userInput.value;


    h2.addEventListener("click ", function){
        h2.style.textDecoration = "line-through";

        allitems.insertAdjacentElement("beforeend",h2);

        userInput.value = "";
    }
}