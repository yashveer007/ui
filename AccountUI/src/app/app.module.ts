import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { FormsModule } from '@angular/forms';
import { AccountServiceService } from './services/account-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AddAccountComponent,
    DeleteAccountComponent,
    UpdateAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AccountServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
