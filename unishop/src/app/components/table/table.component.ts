import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
@Input() data: Product[] | undefined
@Input() columns: string[] | undefined
  constructor() { }

  ngOnInit(): void {
  }

  tableRowData =(data: any): string[] => {
    console.log(this.columns, "the columns")
    let resultArray: string[] = []
    
    
    for(let col in this.columns){
      if(Object.keys(data).includes(this.columns[parseInt(col)])){
        console.log(resultArray.push(data[this.columns[parseInt(col)]]), "lets try")
        
      }
    }


    return resultArray;
  }

}
