import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

//Importando modelos
import {ActorsComponent} from './actors/actors.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
    {path:'', component:HomeComponent},
    {path:'actores', component:ActorsComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
