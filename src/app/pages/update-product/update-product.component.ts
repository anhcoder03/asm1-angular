import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent {
  productId: any;
  product: IProduct = {
    image: '',
    name: '',
    price: 0,
  };
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0],
    image: [''],
  });
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(this.productId).subscribe((data) => {
      this.product = data;
      this.productForm.patchValue({
        name: data.name,
        price: data.price,
        image: data.image,
      });
    });
  }

  onHandleSubmit() {
    if (this.productForm.invalid) return;

    const product: IProduct = {
      id: this.product.id,
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0,
      image: this.productForm.value.image || '',
    };
    this.productService.updateProduct(product).subscribe((data) => {
      console.log(data);
      alert('Cập nhật sản phẩm thành công');
      this.router.navigateByUrl('');
    });
  }
}
