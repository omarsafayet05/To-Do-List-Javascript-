document.querySelector("#add").addEventListener("click", () => {
  if (document.querySelector(".taskInput").value.length === 0) {
    alert("Please Enter A Task");
  } else {
    document.querySelector("#tasks").innerHTML += `
    <div class="task">
            <span class="taskname">
                ${document.querySelector(".taskInput").value}
            </span>
            <div class="footer">
                <button class="delete">
                    <ion-icon name="trash-outline"></ion-icon>
                </button>
                <span class="date">
                    ${new Date().toLocaleString()}
                </span>
            </div>
        </div>
    `;
  }
  let currentTask = document.querySelectorAll(".delete");
  for (let i = 0; i < currentTask.length; i++) {
    const element = currentTask[i];
    element.addEventListener("click", () => {
      element.parentNode.parentNode.remove();
    });
  }
  document.querySelector(".taskInput").value = "";
});
