import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user';
import { UserService } from './services/user.service';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user$!: Observable<User | null>;
  isLogout = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.fetchDataFromLocalStorage();
    this.user$ = this.userService.currentUser$;
  }

  logout() {
    this.userService.logout();
    this.onCloseModal();
  }

  showModal() {
    this.isLogout = true;
  }

  onCloseModal() {
    this.isLogout = false;
  }
}
