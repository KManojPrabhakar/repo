import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
@Input() userData: any;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log('userData', this.userData);
  }

  navigateToDetailPage(user) {
    if (user) {
      const url = `users/${user.id}`;
      this.router.navigate([url]);
    }
  }

}
