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
                    <h2>${todo_List[i]}</h2>
                </div>`
    }
    document.querySelector(".real-list").innerHTML = items
}

function show_Date() {
    let date = new Date()
    date = date.toString().split(" ")
    document.querySelector("#date").innerHTML = date[1] + " " + date[2]
}

window.onload = function() {
    show_Date()
    show_Item()
};

