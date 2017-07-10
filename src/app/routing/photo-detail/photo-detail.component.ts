import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit, OnDestroy {
  id;
  subscription;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    /*this._route.params.subscribe(params=>{
      this.id = +params["id"];  
    });*/
    this._route = this._route.snapshot.params["id"];
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
