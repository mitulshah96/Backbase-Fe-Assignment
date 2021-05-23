import { AppLogoComponent } from './components/logo/logo.component';
import { AppFooterComponent } from './components/footer/footer.component';
import { NgModule } from '@angular/core';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { AppHeaderComponent } from './components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    CardHeaderComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppLogoComponent,
    FilterComponent,
  ],
  imports: [],
  exports: [
    CardHeaderComponent,
    AppHeaderComponent,
    AppFooterComponent,
    FilterComponent,
  ],
})
export class SharedModule {}
