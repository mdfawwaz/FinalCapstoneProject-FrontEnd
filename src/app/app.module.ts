import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './loginpage/loginpage.component';
import { RegistrationPageComponent } from './registrationpage/registrationpage.component';
import { FormsModule } from '@angular/forms';
import { LocationComponent } from './location/location.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouterModule } from '@angular/router';
import { SelectPageComponent } from './select-page/select-page.component';
import { ProductSelectionComponent } from './product-selection/product-selection.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ProductDetailsDialogComponent } from './product-details-dialog/product-details-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BillingComponent } from './billing/billing.component';


@NgModule({
  declarations: 
  [
    AppComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    LocationComponent,
    SelectPageComponent,
    ProductSelectionComponent,
    NavbarComponent,
    ConfigurationComponent,
    ProductDetailsDialogComponent,
    BillingComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    GoogleMapsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
