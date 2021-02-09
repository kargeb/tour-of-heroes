import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  pages = [
    { title: 'Tour of Heroes', route: '/tour/dashboard', progress: 100 },
    { title: 'Advanced Routing', route: '', progress: 0 },
    { title: 'Template-driven Forms', route: '', progress: 50 },
  ];

  progress: number = 30;

  constructor() {}

  ngOnInit(): void {}
}
