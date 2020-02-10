import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mdv-sixteen-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() title
  @Input() sidenav
  @Input() isAuthenticated

  constructor() { }

  ngOnInit() {
  }

}
