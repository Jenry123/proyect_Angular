import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../interfaces/iuser';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrl: './users-dashboard.component.css'
})
export class UsersDashboardComponent implements OnInit{

  ngOnInit(): void {
      this._service.getAll().subscribe(
        response => this.users = response
      )
  }

  selectedUser: IUser = {
    id: 1,
    name: "Marco",
    username: "marco1",
    email: "marco1@gmail.com",
    phone: "961 872 9982",
    website: "marco1.com"
  }

  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website']

  users: IUser[] = []

  constructor(private _service: UserService){

  }

  addUser(user: IUser): void{
    this.users.push(user);
    console.log(this.users);
  }

}
