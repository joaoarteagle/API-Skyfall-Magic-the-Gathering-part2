const listaDeck = document.querySelector(".list")


async function listUsers() {
    try {
        const response = await fetch('http://localhost:3000/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
          
            },
        });

        if (response.ok) {
            const users = await response.json();
            displayUsers(users);
        } else {
            const error = await response.json();
            alert('Erro ao listar usuários: ' + error.message);
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        alert('Erro na requisição. Tente novamente.');
    }
}

function displayUsers(users) {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `Usuário: ${user.username} | Roles: ${user.roles.join(', ')}`; 
        userList.appendChild(listItem);
    });
}