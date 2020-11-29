const root = document.querySelector(".to_display");
const ul_p = document.querySelector("#u_l");
var el;
var list_el;

export const addtask = (e) => {
  if (
    TaskList.value !== "" &&
    /\S/.test(TaskList.value) &&
    /[a-zA-Z]/.test(TaskList.value)
  ) {
    el = document.createElement("li");
    el.textContent = TaskList.value;
    el.className = "elements";
    el.style = " width:50%; margin-bottom: 20px";

    ul_p.append(el);
    root.append(ul_p);
    list_el = document.querySelectorAll(".elements");

    //COMPLETED TASK
    list_el.forEach((x) => {
      x.addEventListener("click", () => {
        event.target.classList.add("completed-task");
      });
    });

    //DELETE A TASK
    list_el.forEach((x) => {
      x.addEventListener("dblclick", () => {
        event.target.parentElement.removeChild(event.target);
      });
    });
    TaskList.value = "";
    localStorage.setItem("Task_items", ul_p.innerHTML);
  } else {
    alert(
      "Make Sure your Task should not be empty!! \n Or it should not start with special character\n.,/<>?[]|..."
    );
  }
};
