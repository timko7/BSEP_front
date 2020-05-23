import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Korisnik } from './Korisnik';
import { RegistracijatServces } from './registracija.sevice';




@Component({

    templateUrl: './registracija.html'

})

export class RegistracijaComponent {

    korisnik: Korisnik;
    korisnikUserReg: boolean = false;

    constructor(private route: ActivatedRoute, private router: Router, private registrcijaService: RegistracijatServces) {
        this.korisnik = new Korisnik();
    }

    onSubmit() {

        if (this.korisnikUserReg == false) {

            this.registrcijaService.save(this.korisnik).subscribe(result => this.gotoUserList());
            alert("sacuvan korisnik " + this.korisnik.ime + "" + this.korisnik.prezime)
            this.korisnik.ime = "";
            this.korisnik.prezime = "";
            this.korisnik.email = "";
            this.korisnik.password = "";
            this.router.navigate(["/login"]);
        } else {
            this.registrcijaService.saveObicnog(this.korisnik).subscribe(result => this.gotoUserList());
            alert("Sacuvan obican korisnik " + this.korisnik.ime + "" + this.korisnik.prezime)
            this.korisnik.ime = "";
            this.korisnik.prezime = "";
            this.korisnik.email = "";
            this.korisnik.password = "";
            this.router.navigate(["/login"]);
        }
    }

    toggleUserReg(event) {
        if (event.target.checked) {
            this.korisnikUserReg = true;
        } else {
            this.korisnikUserReg = false;
        }
    }


    gotoUserList() {

    }



}