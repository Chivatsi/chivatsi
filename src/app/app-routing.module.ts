import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AllyFreshComponent } from './ally-fresh/ally-fresh.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { OnekanaComponent } from './onekana/onekana.component';
import { RequestAfricaComponent } from './request-africa/request-africa.component';
import { SfaComponent } from './sfa/sfa.component';
import { UjamComponent } from './ujam/ujam.component';
import { WavvyWalletComponent } from './wavvy-wallet/wavvy-wallet.component';

const routes: Routes = [
  {path: 'chivatsi', component: HomeComponent},
  {path: 'wavvy-wallet', component: WavvyWalletComponent},
  {path: 'onekana', component: OnekanaComponent},
  {path: 'ally-fresh', component: AllyFreshComponent},
  {path: 'stories-from-around', component: SfaComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'request-africa', component: RequestAfricaComponent},
  {path: 'ujam', component: UjamComponent},
  { path: '',   redirectTo: '/chivatsi', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
