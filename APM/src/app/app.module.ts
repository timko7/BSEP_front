import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { RegistracijaComponent } from './registacija/registracija-component';
import { LoginComponent } from './login/login-component';
import { RegistracijatServces } from './registacija/registracija.sevice';
import { HomePageModule } from './home-page/home-page.module';
import { HomePageComponent } from './home-page/home-page.component';
import { WelcomeComponent } from './home/welcome.component';
//import { SertifikatComponent } from './sertifikat/sertifikat-component';
//import { ListaSertifikataComponent } from './listaSertifikata/listaSertifikata.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistracijaComponent,
    LoginComponent,
    WelcomeComponent,
    //HomePageComponent,
    //SertifikatComponent,
    // ListaSertifikataComponent
    //HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // AppRoutingModule,
    HomePageModule,

    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'registracija', component: RegistracijaComponent },
      { path: 'login', component: LoginComponent },
      //{ path: 'homePage', component: HomePageComponent },
      //{ path: 'sertifikat', component:SertifikatComponent },
      //{ path: 'listaSertifikata', component:ListaSertifikataComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}

    ]),
    FormsModule
  ],
  providers: [RegistracijatServces],
  bootstrap: [AppComponent]
})
export class AppModule { }
