import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { GlobalHeaderComponent } from '../global-header/global-header.component';
import { TableComponent } from '../table/table.component';
import { HealthScoreComponent } from '../health-score/health-score.component';
import { InightsBlockComponent } from '../inights-block/inights-block.component';
import { RouterLink } from '@angular/router';
import { ChartsComponent } from "../charts/charts.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NzMenuModule,
    NzLayoutModule,
    NzIconModule,
    GlobalHeaderComponent,
    TableComponent,
    HealthScoreComponent,
    InightsBlockComponent,
    RouterLink,
    ChartsComponent
],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {}
