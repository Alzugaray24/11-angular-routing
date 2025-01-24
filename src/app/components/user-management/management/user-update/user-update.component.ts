import { Component } from '@angular/core';
import { CustomerService } from '../../../../services/customer/customer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-update',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss'],
})
export class UserUpdateComponent {
  customerId: number = 0;
  customerName: string = '';

  constructor(private customerService: CustomerService) {}

  updateCustomer() {
    if (this.customerName.trim()) {
      const customer = { name: this.customerName };
      this.customerService
        .updateCustomer(this.customerId, customer)
        .subscribe((response) => {
          console.log('Cliente actualizado:', response);
          // Aquí puedes agregar lógica adicional, como mostrar un mensaje de éxito o redirigir a otra página
        });
    } else {
      console.error('El nombre del cliente no puede estar vacío');
    }
  }
}
