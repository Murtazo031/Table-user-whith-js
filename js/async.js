import getData from "./sync.js";

let API = "http://localhost:3000/data"

async function get() {
    try {
        let { data } = await axios.get(API);
        getData(data);
    } catch (error) {
       console.log(error);
    }
}

async function updateStatus(e){
    try {
        let { data } = await axios.put(`${API}/${e.id}`,{
            ...e,
            status : !e.status
        })
        get()
    } catch (error) {
        console.log(error);
    }
}

async function deleteData (e){
    try {
        let { data } = await axios.delete(`${API}/${e.id}`);
        get()
    } catch (error) {
        console.log(error);
    }
}

async function showInfo (e,avatar,name,email,city,status,phone){
    try {
        let { data } = await axios.get(`${API}/${e.id}`);
        avatar.src = data.avatar
        name.innerHTML = data.name
        email.innerHTML = data.email
        city.innerHTML = data.city  
        status.innerHTML = data.status? "Active" : "Inactive"
        phone.innerHTML = data.phone
    } catch (error) {
        console.log(error);
    }
}

async function updateData(e, avatar, name, email, city, status, phone) {
     try {
        let { data } = await axios.put(`${API}/${e.id}`, {
            avatar: avatar,
            name: name,
            email: email,
            city: city,
            status: status,
            phone: phone
        });
        get();
     } catch (error) {
        console.log(error);
     }    
}

async function showStatus(result) {
    if (result=="All") {
        get();
    }
    else if (result=="true") {
        try {
            let { data } = await axios.get(`${API}?status=${"true"}`);
            getData(data);
        } catch (error) {
           console.log(error);
        }
    }
    else if (result=="false") {
        try {
            let { data } = await axios.get(`${API}?status=${"false"}`);
            getData(data);
        } catch (error) {
           console.log(error);
        }
    }
}

async function showCity(result) {
    if (result=="Dushanbe") {
        try {
            let { data } = await axios.get(`${API}?city=${"Dushanbe"}`);
            getData(data);
        } catch (error) {
           console.log(error);
        }
    }
    else if (result=="Bokhtar") {
        try {
            let { data } = await axios.get(`${API}?city=${"Bokhtar"}`);
            getData(data);
        } catch (error) {
           console.log(error);
        }
    }
    else if (result=="Kulob") {
        try {
            let { data } = await axios.get(`${API}?city=${"Kulob"}`);
            getData(data);
        } catch (error) {
           console.log(error);
        }
    }
    else if (result=="Khujand") {
        try {
            let { data } = await axios.get(`${API}?city=${"Khujand"}`);
            getData(data);
        } catch (error) {
           console.log(error);
        }
    }
    else if (result=="Hisor") {
        try {
            let { data } = await axios.get(`${API}?city=${"Hisor"}`);
            getData(data);
        } catch (error) {
           console.log(error);
        }
    }
    else if (result == "All City"){
        get();
    }
}

async function showData(search) {
    try {
        let { data } = await axios.get(`${API}?name=${search}`);
        getData(data);
    } catch (error) {
        console.log(error);
    }
    
}

async function addNewData(newData) {
    try {
        let { data } = await axios.post(API,newData)
        get();
    } catch (error) {
        console.error();
    }
}

export {addNewData}
export {showData}
export {showCity}
export {showStatus}
export {updateData}
export {showInfo}
export {deleteData};
export {updateStatus};
export default get;