import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLogComponent } from './app-log/app-log.component';
import { BtcExchangeComponent } from './btc-exchange/btc-exchange.component';
import { BtcWalletComponent } from './btc-wallet/btc-wallet.component';
import { CompoundInterestComponent } from './compound-interest/compound-interest.component';
import { ConditionalGreetingComponent } from './conditional-greeting/conditional-greeting.component';
import { DiscDetailsComponent } from './disc-details/disc-details.component';
import { DiscListComponent } from './disc-list/disc-list.component';
import { GithubRepositoriesComponent } from './github-repositories/github-repositories.component';
import { HomeComponent } from './home/home.component';
// import { FirebaseComponent } from './firebase/firebase.component';
import { MultiplicationTableComponent } from './multiplication-table/multiplication-table.component';
import { RandomNumbersComponent } from './random-numbers/random-numbers.component';
import { SimpleInterestComponent } from './simple-interest/simple-interest.component';
import { TaskListComponent } from './task-list/task-list.component';


// RouterModule.forRoot: módulo que importa os componentes como seções do site navegáveis
// Array formada por: 
// --- path: identificador (URL amigável)
// --- component: componente com o conteúdo que será associado ao path

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "github", component: GithubRepositoriesComponent },
  { path: "random-numbers", component: RandomNumbersComponent },
  { path: "calculator/multiplication-table", component: MultiplicationTableComponent },
  { path: "calculator/simple-interest", component: SimpleInterestComponent },
  { path: "calculator/compound-interest", component: CompoundInterestComponent },
  { path: "conditional-greeting", component: ConditionalGreetingComponent },
  { path: 'discs', component: DiscListComponent },
  { path: 'discs/:id', component: DiscDetailsComponent },
  { path: 'log', component: AppLogComponent },
  { path: 'task-list', component: TaskListComponent },
  { path: 'bitcoin-exchange-rate', component: BtcExchangeComponent },
  { path: 'bitcoin-wallet', component: BtcWalletComponent }
  /* { path: 'firebase', component: FirebaseComponent } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
