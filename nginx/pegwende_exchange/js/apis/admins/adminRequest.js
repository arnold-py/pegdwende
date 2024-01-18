const baseUrl = `http://www.pegwendeechange.com:3000`;

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

// function test() {
//     fetch("http://www.pegwendeechange.com:3000/api/v1/users/").then(response=>{console.log(response);});
    
// }

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


function getAllTransaction(type = null) {
    var accessToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX3N0YXR1cyI6IkFETUlOIiwiZXhwIjoxNzA1MzI1MjE5fQ.UpW8zWM1zmpcJXC_lH6_AXms8W19R0lhh7HIHZhH9L0`;
    var url = `${baseUrl}/api/v1/transaction/?page=0&nb_per_page=50&order_descanding=true&type_montant=EQUAL`
    if(type) url = `${url}&type_transaction=${type}`
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: url,
            type: 'GET',
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

function setadmin() {
    var accessToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX3N0YXR1cyI6IkFETUlOIiwiZXhwIjoxNzA1MzI1MjE5fQ.UpW8zWM1zmpcJXC_lH6_AXms8W19R0lhh7HIHZhH9L0`;
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
    var accessToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX3N0YXR1cyI6IkFETUlOIiwiZXhwIjoxNzA1MzI1MjE5fQ.UpW8zWM1zmpcJXC_lH6_AXms8W19R0lhh7HIHZhH9L0`;
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
                alert("yes");
                resolve(data);
            },
            error: function (error) {
                alert("yessd" + error.status);
                reject(error);
            }
        });
    });
}

function change_passord(data) {
    var accessToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX3N0YXR1cyI6IkFETUlOIiwiZXhwIjoxNzA1MzI1MjE5fQ.UpW8zWM1zmpcJXC_lH6_AXms8W19R0lhh7HIHZhH9L0`;
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

// function makeInvestement() {
//     var accessToken =`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX3N0YXR1cyI6IkFETUlOIiwiZXhwIjoxNzA1MzI5MTEwfQ.zSppONqL0ChoTfgKPY9_4CUNEfr4_r4VtXTEjBTUjgg`;
//     const baseUrl = `http://www.pegwendeechange.com:3000`;
// }




