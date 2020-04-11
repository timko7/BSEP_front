import {Component, OnInit} from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Korisnik } from '../registacija/Korisnik';
import { RegistracijatServces } from '../registacija/registracija.sevice';
import { Sertifikat } from './Sertifikat';
import { SertifikatServces } from './sertifikat.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';



@Component({

    //selector: 'login-component',
    templateUrl : './sertifikat.html',
    //styleUrls: []

})


export class SertifikatComponent implements OnInit{
    
    sertifikat:Sertifikat;
    povratna:boolean=true;
    korisnik:Korisnik;
    imenaAliasa:string[]=[];
    izabraniAlias:string;
    
    constructor(private router:Router,private loginService:RegistracijatServces,private sertifikatService:SertifikatServces){

       this.korisnik=new Korisnik();
        this.sertifikat=new Sertifikat();
      
    }

    ngOnInit() {
        this.loginService.vratiUlogovanog().subscribe({next: korisnik=>{
            this.korisnik=korisnik;
       }
       });
       this.sertifikatService.vratiAliase().subscribe({
           next:imenaAliasa=>{this.imenaAliasa=imenaAliasa;
           console.log(this.imenaAliasa);
       }});
       
  
}
napraviNoviSertifikat(){
 
    console.log(this.sertifikat);
    this.sertifikat.issuer=this.izabraniAlias;
    console.log(this.izabraniAlias);

    if(this.sertifikat.notAfter<this.sertifikat.notBefore){
        alert("Datum isticanja mora biti nakon datuma izdavanja.");
    }
    else
        this.sertifikatService.sacuvaj(this.sertifikat).subscribe({next:povratna=>{this.povratna=povratna;
                if(this.povratna==true)
                window.location.reload();
        }
    });
    
}

gotoUserList(){

}
      
    }

  