import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsDialogComponent } from '../product-details-dialog/product-details-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product-selection.component.html',
  styleUrls: ['./product-selection.component.css']
})
export class ProductSelectionComponent implements OnInit {
  products: any[] = [];
  selectedProduct: any;
  selectedProductFeatures: any[] = [];
  selectedProductParameters: any[] = [];
  showFeatures: boolean = false; 
  showParameters: boolean = false;
  productName: any;
  location: any;
  productId: any;
  productPrice: any;

  constructor(private http: HttpClient, private router: Router, private dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.productName = params['productName'];
      this.location = params['location'];
      this.productId = params['productId'];
      this.productPrice = params['productPrice'];
    });

    this.http.get('http://localhost:8080/api/selection').subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
    });
  }


  selectProduct(product: any) {
    this.selectedProduct = product;
    this.http.get(`http://localhost:8080/api/products/${product.id}/features`).subscribe((data: any) => {
      this.selectedProductFeatures = data;
    });
    this.http.get(`http://localhost:8080/api/products/${product.id}/parameters`).subscribe((data: any) => {
      this.selectedProductParameters = data;
    });
  }

  goToConfigurationPage() {
    if (this.selectedProduct) {
      this.router.navigate(['/configuration', this.selectedProduct.id]);
    }
  }

  openDetailsDialog(product: any): void {
    const dialogRef = this.dialog.open(ProductDetailsDialogComponent, {
      width: '400px',
      data: {
        product,
        features: this.selectedProductFeatures,
        parameters: this.selectedProductParameters
      },
    });
  }

  openProductDetails(selectedProduct: any): void {
    this.router.navigate(['/product-details', selectedProduct.id]);
  }
  showFeaturesDialog = false;
  showParametersDialog = false;
  dialogPosition = { top: '0', left: '0' };

  setDialogPosition(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    this.dialogPosition = {
      top: rect.bottom + 'px',
      left: rect.left + 'px',
    };
  }

}
