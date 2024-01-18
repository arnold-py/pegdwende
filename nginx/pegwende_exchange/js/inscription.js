function inscript() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

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

        // Redirection vers la page dashboard.html
        window.location.href = 'dashboard.html';
    })
    .catch(error => {
        // Gestion des erreurs
        console.error('Erreur:', error);

        // Afficher un message d'erreur à l'utilisateur
        alert('Authentification échouée. Vérifiez vos identifiants.');
    });
}
