import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * The details-dialog component shows all details about a specific movie including the title, movie poster image, synopsis, director, and genre.
 */

@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.scss']
})
export class DetailsDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      imagepath: string;
      description: string;
      director: string;
      genre: string;
    }
  ) { }

  ngOnInit(): void {
  }
}
