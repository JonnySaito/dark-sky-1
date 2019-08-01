$(document).ready(function(){
  let darkSkyKey;

// make an ajax request to config file to get
  $.ajax({
    url: 'config.json',
    type: 'GET',
    dataType: 'json',
    success: function(keys){
      darkSkyKey = keys['darkSkyKey'];
      getWeatherData();
    },
    error: function(){
      console.log('cannot find config.json file, cannot run application');
    }
  });

  getWeatherData = () => {
    console.log(darkSkyKey);
    $.ajax({
      url: `https://api.darksky.net/forecast/${darkSkyKey}/-41.2865,174.7762`,
      type: 'GET',
      dataType: 'jsonp',
      success: function(dataFromDarkSky){
        console.log(dataFromDarkSky);
      },
      error: function(){
        console.log('error, something went wrong with the request');
      }
    })
  }


})


// ALWAYS ALWAYS ALWAYS NEED TO PROTECT KEY (here, 89a70df008b00ddb8728ee448b2ff032)
// ALWAYS remove key from console.log so nobody can see it
