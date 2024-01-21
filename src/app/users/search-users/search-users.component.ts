import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, of, switchMap, tap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

const fontAwesomeIcons = {
  search: faMagnifyingGlass,
  loading: faSpinner,
};

@Component({
  selector: 'app-search-user',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.scss']
})
export class SearchUsersComponent implements OnInit {
  @Output() isSearching = new EventEmitter<boolean>();
  queryControl = new FormControl('');
  isLoading = false;
  icons = fontAwesomeIcons;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.queryControl.valueChanges
      .pipe(
        tap(() => {
          this.isLoading = true;
          this.isSearching.emit(true);
        }),
        debounceTime(500),
        switchMap((value) => {
          if (!value) {
            this.isSearching.emit(false);
            console.log('emit: ', false);
          }
          return of(this.userService.filterUsers(value));
        }),
        tap(() => {
          this.isLoading = false;
        })
      )
      .subscribe();
  }
}
