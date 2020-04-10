import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Korisnik } from "./Korisnik";
import { LoginZahtev } from "../login/LoginZahtev";


@Injectable()
export class RegistracijatServces{
    private pacijetUrl:string;

    constructor(private http:HttpClient){
      //  this.pacijetUrl='http//localhost:8080/api/pacijenti';
    }
  
 

    public save(korisnik:Korisnik){
        return this.http.post<Korisnik>("/api/admin/add",korisnik);
    }

    public ulogujSe(loginZahtev:LoginZahtev){
        return this.http.post<Response>("/api/login", loginZahtev);
    }
 
    public vratiUlogovanog():Observable<Korisnik>{
        return this.http.get<Korisnik>("/api/login/vratiUlogovanog");
        
    }


}