import { TypeToDo } from '../../features/main/Main.types';

export type TGetToDosResponse = TypeToDo[];

export type TAddToDoRequest = Omit<TypeToDo, 'id'>;

export type TAddToDoResponse = TypeToDo;
