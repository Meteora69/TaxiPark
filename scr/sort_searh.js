
  
  
  function getArrayFromStorage() {
    let keyNumbers = Object.keys(localStorage).length;
    let incomingArr = [];

    for (let i = 0; i < keyNumbers; i++) {
        let keyName = localStorage.key(i);
        let row = JSON.parse(localStorage.getItem(keyName));
        let elm = {
            id: keyName,
            brand: row.brand || '',
            model: row.model || '',
            license: row.license || '',
            driver: row.driver || '',
            condition: row.condition || '',
            pictname: row.pictname || ''
        };
        incomingArr.push(elm);
    }
    return incomingArr;
}

  

  function sortElements() {
      let checkBox = document.getElementById("sortcheckbox");
      let sortedArr = getArrayFromStorage();

      if (checkBox.checked) {
          sortedArr.sort((a, b) => a.brand.localeCompare(b.brand));
      }

      document.getElementsByClassName("displayzone")[0].innerHTML = '';
      sortedArr.forEach(item => buildElementToPage(item.id, item));
  }


  function searchElements() {
  
    document.getElementsByClassName("displayzone")[0].innerHTML = '';
    let searchtArr = getArrayFromStorage();
    let str = document.querySelector("#csearch").value;
    let serchStr = str.toLowerCase();
    let regExp = new RegExp(`${serchStr}`, "gi");
    let isFounded = false;
    for (let i = 0; i < searchtArr.length; i++) {
        let row = searchtArr[i];
        let strB = row.brand.toLowerCase();
        let strM = row.model.toLowerCase();
        let strL = row.license.toLowerCase();
        let strD = row.driver.toLowerCase();
        let strC = row.condition.toLowerCase();
        if (regExp.test(strB) || regExp.test(strM) || regExp.test(strL) || regExp.test(strD) || regExp.test(strC)) {
            buildElementToPage(row.id, row);
            isFounded = true;
        }
    }
    if (!isFounded) {
        document.getElementsByClassName("displayzone")[0].innerHTML = '<h1 style="color:red; width:100%; text-align: center;" >No matches found</h1>';
    }
}

  refresh = () => location.reload()


   document.getElementById('sortcheckbox').addEventListener('click', sortElements);
  document.getElementById('searchbtn').addEventListener('click', searchElements);
  document.getElementById('cancelbtn').addEventListener('click', refresh);

  sortElements();
