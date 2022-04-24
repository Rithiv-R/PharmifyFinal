import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-receipt-medical',
  templateUrl: './receipt-medical.component.html',
  styleUrls: ['./receipt-medical.component.css']
})
export class ReceiptMedicalComponent implements OnInit {

  @Input() myarr!:any[];
  constructor() { }

  ngOnInit(): void {
  }

}
