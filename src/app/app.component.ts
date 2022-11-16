import { Component, VERSION } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  message: string;
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  message$: Observable<string>;
  constructor(private store: Store<AppState>) {
    this.message$ = store.select('message');
  }
  spanishMessage() {
    this.store.dispatch({ type: 'Spanish' });
  }
  englishMessage() {
    this.store.dispatch({ type: 'English' });
  }
}
