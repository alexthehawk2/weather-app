function parseData(data){
    const parsedData = {}
    parsedData.cod = data.cod;
    parsedData.temp = data.main.temp;
    parsedData.tempMin = data.main.temp_min;
    parsedData.tempMax = data.main.temp_max;
    parsedData.humidity = data.main.humidity;
    parsedData.stat = data.weather[0].main;
    parsedData.icon = data.weather[0].icon;
    parsedData.city = data.name;
    parsedData.country = data.sys.country;
    parsedData.pressure = data.main.pressure
    return parsedData
}
export default async function getWeather(cityName){
    const apiKey = "30d48354e72d34020ce30bfd849d4ca9";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        const parsedData = parseData(data)
        return parsedData
    } catch(err){
        console.log(err);
    }
}