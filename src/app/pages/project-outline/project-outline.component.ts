import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChartsComponent } from "../../components/charts/charts.component";

@Component({
  selector: 'app-project-outline',
  standalone: true,
  imports: [RouterOutlet, ChartsComponent],
  templateUrl: './project-outline.component.html',
  styleUrl: './project-outline.component.css'
})
export class ProjectOutlineComponent {

}
