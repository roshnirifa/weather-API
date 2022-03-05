const API_KEY = `8c7cde1c27a53ac4c15593bffbb4f52d`;

// button click
const searchTeamp = () => {
    const city = document.getElementById('search_city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data))

}
// function for set city name 
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemp = temp => {
    console.log(temp);
    setInnerText("city_name", temp.name);
    setInnerText('temp', temp.main.temp);
    setInnerText('condition', temp.weather[0].main);
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
    // console.log(url);
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.setAttribute('src', url);
}