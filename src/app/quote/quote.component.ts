import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

quotes = [
    new Quotes('My life is a message', 'Mahatma G', 'Kate Jane ', new Date(2022, 1, 3), 0, 0),
    new Quotes('Mindset is everything', 'Kelly w', 'Reck Wreign', new Date(2021, 2, 8), 0, 0),
  ];

  preNumber: number;
  lastNumber: number;
  counter: number;

  // toggleDetails(index) {
  //   this.quotes[index].showDescription = !this.quotes[index].showDescription;
  // }
  addNewQuotes(data) {
    console.log(data);
    this.quotes.push(data);
  }

  upvote(index) {
    this.quotes[index].upvotes++;
  }

  downvote(index) {
    this.quotes[index].downvotes++;
  }
  completeQuotes(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }

  deleteQuotes(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Delete the Quote, ${this.quotes[index].text} ?`);
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  highestUpvote() {
    this.preNumber = 0
    this.lastNumber = 0;

    for (this.counter = 0; this.counter < this.quotes.length; this.counter++) {
      this.lastNumber = this.quotes[this.counter].upvotes;
      if (this.lastNumber > this.lastNumber) { this.preNumber = this.lastNumber }
    }
    return this.preNumber;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
