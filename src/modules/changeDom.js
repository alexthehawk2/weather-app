function changeDom(dataObject){
    const iconSrc = "https://openweathermap.org/img/wn/"
    //selecting all the dom elements to change
    const temp = document.querySelector('.temp');
    const low = document.querySelector('.low');
    const high = document.querySelector('.high');
    const cityName = document.querySelector('.city-name');
    const img = document.querySelector('.weather-data > img');
    const description = document.querySelector('.description');
    const infoChild1 = document.querySelector('.info-child1');
    const infoChild2 = document.querySelector('.info-child2');
    //changing in the dom with api response
    temp.innerHTML = `${dataObject.temp}&deg; C`;
    low.innerHTML = `L: ${dataObject.tempMin}&deg; C`;
    high.innerHTML = `H: ${dataObject.tempMax}&deg; C`;
    cityName.innerHTML = `${dataObject.city}, ${dataObject.country}`;
    img.src = iconSrc + dataObject.icon + "@2x.png";
    description.innerHTML = dataObject.stat;
    infoChild1.innerHTML = `Humidity: ${dataObject.humidity}%`;
    infoChild2.innerHTML = `Pressure: ${dataObject.pressure}hPa`;

}

export default changeDom;