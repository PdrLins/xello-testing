import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowroomComponent } from './showroom/showroom.component';
import { WellcomeComponent } from './wellcome/wellcome.component';

// import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap/tooltip/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    ShowroomComponent,
    WellcomeComponent
    // NgbTooltip
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
