import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { loginGuard } from '../guards/login.guard';
import { SharedModule } from '../shared/shared.module';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SearchUsersComponent } from './search-users/search-users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    canActivate: [loginGuard],
    children: [
      { path: '', component: UsersListComponent },
      { path: 'add', component: AddUserComponent },
      { path: ':id', component: EditUserComponent },
    ],
  },
];

@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    AddUserComponent,
    EditUserComponent,
    SearchUsersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class UsersModule { }
