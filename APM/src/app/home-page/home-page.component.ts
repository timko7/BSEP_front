import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';



@Component({
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css']

})
export class HomePageComponent{

 
  constructor(private _router: Router) { }

  ngOnInit() {
    
  }
}