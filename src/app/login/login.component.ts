import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy {

  ngOnDestroy() {
    console.log('LoginComponent destroyed');
  }

}
