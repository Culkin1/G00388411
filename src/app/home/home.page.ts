import { Component, OnInit } from '@angular/core';
import {NewsService} from '../Services/news.service';
import{Storage} from '@ionic/storage'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  myStatus:string;
NewsData:any = [];
  constructor(private newsService:NewsService,private storage:Storage) {}

  ngOnInit(){
    this.storage.get('status')
    .then((data)=>{
      this.myStatus = data;
    })
    .catch()
    this.newsService.GetNewsData().subscribe(
     (data)=>{
        this.NewsData= data.Search;
        console.log(this.NewsData);

      }
    );
  }
}
