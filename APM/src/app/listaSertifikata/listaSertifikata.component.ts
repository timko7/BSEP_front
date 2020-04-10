import {Component, OnInit} from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { RegistracijatServces } from '../registacija/registracija.sevice';
import { SertifikatServces } from '../sertifikat/sertifikat.service';
import { Sertifikat } from '../sertifikat/Sertifikat';




@Component({

    //selector: 'login-component',
    templateUrl : './listaSertifikata.html',
    //styleUrls: []

})


export class ListaSertifikataComponent implements OnInit{
    
  
    listaCASertifikata:Sertifikat[]=[];
    listaEESertifikata:Sertifikat[]=[];

    constructor(private router:Router,private loginService:RegistracijatServces,private sertifikatService:SertifikatServces){

  
      
    }

    ngOnInit() {
     this.sertifikatService.vratiSveCA().subscribe({
        next:listaCASertifikata=>{this.listaCASertifikata=listaCASertifikata;
        console.log(this.listaCASertifikata);
    }})
    this.sertifikatService.vratiSveEE().subscribe({
        next:listaEESertifikata=>{this.listaEESertifikata=listaEESertifikata;
        console.log(this.listaEESertifikata);
    }})
  
}
povuciSertifikat(){
 
 
    
}

skiniSertifikatCA(uid:string){
    console.log(uid);
    this.sertifikatService.skiniCA(uid).subscribe();

}
skiniSertifikatEE(uid:string){
    console.log(uid);
    this.sertifikatService.skiniEE(uid).subscribe();

}
}