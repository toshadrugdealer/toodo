import { ITodo } from '@/shared/types/todo'

const LS_KEY = 'todos1'

const getTodosApi = (): ITodo[] => {
	const storedTodos = localStorage.getItem(LS_KEY)
	return storedTodos ? JSON.parse(storedTodos) : []
}

const saveTodosApi = (todos: ITodo[]) => {
	localStorage.setItem(LS_KEY, JSON.stringify(todos))
}

export const todoApi = {
	getTodosApi,
	saveTodosApi
}
