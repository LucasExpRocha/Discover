const url = "http://localhost:3300/api"

function getUsers () {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser(newUser){
    axios.post(url, newUser)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data
        userName.textContent = data.name
        userID.textContent = data.id
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function updateUser(id, updatedUser) {
    axios.put(`${url}/${id}`, updatedUser)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

function userDelete(id){
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const updaterUser = {
    name: "Lucas Exposito",
    avatar: "https://avatars.githubusercontent.com/u/107315686?v=4",
    city: "Volta Redonda"
}

const newUser = {
    name: "Lucas Exposito",
    avatar: "https://avatars.githubusercontent.com/u/107315686?v=4",
    city: "Volta Redonda"
}

addNewUser(newUser)
updateUser(1, updaterUser)
userDelete(3)
getUsers()
getUser(1)