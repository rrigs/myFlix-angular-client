import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * The director-dialog component shows details about the director including name, a short bio, and birth year.
 */

@Component({
  selector: 'app-director-dialog',
  templateUrl: './director-dialog.component.html',
  styleUrls: ['./director-dialog.component.scss']
})

export class DirectorDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)

    public data: {
      name: string;
      bio: string;
      birth: Date;
    }
  ) { }

  ngOnInit(): void {
  }
}