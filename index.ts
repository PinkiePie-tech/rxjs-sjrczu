import { BehaviorSubject, Observable, of, timer } from 'rxjs';
import './style.css';

// Bienvenue dans ce tuto RxJs, nous allons voir aujourd'hui RxJs, étonnant non ?
// Pour ce faire, pas de front, pas de html, du typescript comme on aime en voir
// C'est là, la beauté de ce tuto, pas de chichi, que du bon gros code de dev back :D

// La première étape est simple, créer un observable contenant une valeur et l'affiché dans un console.log().

// La deuxième étape est moins simple, créer un timer et afficher "coucou" dans un console.log() à la fin de ce timer.

// La troisième étape est encore moins simple, créer un interval et afficher "j'ai dit x fois "coucou"" dans un console.log(), x étant le nombre de fois que l'interval à été provoqué.

// La quatrième étape est encore encore moins simple, créer un interval et afficher "j'ai dit x fois "coucou"" dans un console.log() à la fin de ce timer, x étant le nombre de fois que l'interval à été provoqué et arrêté de l'afficher à partir de 10 itérations.

// La cinquième étape est encore encore encore moins simple, créer un timer qui au bout de 5s créer un interval et affiche "j'ai dit x fois "coucou"" dans un console.log(), x étant le nombre de fois que l'interval à été provoqué et arrêté de l'afficher à partir de 10 itérations.

// La sixième étape est encore encore encore encore moins simple, créer un Observable contenant la valeur "5" et l'affiché au bout de 5s.

// La septième étape est encore encore encore encore encore moins simple, créer un BehaviorSubject avec pour valeur par défaut 5, l'affiché, et toutes les 2s, ajouter 15 à cette valeur.

// Passage à un autre type d'exercice

export interface IValue {
  id: number;
  name: string;
}

let obs$ = new BehaviorSubject<number>(0);
let value$: Observable<IValue[]> = of([
  {
    id: 0,
    name: 'Annette',
  },
  {
    id: 1,
    name: 'Maurice',
  },
  {
    id: 2,
    name: 'Josette',
  },
  {
    id: 3,
    name: 'Bernard',
  },
  {
    id: 5,
    name: 'Joanne',
  },
  {
    id: 7,
    name: 'Charles-henry',
  },
  {
    id: 8,
    name: 'Hector',
  },
  {
    id: 11,
    name: 'Marcel',
  },
  {
    id: 15,
    name: 'Jean-pierre',
  },
]);

timer(2000).subscribe(() => obs$.next(8));
timer(4000).subscribe(() => obs$.next(0));
timer(3000).subscribe(() => obs$.next(2));
timer(1000).subscribe(() => obs$.next(1));

/**
 * Nous avons ici un BehaviorSubject et un source de données, ses variables vont nous servir pour la suite de nos exercices, nous allons modifier les valeurs dans le BehaviorSubject à plusieurs reprises
 */

// => Afficher la valeur du BehaviorSubject

// => Afficher une liste des noms présent dans value$

// => Créer un interval qui se déclenche après 5 seconde et ensuite, à chaque itération, rajoute la valeur dans le BehaviorSubject

// => Afficher le nom dans l'id en fonction de la valeur du BehaviorSubject

// => Créer un évènement toutes les secondes qui, à chaque itération, affiche le nom si il est présent, dans le cas contraire, ne rien afficher
