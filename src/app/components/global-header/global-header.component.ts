import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'app-global-header',
  standalone: true,
  imports: [NzTabsModule, NzAvatarModule, NzBadgeModule, RouterLink],
  templateUrl: './global-header.component.html',
  styleUrl: './global-header.component.css',
})
export class GlobalHeaderComponent {}
