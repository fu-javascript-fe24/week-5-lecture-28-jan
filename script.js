console.log('Hello World!');

function renderUsers() {
    const bodyRef = document.querySelector('body');

    for(let user of globalUsers) {
        const pRef = document.createElement('p');
        pRef.textContent = user.username;
        bodyRef.appendChild(pRef);
        console.log(pRef);
    }
}