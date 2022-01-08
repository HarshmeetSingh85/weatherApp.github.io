let weather = {
    "apikey": "6a47eeadd0544748acb122153211612",
    fetchWeather: function (city) {
        try {
            fetch("https://api.weatherapi.com/v1/current.json?key=" + this.apikey + "&q=" + city) 
            .then((res) => res.json())
            .then((data) => this.displayWeather(data));
        } catch (error) {
            console.log("error");            
        }
    },
    displayWeather: function (data) {
        const { name, localtime } = data.location;
        const { text } = data.current.condition;
        const { feelslike_c } = data.current;
        document.getElementById("city").innerText = name;
        document.getElementById("climate").innerText = text;
        document.getElementById("temp-value").innerText = feelslike_c;
        document.getElementById("time").innerText = localtime;
        // let icon=document.getElementById("temp-icon").getAttribute("src");
        // icon="icons/sun.png";    
        switch (data.current.condition.text) {
            case 'Sunny':
                document.getElementById("img-icon").innerHTML = '<img src="icons/sun.png">';
                break;
            case 'Clear':
                document.getElementById("img-icon").innerHTML = '<img src="icons/clear.png">';
                break;
            case 'Haze':
                document.getElementById("img-icon").innerHTML = '<img src="icons/cloud.png">';
                break;
            case 'Clouds':
                document.getElementById("img-icon").innerHTML = '<img src="icons/cloud.png">';
                break;
            case 'Rain':
                document.getElementById("img-icon").innerHTML = '<img src="icons/rain.png">';
                break;
            case 'Party cloudy':
                document.getElementById("img-icon").innerHTML = '<img src="icons/cloud.png">';
                break;
            case 'Light rain shower':
                document.getElementById("img-icon").innerHTML = '<img src="icons/rain.png">';
                break;
            case 'Snow':
                document.getElementById("img-icon").innerHTML = '<img src="icons/snowflake.png">';
                break;
            case 'Light snow showers':
                document.getElementById("img-icon").innerHTML = '<img src="icons/snowflake.png">';
                break;
            default:
                document.getElementById("img-icon").innerHTML = '<img src="icons/cloud.png">';
        };
    },
    search: function () {
        this.fetchWeather(document.getElementById("search").value);
    }
};
document.getElementById("search-btn").addEventListener('click', function () {
    weather.search();
});