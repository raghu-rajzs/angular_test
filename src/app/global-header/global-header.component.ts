import { Component } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-global-header',
  standalone: true,
  imports: [NzMenuModule],
  templateUrl: './global-header.component.html',
  styleUrl: './global-header.component.css'
})
export class GlobalHeaderComponent {

}
