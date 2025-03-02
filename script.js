document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.getElementById("taskForm");
    const taskList = document.getElementById("taskList");
    const filterButton = document.getElementById("filterCompleted");

    taskForm.addEventListener("submit", function (e) {
        e.preventDefault();// Prevent reload

        const taskTitle = document.getElementById("taskTitle").value.trim();
        const taskDesc = document.getElementById("taskDesc").value.trim();
        const priority = document.querySelector('input[name="priority"]:checked').value;

        if (taskTitle === "") {
            alert("Görev başlığı boş olamaz!");
            return;
        }

        const li = document.createElement("li");

        li.innerHTML = `
            <span><strong>${taskTitle}</strong> - ${taskDesc} (${priority})</span>
            <button class="complete-btn">Tamamlandı</button>
            <button class="delete-btn">Sil</button>
        `;

        taskList.appendChild(li);

        document.getElementById("taskTitle").value = "";
        document.getElementById("taskDesc").value = "";
    });

    taskList.addEventListener("click", function (e) {
        if (e.target.classList.contains("complete-btn")) {
            e.target.parentElement.classList.toggle("completed");
        } else if (e.target.classList.contains("delete-btn")) {
            e.target.parentElement.remove();
        }
    });

    filterButton.addEventListener("click", function () {
        const tasks = document.querySelectorAll("#taskList li");
        tasks.forEach(task => {
            if (!task.classList.contains("completed")) {
                task.style.display = task.style.display === "none" ? "flex" : "none";
            }
        });
    });
});