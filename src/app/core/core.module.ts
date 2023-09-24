import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MatCardModule, MatDividerModule, MatPaginatorModule, MatSidenavModule, MatTableModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [CoreComponent, HeaderComponent, SideBarComponent],
  imports: [
    CommonModule,    
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    AppRoutingModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
