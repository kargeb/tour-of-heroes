import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  pages = [
    { title: 'Tour of Heroes', route: '/tour/dashboard' },
    { title: 'Advanced Routing', route: '' },
    { title: 'Template-driven Forms', route: '' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
