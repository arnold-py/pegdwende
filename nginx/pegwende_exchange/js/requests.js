window.onload = addMenu(), dashboardPrimitiveData();
const baseUrl = "http://www.pegwendeechange.com:3000"
const jwtToken = localStorage.getItem("jwt");

const makeRequest = async (method, body, endpoint, headers = {}) => {
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        var requestOptions = {
            method: method,
            headers: myHeaders,
            body: body,
            redirect: 'follow'
        };
        const response = await fetch(`http://www.pegwendeechange.com:3000${endpoint}`, requestOptions);
        const result = await response.json();
        return result;
    } catch (e) {
        throw new Error(e.message);
    }
}

// var getAllTransaction = async () => {
//     let token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX3N0YXR1cyI6IkFETUlOIiwiZXhwIjoxNzA1MzI1MjE5fQ.UpW8zWM1zmpcJXC_lH6_AXms8W19R0lhh7HIHZhH9L0`
//     var myHeaders = new Headers();
//     myHeaders.append("Authorization", `Bearer ${token}`);
//     return myHeaders;
//     var raw = "";
//     var requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
//     body: raw,
//     redirect: 'follow'
//     };
//     const response = await fetch(`${baseUrl}/api/v1/transaction/?page=1&nb_per_page=10&order_descanding=true&type_montant=EQUAL`, requestOptions)
//     const result = await response.json();
//     return result;
// }

const getAllUsers = async (page = 0, nbPerPage = 10, order_descanding = true, filters = {}) => {
    try {
        // Définition du lien d'accès à l'API
        let endpoint = '/api/v1/users/';

        // Construction des paramètres de requête
        const queryParams = new URLSearchParams({
            page: page,
            nb_per_page: nbPerPage,
            order_descanding: order_descanding,  //
            ...filters
        });
        // Ajout des paramètres de requête à l'URL
        endpoint += `?${queryParams.toString()}`;

        // Lancement de la requête
        const response = await makeRequest('GET', null, endpoint, {});
        console.table(response); 
        // return response
    } catch (e) {
        throw new Error(e.message);
    }
}

const createUser = async (userData) => {
    try {
        // Définition du lien d'accès à l'API
        let endpoint = '/api/v1/users/';
        // Construction du corps de la requête
        const body = new URLSearchParams(userData);
        // Lancement de la requête
        const response = await makeRequest('POST', body, endpoint, {});
        console.table(response); 
        // return response
    } catch (e) {
        throw new Error(e.message);
    }
}

 // $("#nbr_transaction").html('prosper');
// $("#nbr_investment").html('prosper');
// $("#nbr_comment").html('prosper');
// $("#nbr_wallet").html('prosper');

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
            const userInfoDiv = document.getElementById('userInfo');
  
            // Construisez le contenu HTML avec les informations de l'utilisateur
            userInfoDiv.innerHTML = `
              <p>ID: ${data.message.id}</p>
              <p>Nom: ${data.message.nom}</p>
              <p>Prénoms: ${data.message.prenoms}</p>
              <p>Email: ${data.message.email}</p>
              <p>Numéro: ${data.message.numero}</p>
              <p>Sexe: ${data.message.sexe}</p>
              <p>Type: ${data.message.type}</p>
              <p>Solde: ${data.message.solde}</p>
              <p>Pièce Identité Recto: ${data.message.piece_identite_recto}</p>
              <p>Pièce Identité Verso: ${data.message.piece_identite_verso}</p>
              <p>Vérifié: ${data.message.is_verified}</p>
              <p>Supprimé: ${data.message.is_deleted}</p>
            `;
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
  

