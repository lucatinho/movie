import {Component, OnDestroy} from "@angular/core";
import {Observable, Subject, takeUntil} from "rxjs";

@Component({
  template: '',
})
export class AutoUnsubscribe implements OnDestroy {

  private _isSubscribed$ = new Subject<any>();
  public ngOnDestroy() {
    this._isSubscribed$.next(this);
    this._isSubscribed$.complete();
  }

  protected unsubsribeOnDestroy = (
    source: Observable<any>
  ): Observable<any> => {
    return source.pipe(takeUntil(this._isSubscribed$));
  };
}
