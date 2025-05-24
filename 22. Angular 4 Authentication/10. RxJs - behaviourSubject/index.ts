import './style.css';

import { of, map, Observable, Subject, BehaviorSubject } from 'rxjs';

// observable, subject, behaviorSubject

const observable = new Observable<string>((subcriber) => {
  subcriber.next('1');
  subcriber.next('2');
});

observable.subscribe((data) => console.log(data));
observable.subscribe((data) => console.log(data));

const subject = new Subject();

subject.subscribe((data) => console.log(data));
subject.subscribe((data) => console.log(data));
subject.subscribe((data) => console.log(data));

subject.next(Math.random());

const behaviorSubject = new BehaviorSubject(-1);

behaviorSubject.next(-2);
behaviorSubject.next(-3);

behaviorSubject.subscribe((data) => console.log(data));
behaviorSubject.subscribe((data) => console.log(data));

behaviorSubject.next(0);
behaviorSubject.next(1);
