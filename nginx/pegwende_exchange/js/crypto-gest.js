const getAllCryptoAPI = 'http://pegwendeechange.com:3000/api/v1/crypto/'
const buyButton = document.getElementById('buyButton');
const sellButton = document.getElementById('sellButton');


// buyButton.addEventListener('click', () => {

// });
// buyButton.addEventListener('click', () => {

// });

async function loadOptions() {

  try {

    const response = await fetch(getAllCryptoAPI);

    if (response.ok ) {
      const data = await response.json();
      populateCryptoOptions(data.message);
      populateLocalCurrencies();
      
    } else {
      
      throw new Error('Network response was not ok');
    }
  } catch (error) {

    console.log('Error:', error);

  }

}


// Function to populate the select menu with crypto options
function populateCryptoOptions(cryptoData) {
  const cryptoSelects = document.querySelectorAll(".cryptoSelect");
  cryptoSelects.forEach(function(cryptoSelect) {
    var options = `<option value="" selected>Sélectionez une cryptomannaie</option>`;
      for (let i = 0; i < cryptoData.length; i++) {
        const element = cryptoData[i];
        if(!element.is_deleted){
          options += '<option value="' + element.id + '">' + element .nom + '</option>';
        }
      }
      console.log(cryptoSelect);
      console.log(options);
      cryptoSelect.innerHTML = options;

  })
  
    

}
function populateLocalCurrencies() {
  const localSelect = document.querySelectorAll(".localCurrencySelect");
  localSelect.forEach(function(locCurr){
    var options = `<option value="" selected>Sélectionez une monnaie locale</option>`;
    options += '<option value="1">Orange Money</option>';
    options += '<option value="2">Moov Money</option>';
    console.log(locCurr);
    console.log(options);
    locCurr.innerHTML = options;
  })
  
}

function sellCrypto(){}
function buyCrypto(){}

window.onload = loadOptions();