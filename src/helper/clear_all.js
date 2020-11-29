const ul_p = document.querySelector("#u_l");

export const clear_all_items = () => {
  if (
    ul_p.hasChildNodes() == true &&
    confirm("Are you sure to delete all task permenantly?")
  ) {
    ul_p.querySelectorAll("*").forEach((n) => n.remove());
    localStorage.clear();
  } else {
    alert("No Task is present to clear!!! ");
  }
};
