export const lightboxInit = () => {
    showBox();
    hideBox();
  }
  
  const showBox = () => {
    let divLight = document.createElement("div");
    divLight.className = "light_box";
    divLight.id = "id_lightbox";
    document.body.append(divLight);
    divLight.innerHTML =
      ` <div class="light_box_inside ">
          <img id="id_img">
          <h2 id="id_name"></h2>
          <div><p>mail: <span id="id_mail"></span></p>
          <p>number: <span id="id_num"></span></p>
          <p>location: <span id="id_location"></span></p></div>
          <button class="btn btn-primary myBtn">Close</button>
        </div>   `
  
    let closebtn = divLight.querySelector(".myBtn");
    closebtn.addEventListener("click", hideBox)
  }
  
  const hideBox = () => {
    let id_lightbox = document.querySelector("#id_lightbox");
    id_lightbox.style.display = "none";
  }
  
  export const showLightBox = (_item) => {
    
    let id_lightbox = document.querySelector("#id_lightbox");
    id_lightbox.style.display = "flex";
  
    document.querySelector("#id_img").src = _item.img
    document.querySelector("#id_name").innerHTML = _item.firstName + " " + _item.lastName;
    document.querySelector("#id_mail").innerHTML = _item.email;
    document.querySelector("#id_num").innerHTML = _item.phone;
    document.querySelector("#id_location").innerHTML = "country:"+ _item.country + " state:" + _item.state + " city:" + _item.city + " street:" +_item.street;
  }