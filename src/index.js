import './style.css';
import getWeather from './modules/getWeather';
import changeDom from './modules/changeDom';
import showDate from './modules/getDate';
const input = document.querySelector('input')
async function run(){
    const data = await getWeather("london")
    changeDom(data)
    showDate()
    //search 
    input.addEventListener('keypress', function (e) {
        if(e.key === 'Enter'){
            if(input.value !== ''&& typeof(input.value)){
                console.log('execute')
            }
        }
    })
}
run()