import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  products = products;
  constructor() { }

  ngOnInit() {
    
  }

}
