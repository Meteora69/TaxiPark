function displayAllDataFromLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        console.log(`Key: ${key}, Value: ${value}`);
    }
}

function buildElementToPage(id, elem) {
    if (!elem || !elem.brand || !elem.model || !elem.license || !elem.driver || !elem.condition || !elem.pictname) {
        console.warn(`Skipping element with id ${id} due to missing required fields.`);
        return;
    }

    const element = document.createElement('div');
    element.classList.add('element');
    element.insertAdjacentHTML('afterbegin', `
    <div class="element-data">
        <img src="img/${elem.pictname}" class="element-img">
        <div class="element-brand">${elem.brand}</div>
        <p class="element-text">Model: <span class="element-model">${elem.model}</span></p>
        <p class="element-text">License Plate: <span class="element-license">${elem.license}</span></p>
        <p class="element-text">Driver: <span class="element-driver">${elem.driver}</span></p>
        <p class="element-text">Condition: <span class="element-condition">${elem.condition}</span></p>
    </div>
    <div class="element-footer">
        <button class="green-button" onclick="modifyModalToEdit(${id})">Edit</button><span> </span>
        <button class="red-button" onclick="removeElementFromStorage(${id})">Delete</button>
    </div>
    <p></p>
    `);
    document.getElementsByClassName("displayzone")[0].appendChild(element);
}

function modifyModalToCreate() {
    document.getElementsByClassName("modal-title")[0].innerText = "Create new Taxi"
    document.getElementById("submitbtn").setAttribute("onclick", `addElementToLocalStorage()`)
    document.getElementById("submitbtn").innerText = "Create"
    document.getElementById("img-prev-section").setAttribute("style", "display: none")
    document.getElementById("label-select-img").innerText = "Select image file:"
    modal.open()
}

function modifyModalToEdit(id) {
    document.getElementsByClassName("modal-title")[0].innerText = "Edit Taxi"
    document.getElementById("submitbtn").innerText = "Update"
    document.getElementById("submitbtn").setAttribute("onclick", `editElementInLocalStorage(${id})`)
    let edElem = JSON.parse(localStorage.getItem(id))
    document.getElementById("brand").value = edElem.brand;   
    document.getElementById("model").value = edElem.model;
    document.getElementById("license").value = edElem.license;
    document.getElementById("driver").value = edElem.driver;
    document.getElementById("condition").value = edElem.condition;
    document.getElementById("imgprev").setAttribute("src", `img/${edElem.pictname}`)
    document.getElementById("label-select-img").innerText = "You can choose another image file:"
    document.getElementById("img-prev-section").setAttribute("style", "display: block")

    modal.open()
}


function showPrewImg(){
    let filename = document.getElementById("imgfile").value.replace(/C:\\fakepath\\/, ''); 
    document.getElementById("imgprev").setAttribute("src", `img/${filename}`)
    document.getElementById("label-select-img").innerText = "You can choose another image file:"
    document.getElementById("img-prev-section").setAttribute("style", "display: block")
}


document.getElementById("imgfile").addEventListener("change", showPrewImg)

function validBrandAndCondition(){
    let valid = true;
    let showMsg = '';
    let formBrand = document.getElementById("brand").value.trim();
    let formCondition = document.getElementById("condition").value.trim();
    
    if (!formBrand) {
        showMsg = 'Car brand field is empty. INPUT CAR BRAND. '
        valid = false;
    }  
    
    if (!formCondition) {
        showMsg = showMsg + 'Car condition field is empty. INPUT CAR CONDITION. '
        valid = false;
    }
    
    if (valid) {return valid} else {alert (showMsg)}
}
function validImg() {
    if (document.getElementById("imgfile").value) {return true} 
    else {
        alert ("The image for the car was not selected. SELECT an IMAGE for the CAR. ")
        return false} ;
}


function addElementToLocalStorage() {
    if (validBrandAndCondition() && validImg()) {
       
        if (localStorage.getItem("shopOpened") !== null) {
            localStorage.removeItem("shopOpened");
        }

      
        let keyArr = [];
        for (let i = 0; i < localStorage.length; i++) {
            let key = Number(localStorage.key(i));
            if (!isNaN(key)) { 
                keyArr.push(key);
            }
        }
        
        let freeKey;
        if (keyArr.length === 0) {
            freeKey = 1;
        } else {
            freeKey = Math.max(...keyArr) + 1;
        }
        
       
        let filename = document.getElementById("imgfile").value.replace(/C:\\fakepath\\/, ''); // Обрізаємо C:\fakepath\
      
        const newElement = {};
        newElement.brand = document.getElementById("brand").value;
        newElement.model = document.getElementById("model").value;
        newElement.license = document.getElementById("license").value;
        newElement.driver = document.getElementById("driver").value;
        newElement.condition = document.getElementById("condition").value;
        newElement.pictname = filename;
       
        let rowSt = JSON.stringify(newElement)
        
        localStorage.setItem(`${freeKey}`, rowSt)
        modal.close()
        setTimeout(location.reload(), 1000)
    }
}
   
function editElementInLocalStorage(id) {
    if (validBrandAndCondition()) {
        let edElem = JSON.parse(localStorage.getItem(id))
        edElem.brand =  document.getElementById("brand").value;   
        edElem.model = document.getElementById("model").value;   
        edElem.license = document.getElementById("license").value;   
        edElem.driver = document.getElementById("driver").value;   
        edElem.condition = document.getElementById("condition").value;   
        if (document.getElementById("imgfile").value) {
            let filename = document.getElementById("imgfile").value.replace(/C:\\fakepath\\/, ''); // Обрізаємо C:\fakepath\
            edElem.pictname = filename; 
        }
       
        let rowSt = JSON.stringify(edElem)
       
        localStorage.setItem(`${id}`, rowSt)
        modal.close()
        setTimeout(location.reload(), 1000) 
    }
}


function removeElementFromStorage(id){
    if (confirm("Are you sure you want to delete?")) {
        localStorage.removeItem(id)
        location.reload();          
    }
}

let keyNumbers = Object.keys(localStorage).length 

for (let k=0; k<keyNumbers; k++) {
    let keyName = localStorage.key(k)
    let row = JSON.parse(localStorage.getItem(keyName))
    buildElementToPage(keyName, row)
}