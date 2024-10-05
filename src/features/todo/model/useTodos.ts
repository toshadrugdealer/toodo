import { ITodo } from '@/shared/types/todo'
import { useState } from 'react'

export const useTodos = () => {
	const [todos, setTodos] = useState<ITodo[]>([])
	const [editingTodoId, setEditingTodoId] = useState<number | null>(null)

	const handleAddTodo = (title: string) => {
		const newTodo = { id: Date.now(), title, completed: false }
		const updatedTodos = [...todos, newTodo]
		setTodos(updatedTodos)
	}

	const handleToggleTodo = (id: number) => {
		const updatedTodos = todos.map(todo =>
			todo.id === id ? { ...todo, completed: !todo.completed } : todo
		)
		setTodos(updatedTodos)
	}

	const handleDeleteTodo = (id: number) => {
		const updatedTodos = todos.filter(todo => todo.id !== id)
		setTodos(updatedTodos)
	}

	const handleEditTodo = (id: number, newTitle: string) => {
		const updatedTodos = todos.map(todo =>
			todo.id === id ? { ...todo, title: newTitle } : todo
		)
		setTodos(updatedTodos)
		setEditingTodoId(null)
	}

	return {
		todos,
		handleAddTodo,
		handleToggleTodo,
		handleDeleteTodo,
		handleEditTodo,
		editingTodoId,
		setEditingTodoId
	}
}
