import WeatherBox from "./modules/WeatherBox.js"

let Weather = []
let city = function () {
    $.get({
        url: 'http://api.apixu.com/v1/current.json?key=06b32bfb70304f078c284438180609&q='+ $('#city').val() ,
        success: function (data) {
            const tempData = new WeatherBox(data.location.tz_id,data.location.country, data.current.temp_c, data.location.name) 
            Weather.push(tempData);
            render();
        } 
    }) 
}

function render(){
    
    let source = $('#temp-template').html();
    let template = Handlebars.compile(source)
    let newHTML = template({weather: Weather});
    $('#information').empty();
    $('#information').append(newHTML);
}

$("#button1").on("click", function () {
    city()
})

$("#information").on("click", ".button2", function () {
    let text = $(this).closest(".examples").find("input").val()
    let boxId = $(this).closest(".information1").data().id
    let weatherObj = findWeathrBoxById(boxId)
    weatherObj.comment(text);
    render()
})

function findWeathrBoxById (boxId) {
    for (let i=0 ; i < Weather.length ; i++) {
       if (Weather[i].id == boxId) {
           return (Weather[i])
       }

    }
    
}

