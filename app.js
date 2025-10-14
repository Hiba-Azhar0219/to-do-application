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
  taskList.forEach((task) => {
    const listItem = document.createElement('li')
    listItem.innerHTML = `
    <div class = "taskItem">
    <div className="task">
    <input type="checkbox" class="checkbox" />
    <p>Finish this task</p>
    </div>

    <div className="icons">
    <img src = "./img/edit.png"/>
    <img src = "./img/bin.png"/>
    </div>
    </div>
    `
  })
}

document.getElementById('newTask').addEventListener('click', function (e) {
  e.preventDefault()
  addTask()
})
