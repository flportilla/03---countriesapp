import { Component, Input } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CountryResponse } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',

})
export class CountryTableComponent {

  @Input() countries: CountryResponse[] = []

  constructor(private CountryService: CountryService){}

  seeMore(alpha: string = ''){
    if(alpha.length < 1) return

    this.CountryService.seeMore(alpha)
    .subscribe({
      next: (countries: CountryResponse[]) =>{ 
        this.countries = countries
      },
      error: () => {
        this.countries = []
      }
    })
  }

}
