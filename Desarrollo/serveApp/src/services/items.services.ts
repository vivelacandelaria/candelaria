import { Injectable } from '@angular/core'
@Injectable()
export class ItemsService{
    
  items=[
    {id:1, title:"titulo 1",descripcion:"descripcion 1"},
    {id:2, title:"titulo 2",descripcion:"descripcion 2"},
    {id:3, title:"titulo 3",descripcion:"descripcion 3"},
    {id:4, title:"titulo 4",descripcion:"descripcion 4"},
    {id:5, title:"titulo 5",descripcion:"descripcion 5"}
     ];
     public getItems(){
         return this.items;
     }
     public detailItems(id){
     return this.items.filter(
       function(item){
         return item.id==id
        })[0]||{id:null,title:null,descripcion:null};
     }
     public createItems(item){
         this.items.push(item);
       
    }
    public editItems(item){
      for(let i;i<this.items.length;i++){
        if(this.items[i].id==item.id)
        {

          this.items[i]=item;
        }
      }
       
    }
   
    /* public deleteitem(item){

     }*/
   
}
