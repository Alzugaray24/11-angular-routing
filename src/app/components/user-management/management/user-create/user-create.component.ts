import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../../../services/customer/customer.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
  providers: [CustomerService],
})
export class UserCreateComponent {
  customerName: string = '';
  message: string = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private customerService: CustomerService) {}

  saveCustomer() {
    if (this.customerName.trim()) {
      this.customerService
        .saveCustomer(this.customerName)
        .pipe(
          tap(
            (response) => {
              console.log('Cliente guardado:', response);
              this.message = 'Cliente guardado exitosamente';
              this.messageType = 'success';
            },
            (error) => {
              console.error('Error al guardar el cliente:', error);
              this.message = 'Error al guardar el cliente';
              this.messageType = 'error';
            }
          )
        )
        .subscribe();
    } else {
      this.message = 'El nombre del cliente no puede estar vacío';
      this.messageType = 'error';
      console.error(this.message);
    }
  }
}
