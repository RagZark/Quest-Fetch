const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
                this.userProfile.innerHTML = `<div class="info">
                             <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
                            <div class="data">
                                <h1>${user.name ?? 'Não possui nome cadastrado 😅'}</h1>
                                    <div class="follow">
                                    <p>👤${user.following} Seguindo</p>
                                    <p>👥${user.followers} Seguidores</p>
                                    </div>
                                <p>${user.bio ?? 'Não possui bio cadastrada 😅'}<p>
                            </div>
                        </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                <a href="${repo.html_url} target="_blank">${repo.name}</a>
                                                                <ul>
                                                                <li> 🍴${repo.forks_count} Forks</li>
                                                                <li> ⭐${repo.stargazers_count} Estrelas</li>
                                                                <li> 👀${repo.watchers_count} Watchers</li>
                                                                <li> 🔎 Linguagem: ${repo.language ?? 'Não encontrada!'}</li>
                                                                </ul>
                                                                </li>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += ` <div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }

        
        let eventsItens = ''
        user.events.forEach(e => eventsItens += `<li>${e.repo.name} - ${e.type ?? 'Não possui alterações'}</li>`)

        if(user.events.length > 0){
            this.userProfile.innerHTML +=   `<div class="events section">
                                                <h2>Eventos</h2>
                                               <ul>${eventsItens}</ul>
                                             </div>`
        }
    }
}

export {screen}