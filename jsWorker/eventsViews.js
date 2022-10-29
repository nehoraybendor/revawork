import {doApisaerch} from "./workerManager.js";

export const declareEvents = () => {
    let btn = document.querySelector("#btnsc");
    let id_input = document.querySelector("#input");
    let input = document.querySelector("#input").value;

    btn.addEventListener("click",() => {
        doApisaerch(input);
    })

    id_input.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            doApisaerch(input);
        }
      })
}