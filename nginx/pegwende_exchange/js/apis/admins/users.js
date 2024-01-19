// Fonction pour récupérer les informations depuis l'API
function fetchAllUsersInfo() {
    // Récupération du token depuis le localStorage
    const jwtToken = localStorage.getItem("jwt");


    // Vérification si le jeton existe
    if (jwtToken) {
        // Utilisez le jeton dans votre requête fetch
        fetch('http://www.pegwendeechange.com:3000/api/v1/users/?page=0&nb_per_page=10&order_descanding=true', {
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
                // Vérifiez si la réponse et la liste des utilisateurs existent
                if (data && data.message) {
                    const userInfoDiv = document.getElementById('table');


                    // console.log(data.message);

                    // Boucle sur la liste des utilisateurs
                    
                    data.message.forEach(user => {
                        if (user.is_deleted == false) {
                            userInfoDiv.innerHTML += `
                    <tr>
                        <td id="userNom"> ${user.nom} ${user.prenoms}</td>
                        <td id="userEmail">${user.email}</td>
                        <td id="userType">${user.type}</td>
                        <td id="userTelephone">${user.numero}</td>
                        <td id="userTelephone">${user.is_verified}</td>
                        <td id="">
                            <button onclick="SetUserAdmin(${user.id})" class="btn btn-outline-warning btn-sm" type="button">
                            <i class="bi bi-arrow-left-right"></i>
                            </button>
                            <button onclick="deleteAlerte(${user.id})" class="btn btn-outline-danger btn-sm" type="button">
                            <i class="bi bi-trash3"></i>
                            </button>
                      </tr>
                    `;
                        }
                    })
                    ;
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




function deleteAlerte(identity) {
    swal({
        title: "ATTENTION",
        text: "Souhaitez-vous supprimer cet utilisateur ?",
        icon: "warning",
        buttons: {
          cancel: "Annuler",
          catch: {
            text: "Supprimer",
            value: "catch",
          },
        },
      })
      .then((value) => {
        switch (value) {
       
          case "cancel":
            swal("Suppression annuler");
            break;
       
          case "catch":


            const jwtToken = localStorage.getItem("jwt");

            if (jwtToken) {
                fetch('http://www.pegwendeechange.com:3000/api/v1/users/'+identity, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${jwtToken}`
                    }
                })
                    .then(response => {
                        if (response.status==200) {
                            swal(
                                "SUPPRESSION", 
                                "Utilisateur supprimé "+identity,
                                "success");
                                setTimeout(function(){
                                    window.location.reload () 
                                }, 2000);
                        }else{

                            return response.json();
                        }
                    })
            } else {
                console.error('Aucun jeton trouvé dans le stockage local.');
        
            }
           
            break;
       
          default:
            swal("Suppression annuler");
        }
      })

      
   
}


function SetUserAdmin(identity) {



    swal({
        title: "ATTENTION",
        text: "Souhaitez-vous changer le type de cet utilisateur ?",
        icon: "warning",
        buttons: {
          cancel: "Annuler",
          catch: {
            text: "Changer",
            value: "catch",
          },
        },
      })
      .then((value) => {
        switch (value) {
       
          case "cancel":
            swal("Changement annulé");
            break;
       
          case "catch":


            const jwtToken = localStorage.getItem("jwt");

            if (jwtToken) {
                fetch('http://www.pegwendeechange.com:3000/api/v1/users/setadmin/'+identity, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${jwtToken}`
                    }
                })
                    .then(response => {
                        if (response.status==200) {
                            swal(
                                "Mise à jour", 
                                "Le type de l'utilsateur à changé ",
                                "success");
                                setTimeout(function(){
                                    window.location.reload () 
                                }, 2000);
                        }else{

                            return response.json();
                        }
                    })
            } else {
                console.error('Aucun jeton trouvé dans le stockage local.');
        
            }
           
            break;
       
          default:
            swal("Changement annulé");
        }
      })

    
}

// function test (ident){
//     alert("test : "+ident);
// }


// Fonction pour récupérer les informations depuis l'API

  
  // Appelez la fonction pour récupérer les informations dès que votre script est exécuté
  

// Appelez la fonction pour récupérer les informations de tous les utilisateurs dès que votre script est exécuté
fetchAllUsersInfo();


// <div>
//     <p>ID: ${user.id}</p> 
{/* <button class="btn btn-outline-primary btn-sm" onclick="fetchUserInfo(${user.id})"  type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <i class="bi bi-pen"></i>
                            </button> */}
//     <p>Nom: ${user.nom}</p>
//     <p>Prénoms: ${user.prenoms}</p>
//     <p>Email: ${user.email}</p>
//     <p>Numéro: ${user.numero}</p>
//     <p>Sexe: ${user.sexe}</p>
//     <p>Type: ${user.type}</p>
//     <p>Solde: ${user.solde}</p>
//     <p>Pièce Identité Recto: ${user.piece_identite_recto}</p>
//     <p>Pièce Identité Verso: ${user.piece_identite_verso}</p>
//     <p>Vérifié: ${user.is_verified}</p>
//     <p>Supprimé: ${user.is_deleted}</p>
// </div>
