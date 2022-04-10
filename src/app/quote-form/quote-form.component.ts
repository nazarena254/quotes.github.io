import { Component, OnInit, Output, EventEmitter, Directive } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  @Output() emitQuotes=new EventEmitter<Quotes>();
quoteText:string
quotePublisher:string
quoteAuthor:string
quoteDate:Date;
quoteLike:number;
quoteDislike:number;
newQuote:any
  form: any;


submitQuotes(){
  this.newQuote=new Quotes(this.quoteText,this.quoteAuthor,this.quotePublisher,this.quoteDate,  this.quoteLike,this.quoteDislike);
  this.quoteText=''
  this.quotePublisher=''
  this.quoteAuthor=''
  this.quoteLike=0
  this.quoteDislike=0
  this.emitQuotes.emit(this.newQuote);
}
  constructor() { }

  ngOnInit(): void {
  }
}

// @Directive()
// export class SimpleFormComponent implements OnInit {

//   form: FormGroup;

//   constructor(private formBuilder: FormBuilder) { }

//   ngOnInit() {
//     this.form = this.formBuilder.group({
//       writtenBy: [null, Validators.required],
//       author: [null, Validators.required],
//       datePosted: [null, Validators.required],
//       text: [null, Validators.required],
//     });
//   }
// }
