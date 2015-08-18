//Problem: User interaction doesn't provide desired results
//Solution: Add interactivity so the user  can manage daily tasks

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

//New task list item
var createNewTaskElement = function(taskString) {
	//Create 
	var listItem = ;
	//input (checkbox)
		//label
		//input (text)
		//button.edit
		//button.delete
		//each elements, need modified and appended
	return listItem;
}



//Add a new task
var addTask = function() {
	console.log("Add task...");
	//create a new list item with the text from #new-task
	var listItem = createNewTaskElement("Some new task");
		
	//append listItem to incompleteTaskHolder
	
}

//Edit existing task
var editTask = function() {
	console.log("Edit task...");
	//when the edit button is pressed
		//if class of the parent is .editMode
			//switch from .editMode
			//label text become the input's value
		//else
			//switch to .editMode
			//inout value becomes the label's text

		//toggle .editMode
}

//Delete an existing task
var deleteTask = function() {
	console.log("Delete task...");
	//when the delete button is pressed
		//remove parent list item from ul
}

//Mark a task as complete
var taskCompleted = function() {
	console.log("Task completed...");
	//when checkbox is checked
		//append task list item to the #completed-tasks
}


//Mark a task as incomplete
var taskIncomplete = function() {
	console.log("Task incomplete...");
	//when the checkbox is unchecked
		//append the task list to #incomplete-tasks
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	console.log("Bind list item events")
	//select taskListItem's children
	var checkBox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");
		//bind editTask to edit button
	editButton.onclick = editTask;
		//bind deleteTask to delete button
	deleteButton.onclick = deleteTask;
		//bind checkBoxEventHandler to checkbox
	checkBox.onchange = checkBoxEventHandler;
}



//set the click handler to the addTask function
addButton.onclick = addTask;

//cycle over the incompleteTasksHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
		//bind events to list item's children (taskCompleted)
	bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}
//cycle over the completeTasksHolder ul list items
for(var i = 0; i < completedTasksHolder.children.length; i++) {
		//bind event's to list item's children (taskIncomplete)
	bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}














