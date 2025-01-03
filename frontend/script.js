const managerContainer = document.querySelector(".managerContainer");
const saveInfo = document.querySelector(".submit");
const names = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

const getLink = 'http://localhost:8080/contactManager/getContacts';




const displayContacts = (data) => {
    return managerContainer.innerHTML += data.map(x => {
        let {name, email, number, phone} = x;
        return `
                    <div class="contactContainer">
                    <div class="info">
                        <h2>${name}</h2>
                        <p>${email}</p>
                        <p>${phone}</p>
                    </div>

                    <div class="delete">
                        <button>
                            <span class="material-symbols-outlined">
                                delete
                            </span>
                        </button>
                    </div>
                </div>
    `
    })
}


const getData = async () => {
    const data = await fetch(getLink);

    let tostring = await data.json();
    displayContacts(tostring)
    console.log(tostring)

}
getData()

const saveData = async (input) => {
    url = 'http://localhost:8080/contactManager/saveContact';

    await fetch(url, {
        method: "POST",
        headers: {
        'Content-Type': 'application/json', // Matches Postman
        },
        body: JSON.stringify(input),
        mode: "no-cors"
    })
    .then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
})
    
}


const getInput = () => {
    if (names.value && email.value && phone.value){
        try{
            return {
                name: names.value,
                email: email.value,
                phone: phone.value
            }
        } catch{
            console.log("Please enter valid information")
        }
    }
    
}

saveInfo.addEventListener('click', ()=>{
    console.log(getInput())
    saveData(getInput())
})