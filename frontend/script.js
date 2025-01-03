// Constant variables
const managerContainer = document.querySelector(".managerContainer");
const saveInfo = document.querySelector(".submit");
const names = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");


// Displays the available contact information in the database
const displayContacts = (data) => {
    return managerContainer.innerHTML += data.map(x => {
        let {name, email, id, phone} = x;
        return `
                    <div class="contactContainer">
                    <div class="info">
                        <h2>${name}</h2>
                        <p>${email}</p>
                        <p>${phone}</p>
                    </div>

                    <div class="delete">
                        <button onclick="deleteContact(${id})">
                            <span class="material-symbols-outlined">
                                delete
                            </span>
                        </button>
                    </div>
                </div>
    `
    })
}


// Fetches data from the database
const getData = async () => {
    const getLink = 'http://localhost:8080/contactManager/getContacts';
    const data = await fetch(getLink);

    let tostring = await data.json();
    displayContacts(tostring)
    console.log(tostring)
}
getData()


// Saves the information to the database
const saveData = async (input) => {
    url = "http://localhost:8080/contactManager/saveContact";

    await fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/json", // Matches Postman
        },
        body: JSON.stringify(input)
    })
    // .then(response => {
    // if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    // }
    // return response.json();
    // })
}


// Generates the form information
const getInput = () => {
    if (names.value && email.value && phone.value){
        try{
            console.log(names.value, email.value, phone.value)
            return {
                "name": names.value,
                "email": email.value,
                "phone": phone.value
            }
        } catch{
            console.log("Please enter valid information")
        }
    }
    
}


// Calls the saveData function to send data to the database when clicked
saveInfo.addEventListener('click', ()=>{
    console.log(getInput())
    saveData(getInput())
})

async function deleteContact(id){
    console.log(id)
    url = `http://localhost:8080/contactManager/${id}`;
    await fetch(url,{
            method: "DELETE"
        }
    )
}