import { Component } from '@angular/core';
import { HealthScoreComponent } from "../../components/health-score/health-score.component";
import { TableComponent } from "../../components/table/table.component";
import { InightsBlockComponent } from "../../components/inights-block/inights-block.component";
import { ChartsComponent } from "../../components/charts/charts.component";

@Component({
  selector: 'app-project-insights',
  standalone: true,
  imports: [HealthScoreComponent, TableComponent, InightsBlockComponent, ChartsComponent],
  templateUrl: './project-insights.component.html',
  styleUrl: './project-insights.component.css'
})
export class ProjectInsightsComponent {

}
