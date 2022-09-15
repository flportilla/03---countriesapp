import { Component } from '@angular/core';
import { CountryResponse } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent  {

  public term: string = ''
  public isError: boolean = false;
  public countries: CountryResponse[] = []

  constructor(private countryService: CountryService) { }
  search(term: string){
    this.isError = false
    this.term = term
    
    if(this.term.length < 1) return

    this.countryService.searchCapital(this.term)
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
}
