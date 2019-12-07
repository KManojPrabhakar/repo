import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  usersData: any;
  constructor() {
    this.usersData = [
      {
        name: 'Manoj Prabhakar',
        repositories: [
          {
            name: 'Repo1',
            desc: 'This is demo project'
          },
          {
            name: 'Repo2',
            desc: 'This is your 2nd project '
          }
        ],
        id: 1
      },

      {
        name: 'Jeevan',
        repositories: [
          {
            name: 'Repo2',
            desc: 'This is demo project'
          }
        ],
        id: 2
      },

      {
        name: 'Darshit ',
        repositories: [
          {
            name: 'Drashit Repo1',
            desc: 'This is your 1st project'
          },
          {
            name: 'Drashit Repo2',
            desc: 'This is your 2nd project '
          }
        ],
        id: 3
      },
    ];
  }

  getUserListData() {
    return this.usersData;
  }

  getCurrentUserInfo(userId) {
    return this.usersData.find((data) => data.id  === userId);
  }

  getUserSearchedNameDetails(name) {
    return this.usersData.find((data) => data.name.toLowerCase().includes(name.toLowerCase()));

  }

}
