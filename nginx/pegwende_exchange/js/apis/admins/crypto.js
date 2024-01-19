window.addEventListener('load', function() {
    // Votre code ici
    const jwtToken = localStorage.getItem("jwt");

    console.log(jwtToken);


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

                        if (crypt.is_deleted==false) {
                            userInfoDiv.innerHTML += `
                    <tr>
                    <tr>
                    <td id="cryptNom"> ${crypt.nom}</td>
                    <td id="cryptQuantite">${crypt.quantite}</td>
                    <td id="cryptUnitaire">${crypt.prix_unite}</td>
                    <td id="cryptBinance">${crypt.binance_coin}</td>
                    <td id="">
                        <button class="btn btn-outline-primary btn-sm" onclick="showCrypto(${crypt.id})" type="button" data-bs-toggle="modal" data-bs-target="#updateCrypto" >
                        <i class="bi bi-pen"></i>
                        </button>
                        <button onclick="deleteCrypto(${crypt.id})" class="btn btn-outline-danger btn-sm" type="button">
                        <i class="bi bi-trash3"></i>
                        </button>
                  </tr>
                      </tr>
                    `;
                        }
                            
                    });
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


  function resetForm() {
    window.location.reload () 
  }


  function showCrypto(identity){

  }


 function addCrypto() {

    // alert('bonjour');
    // let myForm = document.getElementById('myForm');
        
        // myForm.addEventListener('submit', function(e){

            const myInputNom = document.getElementById('nom').value;
            const myInputBinance = document.getElementById('binance_coin').value;
            const myInputQuantite = document.getElementById('quantite').value;
            const myInputPrix = document.getElementById('prix_unite').value;

            // alert('bonjour');

            if (myInputNom == "" || myInputBinance == "" || myInputQuantite == "" || myInputPrix == "" ) {

                swal("Tous les champs sont réquis. Veuillez les remplir.");

            }else if(myInputNom == "") {

                swal("Le champs Nom réquis. Veuillez le remplir.");

            }else if( myInputBinance == "" ){
                swal("Le champs Binance coin réquis. Veuillez le remplir.");


            }else if(myInputQuantite == "") {
                swal("Le champs Quantité réquis. Veuillez le remplir.");

            }else if( myInputPrix == "" ){
                swal("Le champs Prix unitaire réquis. Veuillez le remplir.");


            } else {
                
                const cryptoCreate = {
                    nom : myInputNom,
                    binance_coin : myInputBinance,
                    quantite : myInputQuantite,
                    prix_unite : myInputPrix
                };

                const jwtToken = localStorage.getItem("jwt");
                if (jwtToken) {
                    fetch("http://www.pegwendeechange.com:3000/api/v1/crypto/",{
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json',
                        'Authorization': `Bearer ${jwtToken}`

                    },
                    body: JSON.stringify(cryptoCreate)
                })
                    .then(response => response.json())
                    .then(data =>{

                        swal({
                            title: "",
                            text: "Cryto ajoutée avec succès",
                            icon: "success",
                          });
                            setTimeout(function(){
                                window.location.reload () 
                            }, 2000);
                    })
                    .catch(error => {
                        // Gestion des erreurs
                        console.error('Erreur:', error);
                    });



                } else {
                    swal("Aucun token n'a été trouver. Veillez vous connecter ou recharger la page.")
                }


            }
        
            

 }



  function deleteCrypto(identity) {
    swal({
        title: "ATTENTION",
        text: "Souhaitez-vous supprimer cette Cryptomonnaie ?",
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
                fetch('http://www.pegwendeechange.com:3000/api/v1/crypto/'+identity, {
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
                                "Cryptomonnaie supprimée ",
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
            swal("Suppression annuler")
            ;
        }
      })

      
   
}


// function SetUserAdmin(identity) {



//     swal({
//         title: "ATTENTION",
//         text: "Souhaitez-vous changer le type de cet utilisateur ?",
//         icon: "warning",
//         buttons: {
//           cancel: "Annuler",
//           catch: {
//             text: "Changer",
//             value: "catch",
//           },
//         },
//       })
//       .then((value) => {
//         switch (value) {
       
//           case "cancel":
//             swal("Changement annulé");
//             break;
       
//           case "catch":


//             const jwtToken = localStorage.getItem("jwt");

//             if (jwtToken) {
//                 fetch('http://www.pegwendeechange.com:3000/api/v1/users/setadmin/'+identity, {
//                     method: 'POST',
//                     headers: {
//                         'Accept': 'application/json',
//                         'Authorization': `Bearer ${jwtToken}`
//                     }
//                 })
//                     .then(response => {
//                         if (response.status==200) {
//                             swal(
//                                 "Mise à jour", 
//                                 "Le type de l'utilsateur à changé ",
//                                 "success");
//                                 setTimeout(function(){
//                                     window.location.reload () 
//                                 }, 2000);
//                         }else{

//                             return response.json();
//                         }
//                     })
//             } else {
//                 console.error('Aucun jeton trouvé dans le stockage local.');
        
//             }
           
//             break;
       
//           default:
//             swal("Changement annulé");
//         }
//       })

    
// }
