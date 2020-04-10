import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SertifikatComponent } from '../sertifikat/sertifikat-component';
import { RegistracijatServces } from '../registacija/registracija.sevice';
import { SertifikatServces } from '../sertifikat/sertifikat.service';
import { HomePageComponent } from './home-page.component';
import { ListaSertifikataComponent } from '../listaSertifikata/listaSertifikata.component';




@NgModule({
  declarations: [
    HomePageComponent,
    SertifikatComponent,
    ListaSertifikataComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'homePage', component: HomePageComponent },
      { path: 'homePage/sertifikat', component:SertifikatComponent },
      { path: 'homePage/listaSertifikata', component:ListaSertifikataComponent },
      

    ]),
    FormsModule, 
  ],
  providers:  [
      RegistracijatServces,SertifikatServces
  ]
})
export class HomePageModule { }