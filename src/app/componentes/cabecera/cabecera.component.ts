import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  salir() {
    this.auth.logout();
    this.router.navigateByUrl("/Login");
  }


}