function getAllTransaction(type = null) {
    //var accessToken = jwtToken;
    // var accessToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX3N0YXR1cyI6IkFETUlOIiwiZXhwIjoxNzA1MzI1MjE5fQ.UpW8zWM1zmpcJXC_lH6_AXms8W19R0lhh7HIHZhH9L0`;
    var url = 'http://www.pegwendeechange.com:3000/api/v1/transaction/?page=0&nb_per_page=50&order_descanding=true&type_montant=EQUAL';
    if(type) url = `${url}&type_transaction=${type}`
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: url,
            type: 'GET',
            dataType: "json",
            headers: {
                'Authorization': 'Bearer ' + jwtToken
            },
            success: function (data) {
                resolve(data);
            },
            error: function (error) {
                reject(error);
            }
        });
    });
}

function dashboardPrimitiveData(){
    // Transactions
    getAllTransaction().then(function (data) {
        $("#nbr_transaction").html(data.total_nb);
    }).catch(function (error) {
        $("#nbr_transaction").html('&nbsp;');
        console.error(error); 
    });
    // Investissement
    getAllTransaction('INVESTMENT').then(function (data) {
        $("#nbr_investment").html(data.total_nb);
    }).catch(function (error) {
        $("#nbr_investment").html('&nbsp;');
        console.error(error); 
    });

    //wallet balance
    // setadmin().then(function (data) {
    //     $("#nbr_wallet").html(data.message.solde);
    // }).catch(function (error) {
    //     $("#nbr_wallet").html('---');
    //     console.error(error); 
    // });
    
}


function setadmin() {
    var accessToken = jwtToken;
    // var accessToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX3N0YXR1cyI6IkFETUlOIiwiZXhwIjoxNzA1MzI1MjE5fQ.UpW8zWM1zmpcJXC_lH6_AXms8W19R0lhh7HIHZhH9L0`;
    var url = `${baseUrl}/api/v1/users/setadmin/1`
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: url,
            type: 'POST',
            dataType: "json",
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            success: function (data) {
                resolve(data);
            },
            error: function (error) {
                reject(error);
            }
        });
    });
}

function updateUser(data) {
    var accessToken = jwtToken;
    // var accessToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX3N0YXR1cyI6IkFETUlOIiwiZXhwIjoxNzA1MzI1MjE5fQ.UpW8zWM1zmpcJXC_lH6_AXms8W19R0lhh7HIHZhH9L0`;
    var url = `${baseUrl}/api/v1/users/1`
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: url,
            type: 'PATCH',
            dataType: "json",
            data: data,
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            success: function (data) {
                resolve(data);
            },
            error: function (error) {
                reject(error);
            }
        });
    });
}

function change_passord(data) {
    var accessToken = jwtToken;
    // var accessToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX3N0YXR1cyI6IkFETUlOIiwiZXhwIjoxNzA1MzI1MjE5fQ.UpW8zWM1zmpcJXC_lH6_AXms8W19R0lhh7HIHZhH9L0`;
    var url = `${baseUrl}/api/v1/user/change_passord`
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: url,
            type: 'POST',
            dataType: "json",
            data: data,
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            success: function (data) {
                resolve(data);
            },
            error: function (error) {
                reject(error);
            }
        });
    });
}

async function fetchType() {
    // Vérification si le jeton existe
    if (jwtToken) {
        try {
            const response = await fetch('http://www.pegwendeechange.com:3000/api/v1/user/', {
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                  'Authorization': `Bearer ${jwtToken}`
                }
              });

            if (response.ok) {
              const responseData = await response.json();
              const userType = responseData.data.type;
        
              // Return the user type
              return userType;
            } else {
              console.error('Error:', response.status, response.statusText);
              // If there's an error, you might want to return a default value or handle it accordingly
              return null;
            }
          } catch (error) {
            console.error('Error:', error.message);
            // Handle the error and return a default value or handle it accordingly
            return null;
          }


    } else {
        alert('Aucun jeton trouvé dans le stockage local.');
      }
}

