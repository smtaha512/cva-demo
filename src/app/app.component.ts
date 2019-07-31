import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly form = new FormGroup({
    rating: new FormControl()
  });

  onRatingChange(event) {
    this.rating.setValue(event);
  }

  get rating() {
    return this.form.get('rating');
  }
}
