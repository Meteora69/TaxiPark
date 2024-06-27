

function prepare(){
    let startArray = [
        {name: 'Sedan', brand: 'BMW', model: '320i', license: 'ABC123', driver: 'John Doe', condition: 'Excellent', pictname: 'images (1).jfif'},
    {name: 'SUV', brand: 'Toyota', model: 'RAV4', license: 'XYZ456', driver: 'Alice Smith', condition: 'Good', pictname: 'Toyota Corolla XII Touring Sports ab 2023 Taxi VL mit Dachzeichen Hale © INTAX.de 2023-04-04-f9ec4f90.jpg'},
    {name: 'Hatchback', brand: 'Volkswagen', model: 'Golf', license: 'DEF789', driver: 'Bob Johnson', condition: 'Fair', pictname: '659e53b092ee962a2aaeb398e065c7b9.jpg'},
    {name: 'Pickup Truck', brand: 'Ford', model: 'F-150', license: 'GHI012', driver: 'Emily Brown', condition: 'Excellent', pictname: '001_Ford Galaxy III ab 2019 Taxi VL © INTAX.de 2019-12-18-aa4862d8.jpg'},
    {name: 'Sports Car', brand: 'Chevrolet', model: 'Corvette', license: 'JKL345', driver: 'Michael Wilson', condition: 'Good', pictname: 'images.jfif'},
    {name: 'Luxury Sedan', brand: 'Mercedes-Benz', model: 'S-Class', license: 'MNO678', driver: 'Sophia Miller', condition: 'Excellent', pictname: '2018-02-18-Tesla-als-Taxi-Foto-Intax.jpg'},
    {name: 'Minivan', brand: 'Honda', model: 'Odyssey', license: 'PQR901', driver: 'Oliver Davis', condition: 'Good', pictname: 'honda.jfif'},
    {name: 'Convertible', brand: 'Audi', model: 'A5', license: 'STU234', driver: 'Emma Taylor', condition: 'Excellent', pictname: 'Audi A5.jfif'},
    {name: 'Coupe', brand: 'Lexus', model: 'RC 350', license: 'VWX567', driver: 'Liam Martin', condition: 'Fair', pictname: 'Lexus(2).jfif'},
    {name: 'Electric Car', brand: 'Tesla', model: 'Model 3', license: 'YZA890', driver: 'Mia Moore', condition: 'Excellent', pictname: 'Tesla.jfif'}
        
    ]
    
    localStorage.clear() 
    
    
    for (let i=0; i<startArray.length; i++) {   
        let row = startArray[i]
        let rowSt = JSON.stringify(row)
        localStorage.setItem(`${i}`, rowSt)
    }

    location.reload();  
}