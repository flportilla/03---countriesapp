import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CountryResponse } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
    button {
      margin-right: 5px;
    }
    `
  ]
})
export class ByRegionComponent {

  public regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  public activeRegion: string = ''
  public countries: CountryResponse[] = []

  constructor(private countryService: CountryService) { }

  activateRegion(region: string) {

    if (region === this.activeRegion) return

    this.activeRegion = region
    this.countries = []
    this.countryService.searchRegion(region)
      .subscribe(countries => this.countries = countries);
  }

  getClass(region: string) {
    return (region === this.activeRegion)
      ? 'btn btn-primary'
      : 'btn btn-outline-primary'
  }


}
