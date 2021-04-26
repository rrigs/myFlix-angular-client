import { Component, OnInit } from '@angular/core';
import { 
  GetUserService,
  GetAllMoviesService,
  RemoveFavoriteMovieService,
  DeleteUserService
} from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { UpdateProfileComponent } from '../update-profile/update-profile.component';
import { Router } from '@angular/router';

/**
 * The user-profile component displays the user's profile information with options to edit/delete, and a list of favorite movies that they can view or remove.
 */
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: any = {};
  movies: any = [];
  favorites: any = [];

  constructor(
    public fetchApiData: GetUserService,
    public fetchApiData2: GetAllMoviesService,
    public fetchApiData3: RemoveFavoriteMovieService,
    public fetchApiData4: DeleteUserService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public router: Router
  ) { }

/**
 * Runs the getUser() function on initialization
 */
  ngOnInit(): void {
    this.getUser();
  }

/**
 * Gets the user object from the database and calls the getMovies() function 
 */
  getUser(): void {
    this.fetchApiData.getUser().subscribe((resp: any) => {
      this.user = resp;
      this.getMovies();
    });
  }

/**
 * Returns a list of all movies from the database and calls the filterFavorites() function
 */
  getMovies(): void {
    this.fetchApiData2.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      this.filterFavorites();
    });
  }

  /**
   * Filters the list of all movies into an array that matches user favorites
   * @returns {array}
   */
  filterFavorites(): void {
    this.favorites = this.movies.filter((movie: any) =>
      this.user.FavoriteMovies.includes(movie._id)
    );
    return this.favorites;
  }

/**
 * Removes movie from user's favorites
 * @param id 
 * @param title 
 */
  removeFromFavorites(id: string, title: string): void {
    this.fetchApiData3.deleteFavoriteMovie(id).subscribe(() => {
      this.snackBar.open(
        `${title} has been removed from your Favorites`, 'OK', {
          duration: 2000,
        }
      );
      setTimeout(function() {
        window.location.reload();
      }, 1000);
    });
  }

/**
 * Opens the dialog box where the user can update their information
 */
  openUpdateProfileDialog(): void {
    this.dialog.open(UpdateProfileComponent, {
      width: '280px',
    });
  }

/**
 * Asks if user is sure about deleting profile, will reroute to welcome page if profile deletion is confirmed.
 */
  deleteProfile(): void {
    let ok = confirm("Are you sure you want to delete your profile?\nThis action cannot be undone.");
    if (ok) {
    this.fetchApiData4.deleteUser().subscribe(() => {
      console.log('Profile Deleted');
      localStorage.clear();
      this.router.navigate(['welcome']); // routes to the 'welcome' view
      this.snackBar.open('Profile Deleted', 'OK', {
        duration: 2000,
      });
    });
    } else {
      window.location.reload();
    }
  }
}
