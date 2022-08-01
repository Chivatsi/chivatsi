import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { WavvyWalletComponent } from './wavvy-wallet/wavvy-wallet.component';

const routes: Routes = [
  {path: 'chivatsi', component: HomeComponent},
  {path: 'wavvy-wallet', component: WavvyWalletComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  { path: '',   redirectTo: '/chivatsi', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
