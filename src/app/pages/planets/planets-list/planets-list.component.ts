import { Component } from '@angular/core';
import { Planet, Planets } from '../planets';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrl: './planets-list.component.scss'
})
export class PlanetsListComponent {
  planets: Planet[] = [];

  constructor(private planetsService: PlanetsService) { }

  ngOnInit(): void {
    this.planetsService.getPlanets().subscribe((data: Planets) => {
      this.planets = data.items;
    });
  }
}
