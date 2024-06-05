document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('addTaskButton');
    const resetListButton = document.getElementById('resetListButton');
    const taskInput = document.getElementById('taskInput');
    const ongoingTasks = document.getElementById('ongoingTasks');
    const completedTasks = document.getElementById('completedTasks');

    addTaskButton.addEventListener('click', () => {
        const taskValue = taskInput.value.trim();
        if (taskValue) {
            const listItem = createTaskElement(taskValue);
            ongoingTasks.appendChild(listItem);
            attachSwipeEvents(listItem);
            refreshList(ongoingTasks);
            taskInput.focus();
        } else {
            alert('Veuillez entrer une tâche.');
        }
    });

    resetListButton.addEventListener('click', () => {
        ongoingTasks.innerHTML = '';
        completedTasks.innerHTML = '';
        refreshList(ongoingTasks);
        refreshList(completedTasks);
    });

    function createTaskElement(task) {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        return listItem;
    }

    function attachSwipeEvents(listItem) {
        $(listItem).on('swiperight', handleTaskMove);
        $(listItem).on('swipeleft', handleTaskRemove);
    }

    function handleTaskMove(event) {
        const targetElement = event.target;
        if (targetElement.parentElement.id === 'ongoingTasks') {
            animateTaskMove(targetElement, completedTasks);
        } else {
            animateTaskMove(targetElement, ongoingTasks);
        }
    }

    function animateTaskMove(taskElement, targetList) {
        $(taskElement).animate({ left: '100%' }, 500, function () {
            $(taskElement).css('left', '').appendTo(targetList);
            refreshList(ongoingTasks);
            refreshList(completedTasks);
        });
    }

    function handleTaskRemove(event) {
        const targetElement = event.target;
        $(targetElement).animate({ left: '-100%' }, 500, function () {
            $(targetElement).remove();
            refreshList(ongoingTasks);
            refreshList(completedTasks);
        });
    }

    function refreshList(list) {
        $(list).listview('refresh');
    }
});
