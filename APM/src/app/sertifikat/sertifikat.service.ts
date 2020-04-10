import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginZahtev } from "../login/LoginZahtev";
import { Sertifikat } from "./Sertifikat";


@Injectable()
export class SertifikatServces{
    private pacijetUrl:string;

    constructor(private http:HttpClient){
      //  this.pacijetUrl='http//localhost:8080/api/pacijenti';
    }
  
 

    public sacuvaj(sertifikat:Sertifikat){
        return this.http.post<boolean>("/api/certificate/create",sertifikat);
    }

    public sacuvajRoot(sertifikat:Sertifikat){
        return this.http.post<Sertifikat>("/api/certificate/createRoot",sertifikat);
    }
 
    public vratiAliase():Observable<string[]>{
        return this.http.get<string[]>("/api/certificate/aliasi");
    
    }

    public vratiSveCA():Observable<Sertifikat[]>{
        return this.http.get<Sertifikat[]>("/api/certificate/sviCASertifikati");
    
    }
    public vratiSveEE():Observable<Sertifikat[]>{
        return this.http.get<Sertifikat[]>("/api/certificate/sviEESertifikati");
    
    }
    public skiniCA(uid:String){
        return this.http.get("/api/certificate/downloadCA/"+uid);
    
    }
    public skiniEE(uid:String){
        return this.http.get("/api/certificate/downloadEE/"+uid);
    
    }

    public povuciCA(uid: String){
        return this.http.get("/api/certificate/povuciCA/" + uid);    
    }

    public povuciEE(uid: String){
        return this.http.get("/api/certificate/povuciEE/" + uid);    
    }

    public vratiSvePovucene(): Observable<Sertifikat[]> {
        return this.http.get<Sertifikat[]>("/api/certificate/sviPovuceniSertifikati");
    
    }

}