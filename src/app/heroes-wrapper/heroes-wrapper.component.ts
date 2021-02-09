import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-wrapper',
  templateUrl: './heroes-wrapper.component.html',
  styleUrls: ['./heroes-wrapper.component.scss'],
})
export class HeroesWrapperComponent implements OnInit {
  title = 'Tour of Heroes';

  constructor() {}

  ngOnInit(): void {}
}
