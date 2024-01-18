let x = new Date();

let todoList = [
    {
        item: "STUDY, STUDY & STUDY",
        duedate: "TODAY"
    },
    {
        item: "EARN MONEY",
        duedate: "TODAY"
    }
];
// displayItem();


function addToDo() {
    let inputElement = document.querySelector(".todo");
    let inputDate = document.querySelector(".date");
    let todoItem = inputElement.value;
    let todoDate = inputDate.value;
    todoList.push(
        {
            item: todoItem,
            duedate: todoDate
        });

    inputElement.value = '';
    inputDate.value = '';
    localStorage.setItem('newHtml', JSON.stringify(todoList));
    displayItem();
}



function displayItem() {
    let displayElement = document.querySelector("#toDoContainer");
    let newHtml = "";
    for (i = 0; i < todoList.length; i++) {

        let { item, duedate } = todoList[i];
        newHtml +=
            ` <span class= "list">${item}</span>
            <span class="list">${duedate}</span>
         <button class="delBtn" onclick="todoList.splice(${i}, 1); displayItem(); localStorage.setItem('newHtml', JSON.stringify(todoList));"> Delete </button>
        ` ;
    }
    displayElement.innerHTML = newHtml;
}



let newHtmlContent = localStorage.getItem('newHtml');
let newHtml;
if (newHtmlContent !== null) {
    todoList = JSON.parse(newHtmlContent);
}
displayItem();


function resetList() {
    todoList.splice(2);
    displayItem();

}

