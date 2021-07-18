import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OwapiService } from "../owapi.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public weatherSearchForm!: FormGroup;
  public weatherData: any;

  constructor(
    private formBuilder: FormBuilder,
    private owapiService: OwapiService
    ) {

  }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToOWAPI(formValues){
    this.owapiService
      .getWeather(formValues.location)
      .subscribe(data => this.weatherData = data)
       console.log(this.weatherData);
  }
}





