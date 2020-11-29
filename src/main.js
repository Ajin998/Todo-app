import { addtask } from "./helper/additems.js";
import { clear_one_item } from "./helper/clear1item.js";
import { clear_all_items } from "./helper/clear_all.js";
import { delete_item } from "./helper/delete.js";
import { complete_item } from "./helper/complete.js";
const ul_p = document.querySelector("#u_l");
const button_to_fetch = document.querySelector("#task-fetch");
const clear = document.querySelector("#task_to_clear");
const clear_all = document.querySelector("#clear_trash");

ul_p.innerHTML = localStorage.getItem("Task_items");

//EVENT HANDLERS
button_to_fetch.addEventListener("click", addtask);
clear.addEventListener("click", clear_one_item);
clear_all.addEventListener("click", clear_all_items);

//DELETE TASK
delete_item();
//COMPLETE TASK
complete_item();
