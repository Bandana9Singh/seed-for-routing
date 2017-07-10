import { Router, RouterModule } from  '@angular/router';

import { HomeComponent } from './routing/home/home.component';
import { PhotosComponent } from './routing/photos/photos.component';
import { MessagesComponent } from './routing/messages/messages.component';
import { NotFoundComponent } from './routing/not-found/not-found.component';
import { PhotoDetailComponent } from './routing/photo-detail/photo-detail.component';

//This method returns a module, export module so we can add 
export const routing = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'photos', component: PhotosComponent },
    { path: 'photo-detail/:id', component: PhotoDetailComponent},
    { path: 'messages', component: MessagesComponent },
    { path: '**', component: NotFoundComponent },
]);