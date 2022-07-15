const url = "http://localhost:3300/api"

function getUsers () {
    fetch(url)
        .then(response => response.json())
        .then(data => renderApiResult.textContent = JSON.stringify(data))
        .catch(err => console.error(err))
}

function getUser (id) {
    fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(err => console.error(err))
}

function addUser(newUser){
     fetch(url, {
         method: "POST",
         body: JSON.stringify(newUser)
     })
     .then(response => response.json())
     .then(data => alertApi.textContent = data)
     .catch(err => console.error(err))
}


function updateUser (updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(err => console.error(err))
}

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(err => console.error(err))
}



const updatedUser = {
    name: "Lucas Rocha",
    avatar: "https://avatars.githubusercontent.com/u/107315686?v=4",
    city: "Volta Redonda"
}


const newUser = {
    name: "Lucas Exposito",
    avatar: "https://avatars.githubusercontent.com/u/107315686?v=4",
    cidade: "Volta Redonda"
}

//addUser(newUser)
//updateUser(updatedUser, 2)
deleteUser(3)
getUsers()
getUser(2)

