import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './counter.actions';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <p>Counter Value: {{ count$ | async }}</p>
      <button type="button" (click)="handleIncrement()">Increment</button>
      <button type="button" (click)="handleDecrement()">Decrement</button>
      <button type="button" (click)="handleReset()">RESET</button>
    </div>
  `,
  styles: [],
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    // let's get the counter's intial data on load from the store
    this.count$ = this.store.select('count');
    console.log(this.count$); // this is observable
    //we use the async pipe for data binding
    // so we don't need to subscribe or unsubscribe
  }

  ngOnInit(): void {}

  handleIncrement() {
    // dispatch an increment action
    // the compoent that wants to dispatch an action should connect with store first
    this.store.dispatch(increment());
  }

  handleDecrement() {
    // dispatch an decrement action
    this.store.dispatch(decrement());
  }

  handleReset() {
    // dispatch an reset action
    this.store.dispatch(reset());
  }
}
