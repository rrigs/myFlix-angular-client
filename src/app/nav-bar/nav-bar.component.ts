import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * The nav-bar component provides the main navigation for the app with links to view the profile page, return to the main movies view, or logout.
 */

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(
    public router: Router,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

/**
 * Logs the user out, removes their data from local storage, and returns them to the welcome view/login screen
 */
  logoutUser(): void {
    localStorage.clear();
    this.router.navigate(['welcome']);
    this.snackBar.open("You've been logged out", "OK", {
      duration: 2000,
    });
  }
}
