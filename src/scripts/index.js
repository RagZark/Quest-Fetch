import { baseUrl, repositoriesQuantity } from "/src/scripts/variables.js"
import { getUser } from "/src/scripts/services/user.js"
import { getRepositories } from "/src/scripts/services/repositories.js"
import { user } from "/src/scripts/objects/user.js"
import {screen} from "/src/scripts/objects/screen.js"
import { getEvents } from "/src/scripts/services/events.js"

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode // serve para pegar o código da chave que está vindo
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed){
        getUserData(userName)
    }
})

async function getUserData(userName){

    const userResponse = await getUser(userName)
    
    const repositoriesResponse = await getRepositories(userName)

    const eventsResponse = await getEvents(userName)

    debugger
    
    console.log(getEvents(userName))

    user.setInfo(userResponse)

    user.setRepositories(repositoriesResponse)

    user.setEvents(eventsResponse)
    
    screen.renderUser(user)
}