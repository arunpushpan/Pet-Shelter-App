import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AllPetsComponent } from './all-pets/all-pets.component';
import { CartComponent } from './cart/cart.component';
import { ViewPetComponent } from './view-pet/view-pet.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RehomeComponent } from './rehome/rehome.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddpetComponent } from './addpet/addpet.component';
import { ViewuserappComponent } from './viewuserapp/viewuserapp.component';
import { AcceptAppComponent } from './accept-app/accept-app.component';
import { RejectAppComponent } from './reject-app/reject-app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    AllPetsComponent,
    CartComponent,
    ViewPetComponent,
    WishlistComponent,
    FilterPipe,
    RehomeComponent,
    AdminComponent,
    AdminHomeComponent,
    AddpetComponent,
    ViewuserappComponent,
    AcceptAppComponent,
    RejectAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
