import { Component, OnInit } from "@angular/core";
import {
  GetAllMoviesService,
  AddFavoriteMovieService,
} from "../fetch-api-data.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { DirectorDialogComponent } from "../director-dialog/director-dialog.component";
import { GenreDialogComponent } from "../genre-dialog/genre-dialog.component";
import { DetailsDialogComponent } from "../details-dialog/details-dialog.component";

/**
 * The movie-card component is the main view of the app.
 */
@Component({
  selector: "app-movie-card",
  templateUrl: "./movie-card.component.html",
  styleUrls: ["./movie-card.component.scss"],
})
export class MovieCardComponent {
  movies: any[] = [];
  constructor(
    public fetchApiData: GetAllMoviesService,
    public fetchApiData2: AddFavoriteMovieService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}

  /**
   * getMovies() function is run on initialization
   */
  ngOnInit(): void {
    this.getMovies();
  }

  /**
   * Gets a list of all movies
   */
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  /**
   * Adds the movie to the user's list of favorites
   * @param id 
   * @param title 
   */
  addFavorite(id: string, title: string): void {
    this.fetchApiData2.addFavoriteMovie(id).subscribe(() => {
      this.snackBar.open(`${title} has been added to your favorites!`, "OK", {
        duration: 2000,
      });
    });
  }

  /**
   * Opens a dialog box with details about the director
   * @param name 
   * @param bio 
   * @param birth
   */
  showDirectorDialog(name: string, bio: string, birth: Date): void {
    this.dialog.open(DirectorDialogComponent, {
      data: { name, bio, birth },
      width: "350px",
    });
  }

  /**
   * Opens a dialog box with details about the genre
   * @param name 
   * @param description 
   */
  showGenreDialog(name: string, description: string): void {
    this.dialog.open(GenreDialogComponent, {
      data: { name, description },
      width: "350px",
    });
  }

  /**
   * Opens a dialog box with all details about the movie
   * @param title 
   * @param imagepath 
   * @param description 
   * @param director 
   * @param genre 
   */
  showDetailsDialog(
    title: string,
    imagepath: string,
    description: string,
    director: string,
    genre: string
  ): void {
    this.dialog.open(DetailsDialogComponent, {
      data: { title, imagepath, description, director, genre },
      width: "350px",
    });
  }
}
