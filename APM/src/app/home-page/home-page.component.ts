import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { RegistracijatServces } from '../registacija/registracija.sevice';
import { Korisnik } from '../registacija/Korisnik';



@Component({
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css']

})
export class HomePageComponent {

  korisnik: Korisnik;
  request: Request;

  constructor(private router: Router, private registracijaService: RegistracijatServces) {
    this.korisnik = new Korisnik();


  }

  ngOnInit(): void {
    this.vratiKorisnika();
  }


  vratiKorisnika() {

    this.registracijaService.vratiUlogovanog().subscribe({
      next: korisnik => {
        this.korisnik = korisnik;

        if (this.korisnik == null) {
          this.router.navigate(["/welcome"]);
        } else {
          if (this.korisnik.rootCreated == true || this.korisnik.rootCreated == false) {
            console.log("Instanca od ADMIN");
            //this.router.navigate(["/homePage"]);
          } else {
            console.log("Instanca od KORISNIK");
            this.router.navigate(["/homePage/korisnik"]);
          }
        }
      }
    });
  }

  logout() {
    this.registracijaService.logout(this.request).subscribe(
      result => this.kraj()
    );
  }

  kraj() {
    //this.router.navigate(["/welcome"]);
    alert("LOGOUT-ovan")
  }

}