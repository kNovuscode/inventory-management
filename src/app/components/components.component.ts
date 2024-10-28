import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule, SidebarComponent, HeaderComponent],
  templateUrl: './components.component.html',
  styleUrl: './components.component.css'
})
export class AdminComponent {

}
