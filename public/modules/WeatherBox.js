import Comment from './comment.js'

class WeatherBox {
    constructor (id, country, temp ,cityName) {
        this.cityName = cityName;
        this.id = id;
        this.temp = temp;
        this.country = country;
        this.comments = [];
    }

    comment(text){
        this.comments.push(new Comment(text));
    }
}

export default WeatherBox;