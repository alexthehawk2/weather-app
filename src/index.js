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
            //  checks for user inputs in order to send this to the API
            if(input.value !== '' && /^[a-zA-Z ]+$/.test(input.value)){
                let value = input.value.trim()
                input.value = ''
                // const search = getWeather(value)
                // changeDom(search)
                // showDate()
                (async function (value) {
                    const search = await getWeather(value)
                    changeDom(search)
                    showDate()
                })(value);
            }else{
                alert("Please enter a valid city name")
                input.value = ''
            }
        }
    })
}
run()