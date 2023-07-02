// Store user's name
let userName = "";

// Name Form submission event handler
const nameForm = document.querySelector('#name-form');
nameForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const nameInput = document.querySelector('#name');
  userName = nameInput.value.trim();
  nameInput.disabled = true;
});

// Add Task Form submission event handler
const addTaskForm = document.querySelector('#add-task-form');
addTaskForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const taskDescriptionInput = document.querySelector('#task-description');
  const assigneeInput = document.querySelector('#assignee');
  const taskDescription = taskDescriptionInput.value.trim();
  const assignee = assigneeInput.value.trim();

  if (taskDescription && assignee) {
    const taskList = document.querySelector('#task-list');
    const newTaskItem = document.createElement('li');
    newTaskItem.classList.add('task-item');
    newTaskItem.innerHTML = `
      <p><strong>Task:</strong> ${taskDescription}</p>
      <p><strong>Assigned to:</strong> ${assignee}</p>
    `;
    taskList.appendChild(newTaskItem);

    taskDescriptionInput.value = '';
    assigneeInput.value = '';
  }
});

// Add Comment Form submission event handler
const addCommentForm = document.querySelector('#comment-form');
addCommentForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const commentNameInput = document.querySelector('#comment-name');
  const commentTextInput = document.querySelector('#comment-text');
  const commentName = commentNameInput.value.trim();
  const commentText = commentTextInput.value.trim();

  if (commentName && commentText) {
    const commentList = document.querySelector('#comment-list');
    const newCommentItem = document.createElement('li');
    newCommentItem.classList.add('comment-item');
    newCommentItem.innerHTML = `
      <p><strong>${commentName}:</strong> ${commentText}</p>
    `;
    commentList.appendChild(newCommentItem);

    commentNameInput.value = '';
    commentTextInput.value = '';
  }
});
