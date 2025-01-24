import { Component } from '@angular/core';
import { CustomerService } from '../../../../services/customer/customer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-delete',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss'],
})
export class UserDeleteComponent {
  customerId: number = 0;

  constructor(private customerService: CustomerService) {}

  deleteCustomer() {
    if (this.customerId) {
      this.customerService.deleteCustomer(this.customerId).subscribe(
        () => {
          console.log('Cliente eliminado');
          // Aquí puedes agregar lógica adicional, como mostrar un mensaje de éxito o redirigir a otra página
        },
        (error) => {
          console.error('Error al eliminar el cliente:', error);
        }
      );
    } else {
      console.error('El ID del cliente no puede estar vacío');
    }
  }
}
