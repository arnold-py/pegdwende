// deconnexion.js

const deconnexion = {
    // Fonction pour se déconnecter en supprimant le token JWT du localStorage
    logout: function () {
        // Supprimer le token du localStorage
        localStorage.removeItem("jwt");

        // Ajoutez ici toute logique supplémentaire que vous souhaitez effectuer lors de la déconnexion
        console.log('Déconnexion réussie.');

        // Redirigez éventuellement l'utilisateur vers la page de connexion ou toute autre page appropriée
        window.location.href = 'connexion.html';
    },

    // Ajoutez un gestionnaire d'événements au bouton de déconnexion
    addLogoutEventListener: function () {
        document.addEventListener('DOMContentLoaded', function () {
            const logoutButton = document.getElementById('logoutButton');
            if (logoutButton) {
                logoutButton.addEventListener('click', function () {
                    // Appelle la fonction de déconnexion
                    deconnexion.logout();
                });
            }
        });
    }
};

// Appellez la fonction pour ajouter le gestionnaire d'événements
deconnexion.addLogoutEventListener();

// ... (autres fonctionnalités ou codes dans deconnexion.js)
