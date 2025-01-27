import { Component } from '@angular/core';
import { CustomerService } from '../../../../services/customer/customer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss'],
})
export class UserUpdateComponent {
  customerId: number = 0;
  customerName: string = '';
  message: string = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private customerService: CustomerService) {}

  updateCustomer() {
    if (this.customerName.trim()) {
      const customer = { name: this.customerName };
      this.customerService
        .updateCustomer(this.customerId, customer)
        .pipe(
          tap(
            (response) => {
              console.log('Cliente actualizado:', response);
              this.message = 'Cliente actualizado exitosamente';
              this.messageType = 'success';
            },
            (error) => {
              console.error('Error al actualizar el cliente:', error);
              this.message = 'Error al actualizar el cliente';
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
