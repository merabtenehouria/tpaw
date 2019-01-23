var app;
window.onload = function () {
  app = new Vue({
    el: '#weatherApp', 
    data: {
      loaded: false,

      formCityName: '',

      message: 'WebApp Loaded.',
      messageForm: '',

      cityList: [{
        name: 'Paris', code: 75
      }],

      cityWeather: null,

      cityWeatherLoading: false,

      //  weather amp api key
      weatherKey: "cc65e28100e28eaa9dfe1d3482325b6dvvv", 
      mapKey: "AIzaSyCsl2Fj9E0wX8Iz05thANxqakxGnAFieXg",
      mapUrl: "https://maps.googleapis.com/maps/api/staticmap?center="+ "Paris" + "&zoom=14&size=400x400&key=AIzaSyCsl2Fj9E0wX8Iz05thANxqakxGnAFieXg"
    },

        mounted: function () {
      this.loaded = true;
      this.readData();
    },

    methods: {
      readData: function (event) {
        console.log('JSON.stringify(this.cityList)', JSON.stringify(this.cityList)); 

        console.log('this.loaded:', this.loaded); 
      },
      addCity: function (event) {
        event.preventDefault(); 

        if (this.isCityExist(this.formCityName)) {
          this.messageForm = 'existe déjà';
        } else {
          this.cityList.push({ name: this.formCityName });

          this.messageForm = '';

          this.meteo({ name: this.formCityName });

          this.formCityName = '';
        }
        this.readData();
      },
      isCityExist: function (_cityName) {

        if (this.cityList.filter(item =>
          item.name.toUpperCase() == _cityName.toUpperCase()
        ).length > 0) {
          return true;
        } else {
          return false;
        }
      },
      remove: function (_city) {
        this.cityList = this.cityList.filter(item => item.name != _city.name);
      },
      meteo: function (_city) {

        this.cityWeatherLoading = true;
        console.log(_city);
      
        
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+ _city.name + '&units=metric&lang=fr&APPID=d892264f28eb0401fd0d738f5769111f')
          .then(function (response) {
            app.mapUrl = "https://maps.googleapis.com/maps/api/staticmap?center="+ _city.name + "&zoom=14&size=600x600&key="+ app.mapKey;
            return response.json();
          })
          .then(function (json) {
            app.cityWeatherLoading = false;

            if (json.cod === 200) {
              app.cityWeather = json;
              app.message = null;
            } else {
              app.cityWeather = null;
              app.message = 'Météo introuvable pour ' + _city.name
                + ' (' + json.message + ')';
            }
          });
      }
    }
  });
}