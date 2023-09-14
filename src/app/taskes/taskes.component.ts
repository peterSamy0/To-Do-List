import { Component, ElementRef, ViewChild} from '@angular/core';
import { faPlus, faList, faCheckDouble, faBriefcase, faX, faForward, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-taskes',
  templateUrl: './taskes.component.html',
  styleUrls: ['./taskes.component.css']
})

export class TaskesComponent {
  faPlus = faPlus;
  faCancel = faX;
  faNext = faForward;
  faTrash = faTrash;

  showForm: boolean = false;
  // property trello the has all the lists
  trello: Array<any> = [ 
    {
      listname: 'To Do',
      listIcons: {listIcon: faList, faPlus: faPlus},
      showForm: false,
      tasks: []
    },
    {
      listname: 'Doing',
      listIcons: {listIcon: faBriefcase, faPlus: faPlus},
      showForm: false,
      tasks: []
    },
    {
      listname: 'Done',
      listIcons: {listIcon: faCheckDouble, faPlus: faPlus},
      showForm: false,
      tasks: []
    }
  ]
 

  addFuc(list: any, text: any) {
    const task = text.value; // the task name from input
    if (task.trim() !== '') {
      list.tasks.push(task); // Add the new task to the 'tasks' array
      text.value = ''; // Clear the textarea
      list.showForm = false; // close form 
    }
  }

  nextFun(list: any, task: any) {
    const currentIndex = this.trello.findIndex((listItem: any) => listItem.listname === list.listname); // find the task index in lists
    if (currentIndex !== -1) {
        const nextList = this.trello[currentIndex + 1]; // get the next list
        nextList.tasks.push(task); // add the 
        list.tasks = list.tasks.filter((taskOfObj: any) => taskOfObj !== task); // delete the task from old list 
    }
  }

  delFun(list: any, task: any){
    if(confirm("Are you sure to delete "+ task)) {
      list.tasks = list.tasks.filter((taskOfObj: any) => taskOfObj !== task);
    }
  }
}