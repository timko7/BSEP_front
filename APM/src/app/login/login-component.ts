import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Korisnik } from '../registacija/Korisnik';
import { LoginZahtev } from './LoginZahtev';
import { RegistracijatServces } from '../registacija/registracija.sevice';



@Component({

    //selector: 'login-component',
    templateUrl : './login.html',
    //styleUrls: []

})


export class LoginComponent implements OnInit{
    korisnik:Korisnik;
    respnse:Response;
    zahtev:LoginZahtev;
    
    constructor(private router:Router,private loginService:RegistracijatServces){

        this.zahtev=new LoginZahtev();
        this.korisnik=new Korisnik();
      
    }

    ngOnInit() {
  
}


    login(){
        
        this.loginService.ulogujSe(this.zahtev).subscribe(result=>this.vratiKorisnika());
       
      
    }

    vratiKorisnika(){

       this.loginService.vratiUlogovanog().subscribe({next: korisnik=>{
            this.korisnik=korisnik;
            alert("User "+korisnik.ime + " logged in successfully.");
            this.router.navigate(["/homePage"]);
            
       }
       });
       
            
                 
              
        

        
    
       }
       
      

}