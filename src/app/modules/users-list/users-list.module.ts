import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UsersListRoutingModule } from './users-list-routing.module';
import { UserCardComponent } from './component/user-card/user-card.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';

@NgModule({
  declarations: [UsersListComponent, UserCardComponent, UserDetailComponent],
  imports: [
    CommonModule,
    UsersListRoutingModule
  ]
})
export class UsersListModule { }
