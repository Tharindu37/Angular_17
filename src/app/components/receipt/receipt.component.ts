import { Component, inject } from '@angular/core';
import { CalculatorService } from '../../service/calculator.service';

@Component({
  selector: 'app-receipt',
  standalone: true,
  imports: [],
  templateUrl: './receipt.component.html',
  styleUrl: './receipt.component.scss',
})
export class ReceiptComponent {
  private calculatorService = inject(CalculatorService);
  totalCost = this.calculatorService.add(40, 32);
}
