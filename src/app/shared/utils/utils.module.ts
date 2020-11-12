import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CounterService } from './counter.service';

@NgModule({
  declarations: [],
  imports: [],
  providers: []
})
export class UtilsModule {
  constructor(@Optional() @SkipSelf() parentModule?: UtilsModule) {
    if (parentModule) {
      throw new Error(
        'UtilsModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(startValue: number = 0): ModuleWithProviders<UtilsModule> {
    return {
      ngModule: UtilsModule,
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
