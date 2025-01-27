import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from '../../services/errors/error-handler.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  errorMessage: string | null = null;

  constructor(private errorHandlerService: ErrorHandlerService) {}

  ngOnInit(): void {
    this.errorHandlerService.error$.subscribe((message) => {
      this.errorMessage = message;
    });
  }

  closeError() {
    this.errorMessage = null;
  }
}
