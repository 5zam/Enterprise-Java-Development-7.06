// src/app/todo.model.ts


export class Todo {
    

  
    
    //constructor
    constructor(
      private _id: number,
      private _title: string,
      private _completed: boolean = false,
      //edit button
  
      private _postponed: boolean = false,
      private _editing: boolean = false
    ) {}

    //getter and setter
    public get id(): number {return this._id;}
    public set id(value: number) {this._id = value;}

    public get title(): string { return this._title;}
    public set title(value: string) {this._title = value;}

    public get completed(): boolean {return this._completed;}
    public set completed(value: boolean) {this._completed = value;}

    public get postponed(): boolean {return this._postponed;}
    public set postponed(value: boolean) {this._postponed = value;}

    public get editing(): boolean { return this._editing;}
    public set editing(value: boolean) {this._editing = value;}
  }
  