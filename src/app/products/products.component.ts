import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ProductService } from '../Services/product.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products!:any

  constructor(private ps:ProductService,private route:ActivatedRoute ,private router:Router){}

  ngOnInit(): void {
    this.products = this.ps.products    
  }

  loadProduct(id:number){
    // this.router.navigate([id],{relativeTo:this.route}) relative path
    this.router.navigate(['/products',id]) //absolute


  }

}
