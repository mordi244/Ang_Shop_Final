import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { CardsBodyComponent } from './cards-body/cards-body.component';
import { CardComponent } from './cards-body/card/card.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FooterComponent } from './footer/footer.component';
import { CardContentComponent } from './cards-body/card-content/card-content.component';
import { BackComponent } from './cards-body/card-content/back/back.component';
import { SocialComponent } from './social/social.component';
import { SocialContainerComponent } from './social-container/social-container.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component'; 
import { CartService } from './services/cart.service';
import { DataService } from './services/data.service';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminService } from './services/admin.service';
import { LocalService } from './services/local.service';
import { MatBadgeModule } from '@angular/material/badge';
import {
  MatToolbarModule,
} from '@angular/material';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { ManagementComponent } from './management/management.component';
import { EditProductComponent } from './cards-body/card-content/edit-product/edit-product.component';
import { TranslatePipe } from './pipes/lng.pipe';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Routes, RouterModule } from '@angular/router';
import { CartGuardService } from './services/cart-guard.service';
import { FormGuardService } from './services/form-guard.service';


const appRoutes: Routes = [
 { path: '' , component:HomeComponent },
 { path: 'login' , component:LoginComponent },
 { path: 'products' , component:CardsBodyComponent },
{ path: 'products/:id' , component:CardContentComponent },
 //{ path: 'products/:id' , component:CardComponent },
 { path: 'contact' , component:ContactComponent },
 { path: 'management' , component:ManagementComponent , canDeactivate:[FormGuardService]},
 { path: 'about' , component:AboutComponent },
 { path: 'cart' , component:CartComponent , canActivate:[CartGuardService] , 
  children : [{
    path:':id',
    component:CardContentComponent
  }]
 },
 { path: 'management' , component:ManagementComponent }


];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    CardsBodyComponent,
    CardComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    CardContentComponent,
    BackComponent,
    SocialComponent,
    SocialContainerComponent,
    CartComponent,
    ContactComponent,
    CartItemComponent,
    LoginComponent,
    SubHeaderComponent,
    ManagementComponent,
    EditProductComponent,
    TranslatePipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatToolbarModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [CartService,DataService,UserService,AdminService,LocalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
