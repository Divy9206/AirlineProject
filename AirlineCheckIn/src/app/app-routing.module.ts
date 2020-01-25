import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeAppGuard } from './core/authorize-app.guard';
import { PassengerDetailsComponent } from './passenger/passenger-details/passenger-details.component';
import { PassengerListComponent } from './passenger/passenger-list/passenger-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'landing-page',
        pathMatch: 'full'
    },
    {
        path: 'landing-page',
        loadChildren: () => import('./core/core.module').then(mod => mod.CoreModule),
    },
    {
        path: 'passenger-details',
        component: PassengerDetailsComponent
    },
    {
        path: 'passenger-list',
        component: PassengerListComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
