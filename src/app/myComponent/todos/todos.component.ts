import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodoComponent {
     todos:Todo[]
     constructor() {
      this.todos = [
        {
          sno:1,
          title:"new one",
          desc:"hello world!!",
          active:true
        },
        {
          sno:2,
          title:"new two",
          desc:"hello man!!",
          active:true
        },
        {
          sno:3,
          title:"new three",
          desc:"hello boy!!",
          active:true
        } 
    ]
     }
     DeleteTodo(todo:Todo){
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1)
      console.log(todo)
     }
}
