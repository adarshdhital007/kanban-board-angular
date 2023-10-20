import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { InProgressComponent } from './inprogress/inprogress.component';
import { DoneComponent } from './done/done.component';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    InProgressComponent,
    DoneComponent,
    AddTaskFormComponent,
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
