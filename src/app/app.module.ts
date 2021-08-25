import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubRepositoriesComponent } from './github-repositories/github-repositories.component';
import { GithubService } from './github.service';
import { HomeComponent } from './home/home.component';
import { RandomNumbersComponent } from './random-numbers/random-numbers.component';
import { MultiplicationTableComponent } from './multiplication-table/multiplication-table.component';
import { FormsModule } from '@angular/forms';
import { SimpleInterestComponent } from './simple-interest/simple-interest.component';
import { CompoundInterestComponent } from './compound-interest/compound-interest.component';
import { ConditionalGreetingComponent } from './conditional-greeting/conditional-greeting.component';
import { DiscListComponent } from './disc-list/disc-list.component';
import { DiscDetailsComponent } from './disc-details/disc-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GithubRepositoriesComponent,
    RandomNumbersComponent,
    MultiplicationTableComponent,
    SimpleInterestComponent,
    CompoundInterestComponent,
    ConditionalGreetingComponent,
    DiscListComponent,
    DiscDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ GithubService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
