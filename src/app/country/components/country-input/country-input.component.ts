import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit {

  @Input() public placeholder: string = ''

  @Output() onEnter: EventEmitter<string> = new EventEmitter
  @Output() onDebounce: EventEmitter<string> = new EventEmitter
  
  public debouncer: Subject<string> = new Subject(); 
  public term: string = ''
  
  ngOnInit(): void {
    this.debouncer
    .pipe( debounceTime(400) )
    .subscribe(value => {
      this.onDebounce.emit(value)
    })
  }

  search(){
    this.onEnter.emit(this.term)
  }

  keyPressed(){
    this.debouncer.next(this.term)
  }
  
}
