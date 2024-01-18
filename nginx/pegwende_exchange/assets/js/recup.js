// Récupération du token depuis le localStorage
const jwtToken = localStorage.getItem("jwt");

// Vérification si le jeton existe
if (jwtToken) {
  // Utilisez le jeton dans votre requête fetch ou toute autre opération
  const url = 'http://www.pegwendeechange.com:3000/api/v1/user/';

  // Sélectionner la balise span
  const welcomeSpan = document.querySelector('.welcome');

  fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${jwtToken}`
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Vérifier si le champ "prenoms" existe dans les données
      if (data.message && data.message.prenoms) {
        // Ajouter les données récupérées à l'intérieur de la balise span
        welcomeSpan.textContent = `Bienvenue, ${data.message.prenoms}`;
      } else {
        console.error('Le champ "prenoms" n\'existe pas dans les données.');
      }
    })
    .catch(error => {
      console.error('Erreur lors de la requête :', error);
    });
} else {
  console.error('Aucun jeton trouvé dans le stockage local.');
}
