import { Injectable, Optional } from '@angular/core';

@Injectable()
export class CounterService {
  value = 0;

  constructor(@Optional() private startValue?: number) {
    if (startValue) {
      this.value = startValue;
    }
  }

  inc(): void {
    this.value++;
  }

  dec(): void {
    this.value--;
  }
}
