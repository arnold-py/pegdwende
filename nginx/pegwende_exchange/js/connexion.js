const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function login() {
    const email = document.getElementById('emailc').value;
    const password = document.getElementById('passwordc').value;

    // console.log(email)
    // console.log(password)
    // const loginData = {
    //     email: email,
    //     password: password
    // };
    let formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)

    // Envoie de la requête au backend
    fetch('http://www.pegwendeechange.com:3000/api/v1/login/', {
        method: 'POST',
        // headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        // },
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            // Si la réponse du serveur n'est pas OK, traiter l'authentification échouée
            // console.log(response.json())
            throw new Error('Authentification échouée');
        }
        return response.json();
    })
    .then(data => {
        // Traitement de la réponse du backend
        console.log(data);

        //sauvegarde du jwt dans le local storage
        const jwt_token = data["message"];
        localStorage.setItem("jwt", jwt_token);

        // Redirection vers la page dashboard.html
        window.location.href = 'dashboard.html';
    })
    .catch(error => {
        // Gestion des erreurs
        console.error('Erreur:', error);

        // Afficher un message d'erreur à l'utilisateur
        document.getElementById('errorMessage').innerText = 'Erreur: ' + error.message;
        document.getElementById('errorMessage').style.display = 'block';
    });
}


// Gestion du basculement entre le type de champ de mot de passe et le type de texte


// Gestion du basculement entre le type de champ de mot de passe et le type de texte
document.getElementById('toggleMot').addEventListener('click', function () {
    toggleVisibility('passwordc');
});

function toggleVisibility(fieldId) {
    const field = document.getElementById(fieldId);
    const fieldType = field.type;

    // Bascule entre le type de champ de mot de passe et le type de texte
    field.type = (fieldType === 'password') ? 'text' : 'password';
}