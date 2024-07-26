import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'myApp';

  constructor( ) {
  }


  @ViewChild('dynamicTable', { read: ViewContainerRef})
  public  viewRef!: ViewContainerRef
  public componentRef!: ComponentRef<TableComponent>
  

  addComponent() {
    this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(TableComponent);
  }

  deleteComponent() {
    this.viewRef.clear();
  }

}
