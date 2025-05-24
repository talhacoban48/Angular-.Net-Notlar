import { Observable, Subject } from 'rxjs';

const observable = new Observable<string>((subcriber) => {
  subcriber.next('1');
  subcriber.next('2');
  subcriber.next(Math.random().toString());
});

observable.subscribe((data) => console.log('observable 1: ' + data));
observable.subscribe((data) => console.log('observable 2: ' + data));

const subject = new Subject<number>();

subject.subscribe((data) => console.log(data));
subject.subscribe((data) => console.log(data));
subject.subscribe((data) => console.log(data));

subject.next(1);
subject.next(2);
subject.next(Math.random());

// service => user.subcribe()
