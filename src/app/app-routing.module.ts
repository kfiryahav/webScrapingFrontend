import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScraperComponent } from './components/scraper/scraper.component';

const routes: Routes = [
  { path: '', redirectTo: '/scraper', pathMatch: 'full' }, // Redirect to the scraper component
  { path: 'scraper', component: ScraperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
