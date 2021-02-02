import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortafolioComponent } from './portafolio/portafolio.component';

const APP_ROUTES: Routes = [
    { path: 'about', component: AboutComponent},
    { path: 'portafolio', component: PortafolioComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'about'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);