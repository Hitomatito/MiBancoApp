document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Initialize the app
    console.log('Device is ready');
    loadPage('loading.html');
}

function loadPage(page) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'pages/' + page, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('content').innerHTML = xhr.responseText;
            setupPage(page);
        }
    };
    xhr.send();
}

function setupPage(page) {
    if (page === 'login.html') {
        document.getElementById('loginButton').addEventListener('click', function() {
            // Call login function from login.js
            validateLogin();
        });
    }
    if (page === 'dashboard.html') {
        // Load user data and display it
        loadUserData();
    }
}

function loadUserData() {
    // Placeholder for loading user data
    console.log('Loading user data...');
}