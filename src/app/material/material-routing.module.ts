import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorcreateComponent } from './forms/vendorcreate/vendorcreate.component';
import { UsermasterComponent } from './forms/usermaster/usermaster.component';

const routes: Routes = [
  {path:'vendor', component:VendorcreateComponent},
  {path:'usermaster', component :UsermasterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
