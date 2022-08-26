import { Component, EventEmitter, Input, OnInit, Output, Renderer2} from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
@Input() data: Product[] | undefined;
@Input() columns: any;
@Input() buttons: any;
@Output() headerBtnEmitter = new EventEmitter()
@Output() actionEmitter = new EventEmitter()

dropdownIcon = false
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  getDataLength() {
    return !this.data?.length;
  }

  
  tableRowData =(data: any): string[] => {
    let resultArray: string[] = []
    for(let col of this.columns){
      if(Object.keys(data).includes(col.key)){
        resultArray.push(data[col.key])
      }
    }
    console.log(resultArray)
    return resultArray;
  }


  orderBy = (e: any, data: any) => {
    this.headerBtnEmitter.emit(data)
  }

  actions = (event: any, type: any) => {
    this.actionEmitter.emit({...event, type})
  }

}
