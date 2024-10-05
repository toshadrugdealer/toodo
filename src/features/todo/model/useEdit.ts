import { ITodo } from '@/shared/types/todo'
import { log } from 'console'
import { useEffect, useState } from 'react'

interface IUseEdit {
	todo: ITodo
	handleEditTodo: (id: number, newTitle: string) => void
	editingTodoId: number | null
	setEditingTodoId: (id: number | null) => void
}

export const useEdit = ({
	todo,
	handleEditTodo,
	editingTodoId,
	setEditingTodoId
}: IUseEdit) => {
	const [isEditing, setIsEditing] = useState<boolean>(false)
	const [newTitle, setNewTitle] = useState<string>(todo.title)

	useEffect(() => {
		if (isEditing && editingTodoId !== todo.id) {
			handleSave()
		}
	}, [editingTodoId, todo.id])

	const handleSave = () => {
		if (newTitle.trim() === '') {
			setNewTitle(todo.title)
		}
		if (newTitle && newTitle !== todo.title) {
			handleEditTodo(todo.id, newTitle)
		}
		setIsEditing(false)
		setEditingTodoId(null)
	}

	const handleStartEditing = () => {
		setEditingTodoId(todo.id)
		setTimeout(() => {
			setIsEditing(true)
		}, 0)
	}

	return {
		isEditing,
		setIsEditing,
		newTitle,
		setNewTitle,
		handleSave,
		handleStartEditing
	}
}
