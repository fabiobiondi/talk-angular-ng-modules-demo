import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class CounterService {
  value = 0;

  inc(): void {
    this.value++;
  }

  dec(): void {
    this.value--;
  }
}
