import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent implements OnInit {
  @Input() data: any
  @Output() commandEmitter = new EventEmitter()
  

  constructor() { }

  ngOnInit(): void {
  }

  action = (data: any) => {
    this.commandEmitter.emit(data)
  }

}
