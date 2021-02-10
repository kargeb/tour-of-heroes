import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  pages = [
    {
      title: 'Tour of Heroes - Basics',
      route: '/tour/dashboard',
      progress: 100,
    },
    { title: 'Advanced Routing', route: '/routing/heroes', progress: 5 },
    { title: 'Template-driven Form', route: '/form', progress: 100 },
  ];

  progress: number = 30;

  constructor() {}

  ngOnInit(): void {}
}
