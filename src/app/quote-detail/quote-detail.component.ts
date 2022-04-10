import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote:Quotes;
  @Output()isComplete= new EventEmitter<boolean>();
  
  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
