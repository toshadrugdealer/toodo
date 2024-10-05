import { ChangeEvent, FC } from 'react'
import {
	Checkbox,
	colors,
	IconButton,
	ListItem,
	ListItemText,
	TextField
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'
import { ITodo } from '@/shared/types/todo'
import { useEdit } from '../model/useEdit'

interface IItemProps {
	todo: ITodo
	handleToggleTodo: (id: number) => void
	handleDeleteTodo: (id: number) => void
	handleEditTodo: (id: number, newTitle: string) => void
	editingTodoId: number | null
	setEditingTodoId: (id: number | null) => void
}

const Item: FC<IItemProps> = ({
	todo,
	handleToggleTodo,
	handleDeleteTodo,
	handleEditTodo,
	editingTodoId,
	setEditingTodoId
}) => {
	const { isEditing, handleSave, handleStartEditing, newTitle, setNewTitle } =
		useEdit({
			todo,
			handleEditTodo,
			editingTodoId,
			setEditingTodoId
		})
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTitle(e.target.value)
	}

	return (
		<ListItem
			sx={{ padding: 0 }}
			secondaryAction={
				<>
					{isEditing ? (
						<IconButton edge='start' onClick={handleSave}>
							<SaveIcon />
						</IconButton>
					) : (
						<IconButton edge='start' onClick={handleStartEditing}>
							<EditIcon />
						</IconButton>
					)}
					<IconButton edge='end' onClick={() => handleDeleteTodo(todo.id)}>
						<DeleteIcon />
					</IconButton>
				</>
			}
		>
			<Checkbox
				checked={todo.completed}
				onChange={() => handleToggleTodo(todo.id)}
			/>
			{isEditing ? (
				<TextField
					sx={{ width: '70%' }}
					variant='standard'
					value={newTitle}
					onChange={handleInputChange}
					placeholder='Туду не должна быть пустой'
					slotProps={{
						htmlInput: {
							style: {
								padding: '0px'
							}
						}
					}}
				/>
			) : (
				<ListItemText
					primary={todo.title}
					primaryTypographyProps={{
						sx: {
							maxWidth: '80%',
							textOverflow: 'ellipsis',
							overflow: 'hidden'
						}
					}}
				/>
			)}
		</ListItem>
	)
}

export default Item
