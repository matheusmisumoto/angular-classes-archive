import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubRepositoriesComponent } from './github-repositories/github-repositories.component';
import { HomeComponent } from './home/home.component';
import { RandomNumbersComponent } from './random-numbers/random-numbers.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "github", component: GithubRepositoriesComponent },
  { path: "random-numbers", component: RandomNumbersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
