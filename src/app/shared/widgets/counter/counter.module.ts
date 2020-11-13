import { ModuleWithProviders, NgModule } from '@angular/core';
import { CounterService } from './counter.service';
import { CounterComponent } from './counter.component';

@NgModule({
  declarations: [CounterComponent],
  exports: [CounterComponent],
  providers: []
})
export class CounterModule {

  static forRoot(startValue: number = 0): ModuleWithProviders<CounterModule> {
    return {
      ngModule: CounterModule,
      providers: [
        {
          provide: CounterService, useFactory: () => {
            return new CounterService(startValue);
          }
        }
      ]
    };
  }
}
