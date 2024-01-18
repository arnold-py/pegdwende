// Fonction pour récupérer les informations depuis l'API
function fetchUserInfo() {
    // Récupération du token depuis le localStorage
    const jwtToken = localStorage.getItem("jwt");
  
    // Vérification si le jeton existe
    if (jwtToken) {
      // Utilisez le jeton dans votre requête fetch
      fetch('http://www.pegwendeechange.com:3000/api/v1/user/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${jwtToken}`
        }
      })
        .then(response => { 
          if (!response.ok) {
            throw new Error('Erreur réseau');
          }
          return response.json();
        })
        .then(data => {
          // Vérifiez si la réponse et les informations de l'utilisateur existent
          if (data && data.message) {

            console.log(data.message);
            // const userInfoDiv = document.getElementById('userInfo');
  
            // // Construisez le contenu HTML avec les informations de l'utilisateur
            // userInfoDiv.innerHTML = `
            //   <p>ID: ${data.message.id}</p>
            //   <p>Nom: ${data.message.nom}</p>
            //   <p>Prénoms: ${data.message.prenoms}</p>
            //   <p>Email: ${data.message.email}</p>
            //   <p>Numéro: ${data.message.numero}</p>
            //   <p>Sexe: ${data.message.sexe}</p>
            //   <p>Type: ${data.message.type}</p>
            //   <p>Solde: ${data.message.solde}</p>
            //   <p>Pièce Identité Recto: ${data.message.piece_identite_recto}</p>
            //   <p>Pièce Identité Verso: ${data.message.piece_identite_verso}</p>
            //   <p>Vérifié: ${data.message.is_verified}</p>
            //   <p>Supprimé: ${data.message.is_deleted}</p>
            // `;
          } else {
            console.error('Données invalides ou manquantes dans la réponse.');
          }
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des données depuis l\'API:', error);
        });
    } else {
      console.error('Aucun jeton trouvé dans le stockage local.');
    }
  }
  
  // Appelez la fonction pour récupérer les informations dès que votre script est exécuté
  fetchUserInfo();
  