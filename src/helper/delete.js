const ul_p = document.querySelector("#u_l");

export const delete_item = () => {
  document.querySelectorAll("li").forEach((x) => {
    x.addEventListener("dblclick", () => {
      ul_p.removeChild(event.target);
    });
  });
};
