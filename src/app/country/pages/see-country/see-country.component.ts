import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { CountryResponse } from '../../interfaces/country.interface';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [
  ]
})
export class SeeCountryComponent implements OnInit {

  public country!: CountryResponse[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private CountryService: CountryService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.CountryService.seeMore(id) )
        // tap(console.log)
      )
      .subscribe(country => {
        this.country = country
        
      })

    // this.activatedRoute.params
    //   .subscribe(({id}) => {
    //     this.CountryService.seeMore(id)
    //       .subscribe(country => {
    //         this.country = country

    //         console.log(this.country)
    //       })
    //   })

  }

}
