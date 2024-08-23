document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("homeworkForm");
    const assignmentInput = document.getElementById("assignment");
    const dueDateInput = document.getElementById("dueDate");
    const homeworkList = document.getElementById("homeworkList");

    // Load existing homework from local storage
    loadHomework();

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const assignment = assignmentInput.value.trim();
        const dueDate = dueDateInput.value;

        if (assignment && dueDate) {
            // Create a new list item
            const listItem = document.createElement("li");
            listItem.textContent = `${assignment} - Due: ${dueDate}`;
            homeworkList.appendChild(listItem);

            // Save to local storage
            const homework = { assignment, dueDate };
            let homeworkListArray = JSON.parse(localStorage.getItem("homeworkList")) || [];
            homeworkListArray.push(homework);
            localStorage.setItem("homeworkList", JSON.stringify(homeworkListArray));

            // Clear the form
            form.reset();
        }
    });

    function loadHomework() {
        const savedHomework = JSON.parse(localStorage.getItem("homeworkList")) || [];
        savedHomework.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.assignment} - Due: ${item.dueDate}`;
            homeworkList.appendChild(listItem);
        });
    }
});
