import { CommonModule } from '@angular/common';
import { ICustomer } from './../customar';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer-comment',
  imports: [CommonModule],
  templateUrl: './customer-comment.html',
  styleUrl: './customer-comment.scss'
})
export class CustomerComment {
  _customer: ICustomer | null = null;
  @Input({ required: true }) set customer(value: ICustomer | null) {
    this._customer = value;
  }

}
