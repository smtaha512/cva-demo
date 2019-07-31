import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingComponent),
      multi: true
    }
  ]
})
export class RatingComponent implements OnInit, ControlValueAccessor {
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
      text: 'Best'
    }
  ];
  selectedRating: number;
  isDisabled: boolean;

  constructor() {}

  ngOnInit() {}

  onStarClick(selectedRating: { star: number; text: string }) {
    if (this.isDisabled) {
      return;
    }
    this.selectedRating = selectedRating.star;
    this.onChange(selectedRating.star);
    this.onTouched();
  }

  get ratingText(): string {
    const currentRating = this.ratings.find(rating => rating.star === this.selectedRating);
    return currentRating && currentRating.text;
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this.selectedRating = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = this.onTouched;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
