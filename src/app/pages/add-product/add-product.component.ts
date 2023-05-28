import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interface/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0],
    image: [''],
  });
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {}
  onHandleSubmit() {
    if (this.productForm.invalid) {
      return;
    }

    const product: IProduct = {
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0,
      image: this.productForm.value.image || '',
    };
    this.productService.addProduct(product).subscribe((data) => {
      console.log(data);
    });
  }
}
