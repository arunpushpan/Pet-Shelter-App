import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceptAppComponent } from './accept-app/accept-app.component';
import { AddpetComponent } from './addpet/addpet.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminComponent } from './admin/admin.component';
import { AllPetsComponent } from './all-pets/all-pets.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { RehomeStatusComponent } from './rehome-status/rehome-status.component';
import { RehomeComponent } from './rehome/rehome.component';
import { RejectAppComponent } from './reject-app/reject-app.component';
import { ViewPetComponent } from './view-pet/view-pet.component';
import { ViewuserappComponent } from './viewuserapp/viewuserapp.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path: '', component: AllPetsComponent },
  // cart
  {path :'cart', component: CartComponent},
  // wishlist
  {path: 'wishlist', component: WishlistComponent},
  // view-pet
  {path:'view-pet/:id', component: ViewPetComponent },
  // register
  {path: 'register' , component: RegisterComponent},
  // login
  {path:'login' , component: LoginComponent },
  // re-home
  {path:'re-home', component: RehomeComponent},
   // admin page
   {path:'admin', component: AdminComponent},
  //  admin-home
  {path:'admin/home', component: AdminHomeComponent},
  // add-pet
  {path:'admin/add-pet', component: AddpetComponent},
  // view-user-app
  {path:'admin/view-app', component: ViewuserappComponent},
  // accept-app
  {path:'admin/accept-app', component:AcceptAppComponent},
  // reject-app
  {path:'admin/reject-app',component:RejectAppComponent},
  // rehome-user-status
  {path:'rehome-status/:id', component:RehomeStatusComponent},

  // page-not-found
  {path: '**', component: PageNotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
