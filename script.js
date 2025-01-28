console.log('Hello World!');
let globalUsers = [];

setupPage();

function setupPage() {
    initGlobalUsers();
    renderUsers();
}

function initGlobalUsers() {
    globalUsers.push({
        username : 'Jesper',
        password : 'coolguy'
    });

    globalUsers.push({
        username : 'Johannes',
        password : 'beige'
    });

    globalUsers.push({
        username : 'Theodor',
        password : 'hockey'
    });

    globalUsers.push({
        username : 'Jonte',
        password : 'rosa'
    });
}

function renderUsers() {
    const bodyRef = document.querySelector('body');

    for(let user of globalUsers) {
        const pRef = document.createElement('p');
        pRef.textContent = user.username;
        bodyRef.appendChild(pRef);
        console.log(pRef);
    }
}