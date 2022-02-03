import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: `home`, loadChildren: () =>
      import('./@pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: `artist`, loadChildren: () =>
      import('./@pages/artist/artist.module').then(m => m.ArtistModule)
  },
  {
    path: `contact`, loadChildren: () =>
      import('./@pages/contact/contact.module').then(m => m.ContactModule)
  },
  
  {path:``, redirectTo: `home`, pathMatch: `full`}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
