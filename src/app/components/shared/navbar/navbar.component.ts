import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) { }

  buscarHeroe = ( termino: string) => {
    if (termino.length < 1 ){
      return;
    }

    this.router.navigate(['/search', termino]);
   // console.log(termino);
  }

}
