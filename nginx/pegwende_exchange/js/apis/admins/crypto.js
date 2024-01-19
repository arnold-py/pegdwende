window.addEventListener('load', function() {
    // Votre code ici
    const jwtToken = localStorage.getItem("jwt");


    // Vérification si le jeton existe
    if (jwtToken) {
        // Utilisez le jeton dans votre requête fetch
        fetch('http://www.pegwendeechange.com:3000/api/v1/crypto/?page=0&nb_per_page=10&order_descanding=true&is_deleted=false', {
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
                    const userInfoDiv = document.getElementById('cryptoTable');


                    // console.log(data.message);

                    // Boucle sur la liste des utilisateurs
                    
                    data.message.forEach(crypt => {
                            userInfoDiv.innerHTML += `
                    <tr>
                    <tr>
                    <td id="cryptNom"> ${crypt.nom} </td>
                    <td id="cryptQuantite">${crypt.quantite}</td>
                    <td id="cryptUnitaire">${crypt.prix_unite}</td>
                    <td id="cryptBinance">${crypt.binance_coin}</td>
                    <td id="">
                        <button class="btn btn-outline-primary btn-sm" type="button">
                        <i class="bi bi-pen"></i>
                        </button>
                        <button class="btn btn-outline-danger btn-sm" type="button">
                        <i class="bi bi-trash3"></i>
                        </button>
                  </tr>
                      </tr>
                    `;
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
  });



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
