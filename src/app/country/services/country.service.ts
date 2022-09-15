import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, tap } from 'rxjs';
import { CountryResponse } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrlV3: string = `https://restcountries.com/v3.1`

  get httpParams(){
    return new HttpParams().set('fields', 'name,capital,flags,population,cca3')
  }

  constructor(private http: HttpClient) { }

  searchCountry(term: string): Observable<CountryResponse[]>{
    
    const url = `${this.apiUrlV3}/name/${term}`

    return this.http.get<CountryResponse[]>(url, {params: this.httpParams})
     
  }
  seeMore(id: string): Observable<CountryResponse[]>{
    
    const url = `${this.apiUrlV3}/alpha/${id}`
    return this.http.get<CountryResponse[]>(url)
     
  }
  searchCapital(term: string): Observable<CountryResponse[]>{
    
    const url = `${this.apiUrlV3}/capital/${term}`
    return this.http.get<CountryResponse[]>(url, {params: this.httpParams})
     
  }

  searchRegion(region: string): Observable<CountryResponse[]>{

    const url = `${this.apiUrlV3}/region/${region}`
    return this.http.get<CountryResponse[]>(url,  {params: this.httpParams})
      // .pipe(tap(console.log))
  }

}
