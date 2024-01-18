function login() {
    const email = document.getElementById('emailc').value;
    const password = document.getElementById('passwordc').value;

    // Validation de l'adresse e-mail à l'aide d'une expression régulière
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Veuillez entrer une adresse e-mail valide.");
        return;
    }

    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    // Envoie de la requête au backend
    fetch('http://www.pegwendeechange.com:3000/api/v1/login/', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Échec de l\'authentification');
            }
            return response.json();
        })
        .then(data => {
            const userType = data.data.type;

            // Sauvegarde du jeton JWT dans le local storage
            const jwt_token = data.message;
            localStorage.setItem("jwt", jwt_token);

            // Redirection vers le tableau de bord approprié
            if (userType == 'ADMIN') {
                window.location.href = 'adashboard.html';
            } else if (userType == 'CLIENT') {
                window.location.href = 'dashboard.html';
            } else {
                throw new Error('Type d\'utilisateur non reconnu');
            }
        })
        .catch(error => {
            console.error('Erreur:', error);

            // Afficher un message d'erreur à l'utilisateur
            let errorMessage = 'Erreur lors de l\'authentification. Veuillez réessayer plus tard.';

            if (error.message.includes('Type d\'utilisateur non reconnu')) {
                errorMessage = 'Type d\'utilisateur non reconnu. Veuillez contacter le support.';
            } else if (error.message.includes('Échec de l\'authentification')) {
                errorMessage = 'Échec de l\'authentification. Veuillez vérifier vos informations de connexion.';
            }

            document.getElementById('errorMessage').innerText = errorMessage;
            document.getElementById('errorMessage').style.display = 'block';
        });
}

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
