const cityDropdown = document.getElementById('city');
const tempBox = document.querySelector('.temp-box');
let html = ``;

cityDropdown.addEventListener('change', (e) => {
  fetch(
    `https://apis.scrimba.com/openweathermap/data/2.5/weather?q=${e.target.value}&units=metric`
  )
    .then((req) => req.json())
    .then((data) => {
      html = `${e.target.value} temperature is <br> ${data.main.temp}°C
        `;
      tempBox.innerHTML = html;
      tempBox.style.display = 'block';
    });
});
