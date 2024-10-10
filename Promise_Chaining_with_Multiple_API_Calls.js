const BASE_URL = 'https://jsonplaceholder.typicode.com';

fetch('https://jsonplaceholder.typicode.com/users')

.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
    
.then (users => {
    const usersContainer = document.getElementById('users');
    
    usersContainer.innerHTML = '';
    
    users.forEach(user => {});
    
    const userDiv = document.createElement ('div');
    
    userDiv.classList.add('user');
    
    userDiv.innerHTML = `
    <h2>${user.name}</h2>
    <p><strong>Email:</strong> ${user.email}</p>
    <div class="posts"></div>
    `;
    
    usersContainer.appendChild(userDiv);
    })





