import { Component, OnInit, Input } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { UserRegistrationService } from "../fetch-api-data.service";
import { MatSnackBar } from "@angular/material/snack-bar";

/**
 * The user-registration component allows new users to create a profile.
 */

@Component({
  selector: "app-user-registration-form",
  templateUrl: "./user-registration-form.component.html",
  styleUrls: ["./user-registration-form.component.scss"],
})
export class UserRegistrationFormComponent implements OnInit {
  @Input() userData = { Username: "", Password: "", Email: "", Birthday: "" };

  constructor(
    public fetchApiData: UserRegistrationService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  /**
   * Function responsible for sending the form inputs to the backend
   */
  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe(
      (response) => {
        this.dialogRef.close(); // closes the modal upon success
        console.log(response);
        this.snackBar.open("User registered succesfully", "OK", {
          duration: 3000,
          verticalPosition: "top",
        });
      },
      (response) => {
        console.log(response);
        this.snackBar.open(response, "OK", {
          duration: 3000,
          verticalPosition: "top",
        });
      }
    );
  }
}