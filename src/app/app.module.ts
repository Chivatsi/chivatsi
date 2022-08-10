import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from '@sisitech/carousel'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WavvyWalletComponent } from './wavvy-wallet/wavvy-wallet.component';
import { NavigationBarComponent } from './shared/navigation-bar/navigation-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { OnekanaComponent } from './onekana/onekana.component';
import { AllyFreshComponent } from './ally-fresh/ally-fresh.component';
import { UpdateComponent } from './shared/update/update.component';
import { SfaComponent } from './sfa/sfa.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WavvyWalletComponent,
    NavigationBarComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    OnekanaComponent,
    AllyFreshComponent,
    UpdateComponent,
    SfaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
