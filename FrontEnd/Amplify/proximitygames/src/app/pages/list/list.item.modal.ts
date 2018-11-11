import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToDoItem, ToDoList } from '../../classes/item.class';

@Component({
  selector: 'item-modal',
  templateUrl: 'list.item.modal.html',
})
export class ListItemModal implements OnInit {

  itemList: ToDoList;
  editItem: ToDoItem;
  user: string;
  item: ToDoItem;

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    /*
      If you pass in an 'editItem' property, then you create a copy to store changes to the existing item
      so that the original is not modified unless the user saves.
    */
    this.item = this.editItem ? Object.assign({}, this.editItem) : new ToDoItem({});
  }

  save() {
    console.log('modal saved');
    console.log(this.itemList);
    //   this.modalController.dismiss({
    //   itemList: this.itemList,
    //   newItem: !this.editItem ? this.item : null,
    //   editItem: this.editItem ? this.item : null
    // });
    this.closeModal(
      {itemList: this.itemList,
     newItem: !this.editItem ? this.item : null,
     editItem: this.editItem ? this.item : null
      }
    );
  }

  cancel() {
    this.modalController.dismiss({itemList: this.itemList});
  }

  closeModal(userProvidedData) {
    console.log('modal dismissing');
    this.modalController.dismiss(userProvidedData);
  }
}
