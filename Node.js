/*
Filename: complexCode
Content: This code is a complex implementation of a task management system. It includes multiple classes, inheritance, and advanced techniques to handle task creation, organization, and tracking.

Disclaimer: This code is for demonstration purposes only and may not be fully optimized or bug-free.

Usage: Run the code in a JavaScript runtime environment (e.g., Node.js) to see the output.

*/

// Task class represents a single task
class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  markComplete() {
    this.completed = true;
  }

  displayDetails() {
    console.log(`Title: ${this.title}`);
    console.log(`Description: ${this.description}`);
    console.log(`Due Date: ${this.dueDate}`);
    console.log(`Priority: ${this.priority}`);
    console.log(`Status: ${this.completed ? "Completed" : "Pending"}`);
    console.log("-----------------------");
  }
}

// Subclass of Task class - represents tasks with subtasks
class Subtask extends Task {
  constructor(title, description, dueDate, priority) {
    super(title, description, dueDate, priority);
    this.subtasks = [];
  }

  addSubtask(subtask) {
    this.subtasks.push(subtask);
  }

  displayDetails() {
    super.displayDetails();
    if (this.subtasks.length > 0) {
      console.log("Subtasks:");
      this.subtasks.forEach((subtask) => {
        console.log("    - " + subtask.title);
      });
      console.log("-----------------------");
    }
  }
}

// TaskList class manages a collection of tasks
class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  completeTask(task) {
    task.markComplete();
  }

  displayTasks() {
    console.log("Task List:");
    this.tasks.forEach((task) => {
      task.displayDetails();
    });
  }
}

// Creating sample tasks
const task1 = new Task("Finish project", "Complete the final report", "2022-01-31", "High");
const task2 = new Task("Buy groceries", "Get items for tonight's dinner", "2022-02-02", "Medium");

const subtask1 = new Subtask("Research", "Gather information for the report", "2022-01-20", "Low");
const subtask2 = new Subtask("Write", "Start writing the report", "2022-01-23", "Medium");

subtask1.addSubtask(new Task("Read papers", "Review relevant research papers", "2022-01-21", "Low"));
subtask1.addSubtask(new Task("Collect data", "Retrieve necessary data", "2022-01-22", "Medium"));

subtask2.addSubtask(new Task("Introduction", "Write the introduction section", "2022-01-24", "Medium"));
subtask2.addSubtask(new Task("Methodology", "Draft the methodology section", "2022-01-25", "High"));

task1.addSubtask(subtask1);
task1.addSubtask(subtask2);

// Creating a TaskList and managing tasks
const taskList = new TaskList();
taskList.addTask(task1);
taskList.addTask(task2);

taskList.completeTask(task1);

taskList.displayTasks();
