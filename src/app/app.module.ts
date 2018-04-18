import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EquipamentoComponent } from './equipamento/equipamento.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'equipamento', component: EquipamentoComponent },
  //{ path: 'watch', loadChildren: 'app/watch/watch.module#WatchModule', canActivate: [AuthGuard] },
  //{ path: 'live', loadChildren: 'app/live/live.module#LiveModule', canActivate: [AuthGuard] },
  //{ path: 'playlists', loadChildren: 'app/playlists/playlists.module#PlaylistsModule', canActivate: [AuthGuard] },
  { path: "", component: HomeComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, EquipamentoComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {}
