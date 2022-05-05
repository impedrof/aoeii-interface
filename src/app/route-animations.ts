import {
  query,
  style,
  transition,
  trigger,
  animate,
} from '@angular/animations';

export const fader = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter', [style({ opacity: 0, position: 'absolute' })]),
    query(':leave', [
      style({ opacity: 1 }),
      animate('100ms ease', style({ opacity: 0, position: 'absolute' })),
    ]),
    query(':enter', [
      style({ opacity: 0 }),
      animate('100ms ease', style({ opacity: 1, position: 'relative' })),
    ]),
  ]),
]);
