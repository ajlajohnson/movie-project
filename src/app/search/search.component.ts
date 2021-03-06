import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  genres: any;

  constructor(private router: Router, private service: SearchService) { }

  ngOnInit(): void {
    this.getGenres();
  }

  search = (form: NgForm) => {
    this.router.navigate(['mainpage'], {
      queryParams: {
        term: form.value.searchTerm,
      },
    });
  };

  getGenres = (): any => {
    this.service.getGenres().subscribe((response) => {
      console.log(response);
      this.genres = response.genres;
    });
  };

  setDiscoverQueryParams = (form: NgForm): any => {
    this.router.navigate(['mainpage'], {
      queryParams: {
        genre: form.value.genre,
        rating: form.value.rating,
      }
    })
  }


}
