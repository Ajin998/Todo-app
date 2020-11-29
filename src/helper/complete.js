export const complete_item = () => {
  document.querySelectorAll("li").forEach((x) => {
    x.addEventListener("click", () => {
      event.target.classList.add("completed-task");
    });
  });
};