async function fetchSolde() {
    // Vérification si le jeton existe
    if (jwtToken) {
        try {
            const response = await fetch('http://www.pegwendeechange.com:3000/api/v1/user/', {
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                  'Authorization': `Bearer ${jwtToken}`
                }
              });

            if (response.ok) {
              const responseData = await response.json();
              const userType = responseData.data.solde;
        
              // Return the user type
              return userType;
            } else {
              console.error('Error:', response.status, response.statusText);
              // If there's an error, you might want to return a default value or handle it accordingly
              return null;
            }
          } catch (error) {
            console.error('Error:', error.message);
            // Handle the error and return a default value or handle it accordingly
            return null;
          }


    } else {
        alert('Aucun jeton trouvé dans le stockage local.');
      }
}


function addMenu(){
    const  menuTargetPlace = document.querySelector('.menuContent');
    const data = `
    <!-- =============== Navigation ================ -->
    <div class="container-fluid">
        <div class="navigation container">
            <ul>
                <li>
                    <a href="index.html">
                        <span class="title">PEGDWENDE ECHANGE</span>
                    </a>
                </li>

                <li>
                    <a href="dashboard.html">
                        <span class="icon">
                            <ion-icon name="home-outline"></ion-icon>
                        </span>
                        <span class="title">Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="profile.html">
                        <span class="icon">
                            <ion-icon name="people-outline"></ion-icon>
                        </span>
                        <span class="title"> Profile</span>
                    </a>
                </li>

                <li>
                    <a href="transaction.html">
                        <span class="icon">
                            <ion-icon name="repeat-outline"></ion-icon>
                        </span>
                        <span class="title">Transaction</span>
                    </a>
                </li>

                <li>
                    <a href="message.html">
                        <span class="icon">
                            <ion-icon name="chatbubble-outline"></ion-icon>
                        </span>
                        <span class="title">Message</span>
                    </a>
                </li>

                <li>
                    <a href="admin.html">
                        <span class="icon">
                            <ion-icon name="settings-outline"></ion-icon>
                        </span>
                        <span class="title">Administration</span>
                    </a>
                </li>
                <li>
                    <a href="verify.html">
                        <span class="icon">
                            <ion-icon name="settings-outline"></ion-icon>
                        </span>
                        <span class="title">Vérification</span>
                    </a>
                </li>

                <li>
                    <a href="password.html">
                        <span class="icon">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                        </span>
                        <span class="title">Mot de passe</span>
                    </a>
                </li>

                <li>
                    <a href="deconnexion.html">
                        <span class="icon">
                            <ion-icon name="log-out-outline"></ion-icon>
                        </span>
                        <span class="title">Déconnecter</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>

        <!-- ========================= Main ==================== -->
        <div class="main container">
            <div class="topbar">
                <div class="toggle">
                    <ion-icon name="menu-outline"></ion-icon>
                </div>

                <div class="user">
                    <img src="assets/imgs/customer01.jpg" alt="">
                </div>
            </div>
        </div>
        </br>
        </br>
        </br>
        </br>
        </br>
        </br>
        </br>
        
    `;

    menuTargetPlace.innerHTML=data;
}


function showType() {
    const one = document.getElementById("test");
    one.innerText = getType();
}


function loadDashBoard(){
    // Transactions
    getAllTransaction().then(function (data) {
        $("#nbr_transaction").html(data.total_nb);
    }).catch(function (error) {
        $("#nbr_transaction").html('---');
        console.error(error); 
    });
    // Investissement
    getAllTransaction('INVESTMENT').then(function (data) {
        $("#nbr_investment").html(data.total_nb);
    }).catch(function (error) {
        $("#nbr_investment").html('----');
        console.error(error); 
    });

    //wallet balance
    setadmin().then(function (data) {
        $("#nbr_wallet").html(data.message.solde);
    }).catch(function (error) {
        $("#nbr_wallet").html('---');
        console.error(error); 
    });

    const solde = getElementById("nbr_wallet");
    solde.innnerText = fetchSolde();
}





//Maim
// add hovered class to selected list item
let list = document.querySelectorAll(".div .navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};
