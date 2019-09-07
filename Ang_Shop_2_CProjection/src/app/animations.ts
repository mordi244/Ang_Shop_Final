import { trigger, animate, style, group, animateChild, query, transition } from '@angular/animations';
import { AnimationTriggerMetadata } from '@angular/animations';

export const slideInAnimation: AnimationTriggerMetadata =
    trigger('routerTransition', [
        transition('* <=> *', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%' })
                , { optional: true }),
            group([
                query(':enter', [
                    animateChild(),
                    style({ opacity: 0, transform: 'translateX(-100%)' }),
                    animate('0.2s ease-in', style({ opacity: 1, transform: 'translateX(0%)' })),
                ], { optional: true}),
                query(':leave', [
                    animateChild(),
                    animate('0.5s ease-out', style({ opacity: 0, transform: 'translateY(100%)' }))
                ], { optional: true}),
            ])
        ]),
  ]
);
