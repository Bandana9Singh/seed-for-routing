import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { MessagesComponent } from './messages/messages.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent,
    PhotosComponent,
    MessagesComponent,
    NotFoundComponent,
    PhotoDetailComponent
  ],
  exports: [
    HomeComponent,
    PhotosComponent,
    MessagesComponent,
    NotFoundComponent,
    PhotoDetailComponent
  ]
})
export class RoutingModule { }
