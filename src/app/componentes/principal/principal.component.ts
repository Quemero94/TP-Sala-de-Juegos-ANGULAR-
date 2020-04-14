import { Component, OnInit } from '@angular/core';
import { Principal, MenuPrincipalService } from '../../servicios/menu-principal.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  mPrincipal: Principal[] = [];

  constructor(private _menuPrincipal: MenuPrincipalService) { }

  ngOnInit() {
    this.mPrincipal = this._menuPrincipal.getMenuPrincipal();

    console.log(this.mPrincipal);
  }



}
