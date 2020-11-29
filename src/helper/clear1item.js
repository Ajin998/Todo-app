const ul_p = document.querySelector("#u_l");

export const clear_one_item = () => {
  if (ul_p.hasChildNodes() == true) {
    ul_p.removeChild(ul_p.lastChild);
  } else {
    alert("Nothing to Clear!!");
  }
};
