import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styles: [
  ]
})
export class ProtectedComponent implements OnInit {

  constructor(public _authService: AuthService) { }

  ngOnInit(): void {
    this._authService.userProfile$.subscribe( profile => {
      console.log(profile);
    });
  }

}
