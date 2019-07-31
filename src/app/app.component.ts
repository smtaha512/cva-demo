import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly form = new FormGroup({
    rating: new FormControl()
  });

  toggleRatingField() {
    if (this.rating.disabled) {
      this.rating.enable();
    } else {
      this.rating.disable();
    }
  }

  get rating() {
    return this.form.get('rating');
  }
}
