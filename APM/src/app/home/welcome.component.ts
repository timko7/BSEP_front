import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistracijatServces } from '../registacija/registracija.sevice';
import { Korisnik } from '../registacija/Korisnik';

@Component({
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {
  public pageTitle = 'Welcome';

  korisnik: Korisnik;

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

        // if (this.korisnik != null) {
        //   if (this.korisnik.uloga == "PACIJENT") {
        //     this.router.navigate(["/homePagePacijent"]);
        //   }
        //   else if (this.korisnik.uloga == "ADMINKLINIKE") {
        //     this.router.navigate(["/adminKlinike"]);
        //   }
        //   else if (this.korisnik.uloga == "LEKAR") {
        //     this.router.navigate(["/lekar"]);
        //   }
        // }
        if (this.korisnik != null) {
          if (this.korisnik.rootCreated == true || this.korisnik.rootCreated == false) {
            console.log("Instanca od ADMIN");
            this.router.navigate(["/homePage"]);
          } else {
            console.log("Instanca od KORISNIK");
            this.router.navigate(["/homePage/korisnik"]);
          }
        }

        // if (korisnik.rootCreated == true || this.korisnik.rootCreated == false) {
        //   //console.log("Instanca od ADMIN");
        //   alert("Instanca od ADMIN");
        //   this.router.navigate(["/homePage"]);
        // } else {
        //   if (this.korisnik != null) {
        //     //console.log("Instanca od KORISNIK");
        //     alert("Instanca od KORISNIK");
        //     this.router.navigate(["/homePage/korisnik"]);
        //   }
        // }

        
      }
    });
  }



}
