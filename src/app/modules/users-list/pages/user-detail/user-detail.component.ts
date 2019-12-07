import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersListService } from '../../services/users-list.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId: string;
  currentUserDetails: any;
  constructor(private activatedRoute: ActivatedRoute, private usersListService: UsersListService) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.params.userId;
    console.log('userId', this.userId);
    this.getCurrentUserDetail(Number(this.userId));
  }

  getCurrentUserDetail(userId) {
    this.currentUserDetails = this.currentUserDetails = this.usersListService.getCurrentUserInfo(userId);
    console.log('currentUserDetails', this.currentUserDetails);
  }

}
