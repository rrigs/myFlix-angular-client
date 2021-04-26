
import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserLoginService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

/**
 * The user-login component allows existing users to enter their profile information to log in.
 */

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {

  @Input() userData = { Username: '', Password: '' };

  constructor(
    public fetchApiData: UserLoginService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    public router: Router ) { }

  ngOnInit(): void {
  }

  /**
   * Function responsible for sending the form inputs to the backend
   */
  userLogin(): void {
    this.fetchApiData.userLogin(this.userData).subscribe((response) => {
     this.dialogRef.close(); // This will close the modal upon success
     console.log(response);
     localStorage.setItem('user', response.user.Username);
     localStorage.setItem('token', response.token);
     this.snackBar.open('Logged in successfully!', 'OK', {
        duration: 2000
     });
     this.router.navigate(['movies']);
    }, (response) => {
      console.log(response);
      this.snackBar.open(response, 'OK', {
        duration: 2000
      });
    });
  }
}
