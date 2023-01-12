import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosDashboardComponent } from './pages/productos-dashboard/productos-dashboard.component';
import { ProductosEditComponent } from './pages/productos-edit/productos-edit.component';
import { ProductosComponent } from './productos.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductosComponent,
    ProductosDashboardComponent,
    ProductosEditComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    SharedModule,
    RouterModule.forChild([])
  ]
})
export class ProductosModule { }
