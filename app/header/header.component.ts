import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header/header.component.html',
  styleUrls: ['header/header.component.css']
})
export class HeaderComponent implements OnInit {

  isDarkTheme: boolean = false;
  notificaciones: number = 2
  constructor() {
  }

  ngOnInit() {
  }


logout()
{
localStorage.removeItem('currentUser');
window.location.reload();
}
}
