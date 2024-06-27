
const modal = $.modal({
    title: 'Taxi Options',
    closable: true,
    content: `
        <div class="modal-form">
            <label for="brand">Brand:</label><br>
            <input type="text" id="brand" name="brand" class="modal-form-field" placeholder="Enter car brand..."/><br><br>
            <label for="model">Model:</label><br>
            <input type="text" id="model" name="model" class="modal-form-field" placeholder="Enter car model..."/><br><br>
            <label for="license">License Plate:</label><br>
            <input type="text" id="license" name="license" class="modal-form-field" placeholder="Enter license plate number..."/><br><br>
            <label for="driver">Driver:</label><br>
            <input type="text" id="driver" name="driver" class="modal-form-field" placeholder="Enter driver's name..."/><br><br>
            <label for="condition">Condition:</label><br>
            <input type="text" id="condition" name="condition" class="modal-form-field" placeholder="Enter car condition..."/><br><br>
            <div id= "img-prev-section">
                <img id="imgprev" src="" >
            </div>   
            <label for="file" id="label-select-img">Select image file:</label><br>
            <input type="file" id="imgfile" name="imgfile"><br><br>
            <button id="submitbtn" class="blue-button" onclick="addElementToLocalStorage()">Create</button>
        </div> 
    `,
    width: '500px'
})




