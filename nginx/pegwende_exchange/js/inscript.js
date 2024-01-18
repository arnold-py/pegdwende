function inscript() {
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value; // Modification de l'ID de l'e-mail
    const numero = document.getElementById('number').value;
    const sexe = document.getElementById('sexe').value;
    const password = document.getElementById('passwordi').value;
    const confirmpassword = document.getElementById('confpassword').value;

    // Validation de l'adresse e-mail à l'aide d'une expression régulière
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Veuillez entrer une adresse e-mail valide.");
        return;
    }

    // Vérifie si les conditions sont acceptées
    if (!document.getElementById('conditions').checked) {
        alert("Veuillez accepter les termes et conditions d'utilisation.");
        return;
    }

    // Vérifie si les mots de passe correspondent
    if (password !== confirmpassword) {
        alert("Les mots de passe ne correspondent pas. Veuillez les saisir à nouveau.");
        return;
    }

    const loginData = {
        nom: nom,
        prenoms: prenom,
        email: email,
        numero: numero,
        sexe: sexe,
        password: password
    };

    // Envoie de la requête au backend
    fetch('http://www.pegwendeechange.com:3000/api/v1/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
        .then(response => response.json())
        .then(data => {
            // Traitement de la réponse du backend
            console.log(data);

            // Redirection vers la page dashboard.html
            window.location.href = 'connexion.html';
        })
        .catch(error => {
            // Gestion des erreurs
            console.error('Erreur:', error);
        });
}

// Gestion du basculement entre le type de champ de mot de passe et le type de texte
document.getElementById('toggleMotDePasse').addEventListener('click', function () {
    toggleVisibility('passwordi');
});

document.getElementById('toggleConfirmerMotDePasse').addEventListener('click', function () {
    toggleVisibility('confpassword');
});

function toggleVisibility(fieldId) {
    const field = document.getElementById(fieldId);
    const fieldType = field.type;

    // Bascule entre le type de champ de mot de passe et le type de texte
    field.type = (fieldType === 'password') ? 'text' : 'password';
}
