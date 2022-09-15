import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { CountryResponse } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrlV3: string = `https://restcountries.com/v3.1`

  constructor(private http: HttpClient) { }

  searchCountry(term: string): Observable<CountryResponse[]>{
    
    const url = `${this.apiUrlV3}/name/${term}`
    return this.http.get<CountryResponse[]>(url)
     
  }
  seeMore(id: string): Observable<CountryResponse[]>{
    
    const url = `${this.apiUrlV3}/alpha/${id}`
    return this.http.get<CountryResponse[]>(url)
     
  }
  searchCapital(term: string): Observable<CountryResponse[]>{
    
    const url = `${this.apiUrlV3}/capital/${term}`
    return this.http.get<CountryResponse[]>(url)
     
  }

}
