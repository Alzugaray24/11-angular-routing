import { Component } from '@angular/core';
import { CustomerService } from '../../../../services/customer/customer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-delete',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss'],
  providers: [CustomerService],
})
export class UserDeleteComponent {
  customerId: number = 0;
  message: string = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private customerService: CustomerService) {}

  deleteCustomer() {
    if (this.customerId) {
      this.customerService
        .deleteCustomer(this.customerId)
        .pipe(
          tap(
            () => {
              console.log('Cliente eliminado');
              this.message = 'Cliente eliminado exitosamente';
              this.messageType = 'success';
            },
            (error) => {
              console.error('Error al eliminar el cliente:', error);
              this.message = 'Error al eliminar el cliente';
              this.messageType = 'error';
            }
          )
        )
        .subscribe();
    } else {
      this.message = 'El ID del cliente no puede estar vacío';
      this.messageType = 'error';
      console.error(this.message);
    }
  }
}
