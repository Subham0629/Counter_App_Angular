import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [
    `
    .counter {
      display: flex;
      align-items: center;
      margin:auto;
    }
    button {
      margin: 0 5px;
    }
    `,
  ],
})
export class CounterComponent {
  @Input() count: number = 5;

  increment() {
    this.count++;
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }
}
