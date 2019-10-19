import { NgModule } from '@angular/core';
import { MaterialRoutingModule } from './material-routing.module';
import { VendorcreateComponent } from './forms/vendorcreate/vendorcreate.component';
import {MatGridListModule, MatFormFieldModule, MatInputModule, MatDialogModule} from '@angular/material';
import { UsermasterComponent, Branches } from './forms/usermaster/usermaster.component';
import { BranchmasterComponent } from './forms/branchmaster/branchmaster.component';



const MaterialComponent=[MatGridListModule,MatFormFieldModule,MatInputModule,MatDialogModule];
@NgModule({
  declarations: [VendorcreateComponent, UsermasterComponent, BranchmasterComponent,Branches],
  imports: [
    MaterialRoutingModule,MaterialComponent
  ],
  exports:[MaterialComponent]
  
})
export class MaterialModule { }
