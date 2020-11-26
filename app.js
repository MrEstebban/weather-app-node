const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: 'Nombre de la ciudad de la que quiere obtener el clima',
        demand: true
    }
}).argv;

const weather = require('./weather/weather');

weather.getWeather(argv.ciudad)
    .then(resp => {
        console.log(`Temperature in ${argv.ciudad} => ${resp} °C`);
    })
    .catch((err) => {
        console.log('No info available for this city');
    })