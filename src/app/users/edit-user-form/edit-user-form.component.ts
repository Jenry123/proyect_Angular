import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IUser } from '../interfaces/iuser';

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.css'] // Cambié `styleUrl` a `styleUrls`
})
export class EditUserFormComponent {
  @Input() user: IUser = {
    id: 0,
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  }

  @Input() disabled: boolean = true

  @Output() eventEmitter = new EventEmitter<IUser>()

  constructor() {}

  enviar(): void {
    this.eventEmitter.emit(this.user);
    // Reiniciar el formulario después de enviar
    this.user = {
      id: 0,
      name: "",
      username: "",
      email: "",
      phone: "",
      website: ""
    };
  }
}
