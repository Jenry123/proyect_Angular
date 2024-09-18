import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../interfaces/iuser';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website'];

  users: MatTableDataSource<IUser> = new MatTableDataSource(); // Usar MatTableDataSource

  selectedUser: IUser = {
    id: 11,
    name: "jenry",
    username: "holita1",
    email: "soypollito@gmail.com",
    phone: "961 134234 22",
    website: "taquito.com"
  };

  constructor(private _service: UserService) {}

  ngOnInit(): void {
    this._service.getAll().subscribe(response => {
      this.users.data = response; // Asignar los datos al dataSource
    });
  }

  addUser(user: IUser): void {
    user.id = this.users.data.length > 0 ? Math.max(...this.users.data.map(u => u.id)) + 1 : 1; // Generar ID único
    alert("usuario "+user.name+" ha sido agregado correctamente")
    this.users.data.push(user); // Agregar el nuevo usuario
    this.users._updateChangeSubscription(); // Actualizar el dataSource
  }
}
