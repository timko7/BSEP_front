import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { RegistracijatServces } from '../registacija/registracija.sevice';
import { SertifikatServces } from '../sertifikat/sertifikat.service';
import { Sertifikat } from '../sertifikat/Sertifikat';
import { Korisnik } from '../registacija/Korisnik';




@Component({

    //selector: 'login-component',
    templateUrl: './listaSertifikata.html',
    //styleUrls: []

})


export class ListaSertifikataComponent implements OnInit {


    listaCASertifikata: Sertifikat[] = [];
    listaEESertifikata: Sertifikat[] = [];
    listaPovucenihSertifikata: Sertifikat[] = [];
    imenaAliasaCA: string[] = [];
    imenaAliasaEE: string[] = [];
    imenaAliasaSvi: string[] = [];
    izabraniAliasCA: string;
    povratnaCA: boolean;
    izabraniAliasEE: string;
    povratnaEE: boolean;
    izabraniAliasSvi: string;
    povratnaSvi: boolean;

    korisnik: Korisnik;

    constructor(private router: Router, private loginService: RegistracijatServces, private sertifikatService: SertifikatServces) {
        this.korisnik = new Korisnik();
    }

    ngOnInit() {

        this.loginService.vratiUlogovanog().subscribe({
            next: korisnik => {
                this.korisnik = korisnik;

                if (this.korisnik == null) {
                    this.router.navigate(["/welcome"]);
                } else {
                    this.sertifikatService.vratiSveCA().subscribe({
                        next: listaCASertifikata => {
                            this.listaCASertifikata = listaCASertifikata;
                            console.log(this.listaCASertifikata);
                        }
                    })
                    this.sertifikatService.vratiSveEE().subscribe({
                        next: listaEESertifikata => {
                            this.listaEESertifikata = listaEESertifikata;
                            console.log(this.listaEESertifikata);
                        }
                    })
                    this.sertifikatService.vratiSvePovucene().subscribe({
                        next: listaPovucenihSertifikata => {
                            this.listaPovucenihSertifikata = listaPovucenihSertifikata;
                        }
                    })

                    this.sertifikatService.vratiAliase().subscribe({
                        next: imenaAliasaCA => {
                        this.imenaAliasaCA = imenaAliasaCA;
                            console.log(this.imenaAliasaCA);
                        }
                    });

                    this.sertifikatService.vratiAliaseEE().subscribe({
                        next: imenaAliasaEE => {
                        this.imenaAliasaEE = imenaAliasaEE;
                            console.log(this.imenaAliasaEE);
                        }
                    });

                    this.sertifikatService.vratiAliaseSve().subscribe({
                        next: imenaAliasaSvi => {
                        this.imenaAliasaSvi = imenaAliasaSvi;
                            console.log(this.imenaAliasaSvi);
                        }
                    });
                }
            }
        });

    }

    public povuciSertifikatCA(uid: string) {
        this.sertifikatService.povuciCA(uid).subscribe(
            data => {
                console.log('Prosao povuci sertCA!!');
                window.location.reload();
            },
            error => alert('Neuspesno povlacenje sertifikataCA!'));
    }

    public povuciSertifikatEE(uid: string) {
        this.sertifikatService.povuciEE(uid).subscribe(
            data => {
                console.log('Prosao povuci sertEE!!');
                window.location.reload();
            },
            error => alert('Neuspesno povlacenje sertifikataEE!')
        );
    }

    skiniSertifikatCA(uid: string) {
        console.log(uid);
        this.sertifikatService.skiniCA(uid).subscribe();

    }
    skiniSertifikatEE(uid: string) {
        console.log(uid);
        this.sertifikatService.skiniEE(uid).subscribe();

    }

    validacijaSertifikatCA(izabraniAliasCA: string) {
        console.log(izabraniAliasCA);
        this.sertifikatService.validacijaCA(izabraniAliasCA).subscribe({ next: povratnaCA => { this.povratnaCA = povratnaCA; } });


    }

    validacijaSertifikatEE(izabraniAliasEE: string) {
        console.log(izabraniAliasEE);
        this.sertifikatService.validacijaEE(izabraniAliasEE).subscribe({ next: povratnaEE => { this.povratnaEE = povratnaEE; } });

    }

    validacijaSertifikatSvi(izabraniAliasSvi: string) {
        console.log(izabraniAliasSvi);
        this.sertifikatService.validacijaSvi(izabraniAliasSvi).subscribe({ next: povratnaSvi => { this.povratnaSvi = povratnaSvi; } });

    }

    back(): void {
        this.router.navigate(['/homePage']);
    }

}