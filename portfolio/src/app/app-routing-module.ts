import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {} from '@angular/router'
import { IndexComponent } from './pages/index/index.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const app_routes: Routes = [
    {path:'', component:IndexComponent},
     {path:'projects',component:ProjectsComponent },
     {path:'**', pathMatch:'full', redirectTo:''}
];

@NgModule({
imports:[
    RouterModule.forRoot( app_routes )
],
exports:[
    RouterModule
]
})
export class AppRoutingModule {

}