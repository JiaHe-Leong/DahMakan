import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../entities/item.entity';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
	public items: Item[] = [];
	public total: number = 0;

	constructor(
		public activatedRoute: ActivatedRoute,
		public productService: ProductService,
		public router: Router
	) { }

	ngOnInit() {
		
		this.activatedRoute.params.subscribe(params => {
			var id = params['id'];
			if (id>-1) {
				var item: Item = {
					product: this.productService.find(id),
					quantity: 1
				};
				if (localStorage.getItem('cart') == null) {
					let cart: any = [];
					cart.push(JSON.stringify(item));
					localStorage.setItem('cart', JSON.stringify(cart));
				} else {
					let cart: any = JSON.parse(localStorage.getItem('cart'));
					let index: number = -1;
					for (var i = 0; i < cart.length; i++) {
						let item: Item = JSON.parse(cart[i]);
						if (item.product.id == id) {
							index = i;
							break;
						}
					}
					if (index == -1) {
						cart.push(JSON.stringify(item));
						localStorage.setItem('cart', JSON.stringify(cart));
					} else {
						let item: Item = JSON.parse(cart[index]);
						item.quantity += 1;
						cart[index] = JSON.stringify(item);
						localStorage.setItem("cart", JSON.stringify(cart));
					}
				}
				this.loadCart();
			} else {
				this.loadCart();
			}
			setTimeout(() => {
				this.router.navigate(['Order']);
			}, -1);
			});
	}

	loadCart(): void {
		this.total = 0.00;
		this.items = [];
		let cart = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.items.push({
				product: item.product,
				quantity: item.quantity
			});
			this.total += (item.product.price * item.quantity) ;
			this.total.toFixed(2);
		}
	}

	remove(id: string): void {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		let index: number = -1;
		for (var i = 0; i < cart.length; i++) {
			let item: Item = JSON.parse(cart[i]);
			if (item.product.id == id) {
				cart.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();
	}

	addQuantity(id: string): void {
		let cart: any = JSON.parse(localStorage.getItem('cart'));		
		for (var i = 0; i < cart.length; i++) {
			let item: Item = JSON.parse(cart[i]);
			if (item.product.id == id) {
				item.quantity +=1;
				cart[i] = JSON.stringify(item);
			}
		}			
			
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();		
	}

	minusQuantity(id: string): void {
		let cart: any = JSON.parse(localStorage.getItem('cart'));		
		for (var i = 0; i < cart.length; i++) {
			let item: Item = JSON.parse(cart[i]);
			if (item.product.id == id) {
				if(item.quantity>1){
					item.quantity -=1;
					cart[i] = JSON.stringify(item);
				}				
			}
		}			
			
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();						
	}

	clearCart(){
		let cart: any = [];
		
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();
	}
}
