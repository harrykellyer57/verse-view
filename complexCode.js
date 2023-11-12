/* 
* Filename: complexCode.js
* Content: Sample complex JavaScript code implementing a web-based task management application.
* Note: This code is purely for demonstration purposes and may not have full functionality or complete error handling.
*/

// Task class representing a single task
class Task {
  constructor(id, title, description, priority, dueDate, completed) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.completed = completed;
  }

  // Static method to create a new task
  static create(id, title, description, priority, dueDate, completed) {
    return new Task(id, title, description, priority, dueDate, completed);
  }
}

// TaskManager class managing the tasks and providing operations
class TaskManager {
  constructor() {
    this.tasks = [];
    this.taskId = 0;
  }

  // Method to add a new task
  addTask(title, description, priority, dueDate) {
    const task = Task.create(
      this.taskId++,
      title,
      description,
      priority,
      dueDate,
      false
    );
    this.tasks.push(task);
  }

  // Method to remove a task by id
  removeTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  // Method to update the completion status of a task
  toggleTaskCompletion(id) {
    this.tasks.forEach((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
    });
  }

  // Method to get filtered tasks based on completion status
  getTasks(completed) {
    if (completed === "all") return this.tasks;

    return this.tasks.filter(
      (task) => task.completed === (completed === "completed")
    );
  }
}

// Example Usage

const taskManager = new TaskManager();

// Add sample tasks
taskManager.addTask("Task 1", "Sample task 1 description", "High", "2022-01-01");
taskManager.addTask("Task 2", "Sample task 2 description", "Medium", "2022-02-01");
taskManager.addTask("Task 3", "Sample task 3 description", "Low", "2022-03-01");

// Toggle task 2 completion
taskManager.toggleTaskCompletion(1);

// Print all tasks
console.log(taskManager.getTasks("all"));

// Print completed tasks
console.log(taskManager.getTasks("completed"));

// Print pending tasks
console.log(taskManager.getTasks("pending"));

// Remove task 3
taskManager.removeTask(2);

// Print tasks after removal
console.log(taskManager.getTasks("all"));

// Output:
// [Task {...}, Task {...}, Task {...}]
// [Task {...}]
// [Task {...}, Task {...}]
// [Task {...}, Task {...}]