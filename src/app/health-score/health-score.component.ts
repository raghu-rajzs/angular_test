import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-health-score',
  standalone: true,
  imports: [NzCardModule, NzGridModule],
  templateUrl: './health-score.component.html',
  styleUrl: './health-score.component.css'
})
export class HealthScoreComponent {

}
