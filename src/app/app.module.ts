import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer.component';
import { ContentComponent } from './modules/content/content.component';
import { PatologiaComponent } from './modules/patologia/patologia.component';
import { ComboComponent } from './modules/combo/combo.component';
import { UnidadesComponent } from './modules/unidades/unidades.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    PatologiaComponent,
    ComboComponent,
    UnidadesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
