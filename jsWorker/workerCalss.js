import {showLightBox} from "./lightbox.js"

export default class WorkerClass{
    constructor(_parent,_item){
        this.parent = _parent;
        this.firstName = _item.name.first;
        this.lastName = _item.name.last;
        this.img = _item.picture.large;
        this.country = _item.location.country;
        this.age = _item.dob.age;
        this.phone = _item.phone;
        this.email = _item.email;
        this.street = _item.location.street.name;
        this.state = _item.location.state;
        this.city = _item.location.city;
    }

    render(){
        let div = document.createElement("div");
        div.className = "col-md-4 d-flex justify-content-center";
        document.querySelector(this.parent).append(div);

        div.innerHTML = `
        <div class="card" style="width: 18rem;">
                    <img src="${this.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${this.firstName} ${this.lastName}</h5>
                      <p class="card-text">Country: ${this.country}</p>
                      <p class="card-text">Age: ${this.age}</p>
                      <button class="btn mybtn btn-outline-warning">More info</button>
                    </div>
                  </div>`

        let btn = div.querySelector(".mybtn");
        btn.addEventListener("click",() => {
            showLightBox(this);
        })
    }
}