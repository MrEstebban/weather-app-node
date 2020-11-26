const axios = require('axios').default;

const getWeather = async(city) => {

    const encodedUrl = encodeURI(city);
    //console.log(encodedUrl);

    // const instance = axios.create({
    //     baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=d08c41d295ed2dd991ed846b94d1bba9&units=metric`,
    //     timeout: 1000
    // });

    // instance.get()
    //     .then(resp => {
    //         console.log(resp.data);
    //     })
    //     .catch(err => {
    //         console.log('Error!!!!!!', err);
    //     })


    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=d08c41d295ed2dd991ed846b94d1bba9&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getWeather
}