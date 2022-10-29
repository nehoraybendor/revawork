import WorkerClass from "./workerCalss.js";


export const doApisaerch = async(search) => {
    let url = `https://randomuser.me/api/?results=15&seed=${search}`;
    console.log(url);
    try{
        let resp = await fetch(url);
        let data = await resp.json();
        createList(data.results);
        }
        catch(err){
            console.log(err);
            alert("There problem come back later");
        }
}

const createList = (_ar) => {
    document .querySelector("#id_row").innerHTML = "";
    _ar.forEach(el => {
        let worker = new WorkerClass("#id_row",el);
        worker.render();
    })
}
