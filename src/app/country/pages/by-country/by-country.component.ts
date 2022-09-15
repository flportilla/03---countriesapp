import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CountryResponse } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent  {

  public term: string = ''
  public isError: boolean = false;
  public countries: CountryResponse[] = []

  constructor(private CountryService: CountryService) { }

  search(term: string){
    this.isError = false
    this.term = term
    
    if(this.term.length < 1) return

    this.CountryService.searchCountry(this.term)
    .subscribe({
      next: (countries) =>{ 
        this.countries = countries
      },
      error: () => {
        this.isError = true
        this.countries = []
      }
    })
  }

  suggestions(term: string){
    this.isError = false
  }
}
