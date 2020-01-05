const key = '151045b9-a435-4b3e-afbb-7f394572988c';
let state = document.getElementById('voivodeship');
const url = 'http://api.airvisual.com/v2/';

fetch(`${url}states?country=POLAND&key=${key}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let dataArray = data.data;
    Object.keys(dataArray).forEach(key => {
      $('#voivodeship optgroup').append(`<option value = "${dataArray[key].state}">${dataArray[key].state}</option>`)
    });
   });

    state.addEventListener('change', () => {
      getCities(state.options[state.selectedIndex].value);
    });

    let getCities = (state) => {
      fetch(`${url}cities?state=${state}&country=POLAND&key=${key}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let dataArray = data.data;
          $('#city')
            .show()
            .find('option')
            .remove()
            .end();
          Object.keys(dataArray).forEach(key => {
            $('#city')
            .append(`<option value = "${dataArray[key].state}">${dataArray[key].city}</option>`);
          });
        })
    }