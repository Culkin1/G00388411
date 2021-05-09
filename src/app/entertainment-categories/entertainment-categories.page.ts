import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entertainment-categories',
  templateUrl: './entertainment-categories.page.html',
  styleUrls: ['./entertainment-categories.page.scss'],
})
export class EntertainmentCategoriesPage implements OnInit {
   categories: string[] = ["Film","Television","Video games","Music","Online"];
  constructor() { }

  ngOnInit() {
  }

}
