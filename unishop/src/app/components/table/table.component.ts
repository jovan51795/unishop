import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Product } from '../../core/models/products-model/product';

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

  
  tableRowData =(data: any): any[] => {
    let resultArray: any[] = []
    for(let col of this.columns){
      if(Object.keys(data).includes(col.key)){
        if(col.badge) {
          resultArray.push({val: data[col.key], key: col.key})
        }else {
          resultArray.push({val: data[col.key]})
        }
      }
    }
    return resultArray;
  }


  orderBy = (e: any, data: any) => {
    this.headerBtnEmitter.emit(data)
  }

  actions = (event: any, type: any) => {
    this.actionEmitter.emit({...event, type})
  }

}
