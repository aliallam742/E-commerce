import { Component } from '@angular/core';
import { CustomerComment } from "./customer-comment/customer-comment";
import { ICustomer } from './customar';

@Component({
  selector: 'app-customer-comment-list',
  imports: [CustomerComment],
  templateUrl: './customer-comment-list.html',
  styleUrl: './customer-comment-list.scss'
})
export class CustomerCommentList {
  customersComments: ICustomer[] = [{
    starRate: 3,
    comment: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    imgSrc: "/assets/images/customar.avif",
    name: "John Doe",
    location: "California, USA"
  },
  {
    starRate: 5,
    comment: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    imgSrc: "/assets/images/customar2avif.avif",
    name: "John Doe",
    location: "California, USA"
  },
  {
    starRate: 4,
    comment: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    imgSrc: "/assets/images/customr1.avif",
    name: "John Doe",
    location: "California, USA"
  },

  ]
}
