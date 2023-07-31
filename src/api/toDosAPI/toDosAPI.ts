import { axiosInstance } from '../index';
import {
  TGetToDosResponse,
  TAddToDoRequest,
  TAddToDoResponse,
} from './toDosAPI.types';

export const toDosAPI = {
  getToDos: () => axiosInstance.get<TGetToDosResponse>('todos'),
  addToDo: (todoContent: TAddToDoRequest) =>
    axiosInstance.post<TAddToDoResponse>('todos', todoContent),
  deleteToDo: (id: number) => axiosInstance.delete(`todos/${id}`),
  editToDo: (id: number, todo: TAddToDoRequest) =>
    axiosInstance.put<TAddToDoResponse>(`todos/${id}`, todo),
};
