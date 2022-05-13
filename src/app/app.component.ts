import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'basketball-app';
  links = [
    { path: '/login', icon: 'vpn_key', title: 'Login' },
    { path: '/games', icon: 'view_list', title: 'Games' },
  ];
}
