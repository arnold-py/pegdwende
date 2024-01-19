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

const login = async (email = null, password = null) => {
    try {
        // Définition du lien d'accès à l'API
        let endpoint = '/api/v1/login/';
        // Construction du corps de la requête
        const body = new URLSearchParams();
        body.append('email', email);
        body.append('password', password);
        // Lancement de la requête
        const response = await makeRequest('POST', body, endpoint, {});
        console.table(response); 
        // return response
    } catch (e) {
        throw new Error(e.message);
    }
}

const getUser = async () => {
    try {
        // Définition du lien d'accès à l'API
        let endpoint = '/api/v1/user/';
        // Lancement de la requête
        const response = await makeRequest('GET', null, endpoint, {});
        console.table(response); 
        // return response
    } catch (e) {
        throw new Error(e.message);
    }
}

const verification = async (email = null, password = null) => {
    try {
        // Définition du lien d'accès à l'API
        let endpoint = '/api/v1/user/verification/';
        // Construction du corps de la requête
        const body = new URLSearchParams();
        body.append('email', email);
        body.append('password', password);
        // Lancement de la requête
        const response = await makeRequest('POST', body, endpoint, {});
        console.table(response); 
        // return response
    } catch (e) {
        throw new Error(e.message);
    }
}
verification('client@gmail.com', 'CLIENT');

// // Utilisation de la fonction
// verification('client@gmail.com', 'CLIENT');

// const verification = async (email = null, password = null) => {
//     try {
//         let endpoint = 'http://www.pegwendeechange.com/api/v1/user/verification/';
//         const body = new URLSearchParams();
//         body.append('email', email);
//         body.append('password', password);

//         const response = await fetch(endpoint, { method: 'POST', body, mode: 'no-cors' });
//         console.table(response); 
//     } catch (e) {
//         throw new Error(e.message);
//     }
// }
// verification('client@gmail.com', 'CLIENT');



const verification_piece_identite = async (recto = null, verso = null) => {
    try {
        // Définition du lien d'accès à l'API
        let endpoint = '/api/v1/user/verification_piece_identite/';
        //construction du corps de la requete
        const formData = new FormData();
        formData.append('recto', recto);
        formData.append('verso', verso);
        // Lancement de la requête
        const response = await makeRequest('POST', formData, endpoint, {});
        console.table(response); 
        // return response
    } catch (e) {
        throw new Error(e.message);
    }
}
//  verification_piece_identite()

// const verification_piece_identite = async (recto = null, verso = null) => {
//     try {
//         let endpoint = 'http://www.pegwendeechange.com/api/v1/user/verification_piece_identite/';
        
//         const formData = new FormData();
//         formData.append('recto', recto);
//         formData.append('verso', verso);
//         const response = await fetch(endpoint, { method: 'POST', body: formData, mode: 'no-cors' });
//         console.table(response); 
//     } catch (e) {
//         throw new Error(e.message);
//     }
// }
//verification_piece_identite()


const piece_identite = async (user_id = null, recto = null) => {
    try {
        // Définition du lien d'accès à l'API
        let endpoint = '/api/v1/user/piece_identite/';
        // Construction du corps de la requête
        const body = new URLSearchParams();
        body.append('user_id', user_id);
        body.append('recto', recto);
        // Lancement de la requête
        const response = await makeRequest('GET', body, endpoint, {});
        console.table(response); 
        // return response
    } catch (e) {
        throw new Error(e.message);
    }
}

const change_passord  = async (older_password = null, newer_password  = null) => {
    try {
        // Définition du lien d'accès à l'API
        let endpoint = '/api/v1/user/change_passord/';
        // Construction du corps de la requête
        const body = new URLSearchParams();
        body.append('older_password', older_password);
        body.append('newer_password', newer_password);
        // Lancement de la requête
        const response = await makeRequest('POST', body, endpoint, {});
        console.table(response); 
        // return response
    } catch (e) {
        throw new Error(e.message);
    }
}

const password_lost_email = async (email = null) => {
    try {
        // Définition du lien d'accès à l'API
        let endpoint = '/api/v1/user/password_lost_email/';
        // Construction du corps de la requête
        const body = new URLSearchParams();
        body.append('email', email);
        // Lancement de la requête
        const response = await makeRequest('POST', body, endpoint, {});
        console.table(response); 
        // return response
    } catch (e) {
        throw new Error(e.message);
    }
}

const password_lost_verification = async (secret_code = null, new_paswword = null) => {
    try {
        // Définition du lien d'accès à l'API
        let endpoint = '/api/v1/user/password_lost_verification/';
        // Construction du corps de la requête
        const body = new URLSearchParams();
        body.append('secret_code', secret_code);
        body.append('new_paswword', new_paswword);
        // Lancement de la requête
        const response = await makeRequest('POST', body, endpoint, {});
        console.table(response); 
        // return response
    } catch (e) {
        throw new Error(e.message);
    }
}

const contact_us = async (name = null, email = null, subject = null, message = null) => {
    try {
        // Définition du lien d'accès à l'API
        let endpoint = '/api/v1/user/contact_us/';
        // Construction du corps de la requête
        const body = new URLSearchParams();
        body.append('name', name);
        body.append('email', email);
        body.append('subject', subject);
        body.append('message', message);
        // Lancement de la requête
        const response = await makeRequest('POST', body, endpoint, {});
        console.table(response); 
        // return response
    } catch (e) {
        throw new Error(e.message);
    }
}




//  login('client@gmail.com', 'CLIENT');
//  getUser();
// verification_piece_identite()
// piece_identite()
// change_passord()
// password_lost_email()
// password_lost_verification()
// contact_us()