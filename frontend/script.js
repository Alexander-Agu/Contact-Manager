const managerContainer = document.querySelector(".managerContainer");

const getLink = 'http://localhost:8080/api/getContacts';




const displayContacts = (data) => {
    // let data = getData();
    return managerContainer.innerHTML += data.map(x => {
        let {name, email, number} = x;
        return `
                    <div class="contactContainer">
                    <div class="info">
                        <h2>${name}</h2>
                        <p>${email}</p>
                        <p>${number}</p>
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
    // console.log(tostring)
    displayContacts(tostring)
    console.log(tostring)
    return tostring
}
getData()