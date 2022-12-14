import { Component ,OnInit} from '@angular/core';


@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css'],
})

export class EtudiantsComponent implements OnInit {
  WeatherData:any;

  constructor() {   
  }

  ngOnInit() :void {
    this.WeatherData = {
      main : {},
      isDay: true
    };
    this.getWeatherData();
    console.log(this.WeatherData);
  }
  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=tunis&appid=d24db8f1e5a3727f8eb41c3f749e5cb1')
    .then(response=>response.json())
    .then(data=>{
      this.WeatherData = data;
      let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
      this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
      let currentDate = new Date();
      this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
      this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
      this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
      this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
      this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
    
    })

  }


  }
  
    
  

