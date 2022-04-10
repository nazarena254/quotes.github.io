import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateCountPipe } from './date-count.pipe';
import { QuoteComponent } from './quote/quote.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    DateCountPipe,
    QuoteComponent,
    QuoteFormComponent,
    QuoteDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
