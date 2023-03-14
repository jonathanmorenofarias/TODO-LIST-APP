const todo_List = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [""];

document.querySelector("#forward-todo").addEventListener("click", () => {
    const saved_text = document.querySelector("#entered-item")
    insert_Item(saved_text)
})

function insert_Item(saved_text) {
    todo_List.push(saved_text.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    location.reload()
}

function show_Item() {
    let items = ""
    for (let i = 0; i < todo_List.length; i++) {
        items+= `<div class = "item">
                    <h3>${todo_List[i]}</h3>
                </div>`
    }
    document.querySelector(".real-list").innerHTML = items
}

function show_Date() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const date = new Date();
    document.querySelector("#date").innerHTML = days[date.getDay()] + " " + months[date.getMonth()] + " " + date.getDate()
}

window.onload = function() {
    show_Date()
    show_Item()
};

