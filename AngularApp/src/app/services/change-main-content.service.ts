import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class ChangeMainContentService {

  private ComponentName = new Subject<string>();

  constructor() { }

  NavigateTo(componentName: string)
  {
    this.ComponentName.next(componentName);    
  }

  GetNameToNavigate() : Observable<string>
  {
    return this.ComponentName.asObservable();
  }
}