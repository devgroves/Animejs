document.getElementById("fetch-users").addEventListener("click", fetchData);

function fetchData() {
    let loader = document.getElementById("loader");
    let userList = document.getElementById("user-list");
    loader.style.display = "block";

    anime({
        targets: '.loader-circle',
        rotate: 360,
        duration: 1000,
        easing: 'linear',
        loop: true
    });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            
            loader.style.display = "none";
            userList.innerHTML = "<h2>Fetched Users:</h2><ul>";
            data.forEach(user => {
                userList.innerHTML += `<li>${user.name} - ${user.email}</li>`;
            });

            userList.innerHTML += "</ul>";
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            loader.style.display = "none";
            userList.innerHTML = "<p style='color:red;'>Failed to load users. Try again!</p>";
        });
}


