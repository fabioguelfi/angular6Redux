import { Component, OnInit } from '@angular/core';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { LogOut } from '../../store/actions/auth.actions';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  logOut(): void {
    this.store.dispath(new LogOut({}));
  }

}
