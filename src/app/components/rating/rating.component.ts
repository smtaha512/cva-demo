import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  ratings = [
    {
      star: 0,
      text: 'Worst'
    },
    {
      star: 1,
      text: 'Bad'
    },
    {
      star: 2,
      text: 'Satisfactory'
    },
    {
      star: 3,
      text: 'Good'
    },
    {
      star: 4,
      text: 'Bad'
    }
  ];
  selectedRating = this.ratings[0];
  isDisabled: boolean;
  constructor() {}

  ngOnInit() {}

  onStarClick(selectedRating: { star: number; text: string }) {
    console.log(selectedRating);
    this.selectedRating = selectedRating;
  }
}
