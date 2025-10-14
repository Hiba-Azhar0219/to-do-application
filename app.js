let tasks = []

//addTask function
const addTask = () => {
  const taskInput = document.getElementById('taskInput')
  const text = taskInput.value.trim()
  if (text) {
    tasks.push({ text: text, completed: false })
    updateTasksList()
  }
}
const updateTasksList = () => {
  const taskList = document.getElementById('taskList')
  taskList.innerHTML = ''
  taskList.forEach((task, index) => {
    const listItem = document.createElement('li')
    listItem.innerHTML = `
    <div class = "taskItem">
    <div class="task ${task.completed ? "completed":''}">
    <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""}/>
    <p>${task.text}</p>
    </div>

    <div class="icons">
    <img src = "./img/edit.png" />
    <img src = "./img/bin.png"/>
    </div>
    </div>
    `
listItem.addEventListener('change', () =>toggleTaskComplete(index){

})
    taskList.append(listItem)
  })
}

document.getElementById('newTask').addEventListener('click', function (e) {
  e.preventDefault()
  addTask()
})
