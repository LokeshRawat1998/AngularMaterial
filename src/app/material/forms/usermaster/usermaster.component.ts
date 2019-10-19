import { Component, OnInit ,Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  BranchCode: string;
  BranchName: string;
}

@Component({
  selector: 'app-usermaster',
  templateUrl: './usermaster.component.html',
  styleUrls: ['./usermaster.component.css']
})
export class UsermasterComponent implements OnInit {

  constructor( public dialog: MatDialog) { }

  ngOnInit() {
  }
  // openBranchDialog(){
  //   this.dialog.open();
  // }
  openDialog(): void {
    const dialogRef = this.dialog.open(Branches, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}

/*---------------------------------------------------------*/

@Component({
  selector:'branches',
  templateUrl:'branches.html',
  styleUrls: []
})

export class Branches {

  constructor(
    public dialogRef: MatDialogRef<Branches>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}