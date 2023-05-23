import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SingleLinkCardComponent } from './components/single-link-card/single-link-card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MateriasComponent } from './pages/materias/materias.component';
import { DocentesComponent } from './pages/docentes/docentes.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomeComponent,
    AdminComponent,
    AlumnosComponent,
    PageNotFoundComponent,
    SingleLinkCardComponent,
    NavBarComponent,
    SidebarComponent,
    MateriasComponent,
    DocentesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
