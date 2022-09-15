import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CountryResponse } from '../../interfaces/country.interface';
import { count } from 'rxjs';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
    li{
      cursor: pointer
    }
    `
  ]
})
export class ByCountryComponent  {

  public term: string = ''
  public isError: boolean = false;
  public showSuggestions: boolean = false;
  public countries: CountryResponse[] = []
  public suggestedCountries: CountryResponse[] = []

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
    this.term = term
    this.showSuggestions = true

    this.CountryService.searchCountry(term)
      .subscribe({
        next: (country) => this.suggestedCountries = country.splice(0,5),
        error: (error) => this.suggestedCountries = []
      })

  }

  searchSuggestions(term: string){
    this.search(term)
  }
}
