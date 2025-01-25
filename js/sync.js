import { updateStatus } from "./async.js";
import { deleteData } from "./async.js";
import { showInfo } from "./async.js";
import { updateData } from "./async.js";
import {showStatus} from "./async.js";
import {showCity} from "./async.js";
import { showData } from "./async.js";
import { addNewData } from "./async.js";

let parent = document.querySelector(".parent");
let modalEdit = document.querySelector(".modalEdit");
let closeBtn = document.querySelector(".closeBtn");
let btnView = document.querySelector(".btnView");
let btnEdit = document.querySelector(".btnEdit");
let btnDelete = document.querySelector(".btnDelete");
let modalInfo = document.querySelector(".modalInfo");
let avatarInfo = document.querySelector(".avatarInfo");
let nameInfo = document.querySelector(".nameInfo");
let emailInfo = document.querySelector(".emailInfo");
let cityInfo = document.querySelector(".cityInfo");
let statusInfo = document.querySelector(".statusInfo");
let phoneInfo = document.querySelector(".phoneInfo");
let closeInfo = document.querySelector(".closeInfo");
let btnDeleteI = document.querySelector(".btnDeleteI");
let btnEditI = document.querySelector(".btnEditI");
let modalChange = document.querySelector(".modalChange");
let headerEdit = document.querySelector(".headerEdit")
let formEdit = document.querySelector(".formEdit");
let btnCancel = document.querySelector(".btnCancel");
let status = document.querySelector("#status");
let city = document.querySelector("#city");
let formSearch = document.querySelector(".search");
let btnAdd = document.querySelector(".btnAdd");
let lightMode = document.querySelector(".light_mode");
let darkMode = document.querySelector(".dark_mode");

// for Modes
let body = document.querySelector(".body");
let top = document.querySelector(".top");
let filters = document.querySelector(".filters");
let table = document.querySelector(".table");
let th = document.querySelectorAll("#th")



lightMode.onclick = ()=>{
     body.style.backgroundColor = "white";
     body.style.color = "black";
     top.style.backgroundColor = "white";
     top.style.color = "black";
     filters.style.backgroundColor = "white";
     filters.style.color = "black";
     modalEdit.style.backgroundColor = "white";
     modalEdit.style.color = "black";
     modalInfo.style.backgroundColor = "white";
     modalInfo.style.color = "black";
     modalChange.style.backgroundColor = "white";
     modalChange.style.color = "black";
     table.style.backgroundColor = "white";
     table.style.color = "black"; 
     th.style.backgroundColor = "#dbdde8";
     th.style.color = "black";  
}

darkMode.onclick = ()=>{
     body.style.backgroundColor = "darkGray";
     body.style.color = "white";
     top.style.backgroundColor = "darkGray";
     top.style.color = "white";
     filters.style.backgroundColor = "darkGray";
     filters.style.color = "white";
     modalEdit.style.backgroundColor = "darkGray";
     modalEdit.style.color = "white";
     modalInfo.style.backgroundColor = "darkgray";
     modalInfo.style.color = "white";
     modalChange.style.backgroundColor = "darkgray";
     modalChange.style.color = "white";
     table.style.backgroundColor = "darkgrey";
     table.style.color = "white"; 
     th.style.backgroundColor = "darkgrey";
     th.style.color = "white";

}

btnAdd.onclick = () => {
    modalChange.showModal();
    headerEdit.innerHTML = "Add new"; 
    formEdit.onsubmit = () => {
        let newData ={
            avatar: formEdit["avatar"].value,
            name: formEdit["name"].value,
            email: formEdit["email"].value,
            phone: formEdit["phone"].value,
            status: formEdit["status"].value,
            city: formEdit["city"].value
        }
        addNewData(newData);
        modalChange.close();
    }
}

formSearch.onsubmit = (event)=>{
    event.preventDefault();
    let search = formSearch["search"].value;
    showData(search);
}

city.onclick = ()=>{
    let result = city.value
    showCity(result);
}

status.onclick = ()=>{
    let result = status.value
    showStatus(result)  
}


closeBtn.onclick = () => {
    modalEdit.close();
  };

function openButtons(e) {
  modalEdit.showModal();
  btnDelete.onclick = () => {
    deleteData(e);
    modalEdit.close();
  };
  btnView.onclick = () => {
    modalInfo.showModal();
    showInfo(
      e,
      avatarInfo,
      nameInfo,
      emailInfo,
      cityInfo,
      statusInfo,
      phoneInfo
    );
    modalEdit.close();
    closeInfo.onclick = () => {
      modalInfo.close();
    };
    btnDeleteI.onclick = () => {
      deleteData(e);
      modalInfo.close();
    };
    btnEditI.onclick = () => {
      openModalEdit(e);
      modalEdit.close();
    };
  };
  btnEdit.onclick = ()=>{
    openModalEdit(e);
    modalEdit.close();
  };
}

function openModalEdit(e) {
  modalChange.showModal();
  headerEdit.innerHTML = "Edit user";
  formEdit["avatar"].value = e.avatar;
  formEdit["name"].value = e.name;
  formEdit["email"].value = e.email;
  formEdit["city"].value = e.city;
  formEdit["status"].checked = e.status;
  formEdit["phone"].value = e.phone;
  formEdit.onsubmit = (event) => {
    event.preventDefault();
    let avatar = formEdit["avatar"].value;
    let name = formEdit["name"].value;
    let email = formEdit["email"].value;
    let city = formEdit["city"].value;
    let status = formEdit["status"].checked;
    let phone = formEdit["phone"].value;
    updateData(e, avatar, name, email, city, status, phone);
    modalChange.close();
  };
}

btnCancel.onclick = () => {
  modalEdit.close();
  modalChange.close();
}

function getData(data) {
    parent.innerHTML = "";
  data.forEach((e) => {
    let div = document.createElement("tr");
    div.className = "child";
    let profil = document.createElement("td");
    profil.className = "profil";
    let photo = document.createElement("img");
    photo.src = e.avatar;
    photo.alt = e.name;
    photo.className = "photo";
    let information = document.createElement("div");
    let name = document.createElement("h3");
    name.innerHTML = e.name;
    let Email = document.createElement("p");
    Email.innerHTML = e.email;
    information.append(name, Email);
    profil.append(photo, information);
    let city = document.createElement("td");
    city.innerHTML = e.city;
    let tdstatus = document.createElement("td");
    let status = document.createElement("button");
    status.style.color = "white";
    status.style.border = "none";
    status.style.padding = "4px 7px"
    status.innerHTML = e.status ? "ACTIVE" : "INACTIVE";
    status.style.backgroundColor = !e.status ? "#748998" : "#259323";
    status.onclick = () => {
      updateStatus(e);
    };
    tdstatus.appendChild(status);
    let phone = document.createElement("td");
    phone.innerHTML = e.phone;
    let tdbtn = document.createElement("td");
    let btns = document.createElement("p");
    btns.innerHTML = "...";
    btns.style.color = "#259323";
    btns.style.fontSize = "26px";
    btns.onclick = () => {
      openButtons(e);
    };
    tdbtn.append(btns);

    div.append(profil, city, tdstatus, phone, tdbtn);
    parent.append(div);
  });
}

export default getData;
