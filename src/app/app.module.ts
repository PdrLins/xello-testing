import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowroomComponent } from './components/showroom/showroom.component';
import { WellcomeComponent } from './components/wellcome/wellcome.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { TooltipComponent } from './directives/tooltip/tooltip.component';

// import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap/tooltip/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    ShowroomComponent,
    WellcomeComponent,
    TooltipDirective,
    TooltipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
