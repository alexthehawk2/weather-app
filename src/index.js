import './style.css';
import getWeather from './modules/getWeather';
import changeDom from './modules/changeDom';

async function run(){
    const data = await getWeather("london")
    changeDom(data)
}
run()