import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'wikidata-panel';
  searchText: string = '';
  entityData: any;

  constructor(private apiService: ApiService, private router: Router){}
  ngOnInit(): void {}

  goToUrl(path:any){
    this.router.navigate(path);
  }
  
  // callApi(){
  //   this.entityData = null;
  //   this.apiService.getResults(this.searchText).subscribe(response => {
  //     this.entityData = response;
  //     console.log(response);
  //   })
  // }
}

