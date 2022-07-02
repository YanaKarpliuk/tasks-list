// Define UI Vars
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

//Load all event listeners
loadEventListeners()

function loadEventListeners() {
  // DOM load event
  document.addEventListener('DOMContentLoaded', getTasks)
  // Add task event
  form.addEventListener('submit', addTask)
  // Remove task event
  taskList.addEventListener('click', removeTask)
  // Clear task event
  clearBtn.addEventListener('click', clearTasks)
  // Filter task event
  filter.addEventListener('keyup', filterTasks)
}

// Get Tasks from LS
function getTasks() {
  let tasks
  if(localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach(function(task) {
    const li = document.createElement('li')
    li.className = 'collection-item'
    li.appendChild(document.createTextNode(task))
    const link = document.createElement('a')
    link.className = 'delete-item secondary-content'
    link.innerHTML = '<i class="fa fa-remove"></i>'
    li.appendChild(link)
    taskList.appendChild(li)
  })

}

// Add task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task')
  }

  // Create elements
  const li = document.createElement('li')
  li.className = 'collection-item'
  li.appendChild(document.createTextNode(taskInput.value))
  const link = document.createElement('a')
  link.className = 'delete-item secondary-content'
  link.innerHTML = '<i class="fa fa-remove"></i>'
  li.appendChild(link)
  taskList.appendChild(li)

  // Store in LS
  storeTaskInLocalStorage(taskInput.value)

  // Clear Input 
  taskInput.value = ''

  e.preventDefault()
}

// Store Tasks
function storeTaskInLocalStorage(task) {
  let tasks
  if(localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.push(task)

  localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Remove tasks
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are you sure you would like to delete this task?')) {
      e.target.parentElement.parentElement.remove()

      // Remove from LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement)
    }
  }
}

// Remove from LS
function removeTaskFromLocalStorage(taskItem) {
  let tasks
  if(localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task) {
      tasks.splice(index, 1)
    }
  })

  localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Clear tasks
function clearTasks() {
  if(confirm('Are you sure you want to clear all the tasks?')) {
    while(taskList.firstChild) {
      // taskList.innerHTML = ''
      // Another option (faster)
      taskList.removeChild(taskList.firstChild)
    }
  }

  // Clear from LS
  clearTaskFromLocalStorage()
}

// Clear from LS
function clearTaskFromLocalStorage() {
  localStorage.clear()
}

// Filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase()

  document.querySelectorAll('.collection-item').forEach(
    function(task) {
      const item = task.firstChild.textContent
      if(item.toLowerCase().indexOf(text) != -1) {
        task.style.display = 'block'
      } else {
        task.style.display = 'none'
      }
    }
  )
}