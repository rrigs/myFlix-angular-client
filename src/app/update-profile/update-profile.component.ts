import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditUserService } from '../fetch-api-data.service';
import { MatDialogRef } from '@angular/material/dialog';

/**
 * The update-profile component allows users to edit their profile information.
 */

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  constructor(
    public snackBar: MatSnackBar,
    public fetchApiData: EditUserService,
    public dialogRef: MatDialogRef<UpdateProfileComponent>
  ) { }

  ngOnInit(): void {
  }

/**
 * Sends updated user information to the database and refreshes the page so the user can view updated information automatically
 */
  editUser(): void {
    this.fetchApiData.editUser(this.userData).subscribe((response) => {
      this.dialogRef.close(); // closes the modal on success
      localStorage.setItem('user', response.Username);
      this.snackBar.open('Profile updated successfully!', 'OK', {
        duration: 2000,
      });
    }, (response) => {
      console.log(response);
      this.snackBar.open(response, 'OK', {
        duration: 2000,
      });
    });
    setTimeout(function() {
      window.location.reload();
    }, 1250);
  }
}