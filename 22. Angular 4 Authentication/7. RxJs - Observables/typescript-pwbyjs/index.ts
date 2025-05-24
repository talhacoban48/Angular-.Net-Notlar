import { Observable } from 'rxjs';

const observable = new Observable<string>((subcriber) => {
  subcriber.next('1');
  subcriber.next('2');

  setTimeout(() => {
    subcriber.next('3');
  }, 1000);

  // subcriber.complete();
});

const observer = {
  next: (value) => console.log(value),
  error: (err) => console.log(err),
  complete: () => console.log('bitti'),
};
// observable.subscribe(observer);

observable.subscribe((data) => console.log('observable 1: ' + data));
observable.subscribe((data) => console.log('observable 2: ' + data));
