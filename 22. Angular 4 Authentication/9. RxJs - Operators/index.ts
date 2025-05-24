import { filter, first, from, last, map, of, pluck, take } from 'rxjs';

from(['toyota', 'audi']).subscribe((data) => console.log(data));
of('bmw', 'renault').subscribe((data) => console.log(data));

from([1, 4, 7, 9, 10, 12, 16])
  .pipe(last((n) => n % 11 == 0, 5))
  .subscribe({
    next: (data) => console.log(data),
    error: (err) => console.log(err.message),
  });

from([
  { name: 'samsung s23', price: 30000 },
  { name: 'samsung s24', price: 40000 },
  { name: 'samsung s25', price: 50000 },
])
  .pipe(
    filter((p) => p.price > 30000),
    map((p) => p.name)
  )
  .subscribe({
    next: (data) => console.log(data),
    error: (err) => console.log(err.message),
  });
