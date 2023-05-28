import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  productId: any;
  productData: IProduct = { name: '', price: 0, image: '' };
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) // private router: Router
  {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(this.productId).subscribe((data) => {
      this.productData = data;
    });
  }
}
