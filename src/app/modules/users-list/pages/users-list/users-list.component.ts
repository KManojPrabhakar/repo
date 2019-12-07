import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UsersListService } from '../../services/users-list.service';

import { debounceTime, map, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { fromEvent, Subject } from 'rxjs';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  usersList: any;
  userSearchDetails: any;
  @ViewChild('inputSearch') inputSearch: ElementRef;

  constructor(private usersListService: UsersListService) { }

  ngOnInit() {
    this.getUsersListData();
    fromEvent(this.inputSearch.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      })
      , debounceTime(1000)
      , distinctUntilChanged()
      ).subscribe((text: string) => {
        console.log('user entered text', text);

        if (text) {
          this.userSearchDetails = this.usersListService.getUserSearchedNameDetails(text);
          console.log('userSearchDetails', this.userSearchDetails);
        }

      });
  }

  getUsersListData() {
    this.usersList  = this.usersListService.getUserListData();
  }

}
