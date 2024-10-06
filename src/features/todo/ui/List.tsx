'use client'
import { List as MUIList } from '@mui/material'
import CreateForm from './CreateForm'
import Item from './Item'
import styles from '@/shared/styles/List.module.css'
import { useTodos } from '../model/useTodos'

const List = () => {
	const {
		todos,
		handleAddTodo,
		handleToggleTodo,
		handleDeleteTodo,
		handleEditTodo,
		editingTodoId,
		setEditingTodoId
	} = useTodos()
	return (
		<div className={styles.wrapper}>
			<CreateForm handleAddTodo={handleAddTodo} />
			<MUIList sx={{ padding: 0 }}>
				{todos.map(todo => (
					<Item
						key={todo.id}
						todo={todo}
						handleToggleTodo={handleToggleTodo}
						handleDeleteTodo={handleDeleteTodo}
						handleEditTodo={handleEditTodo}
						editingTodoId={editingTodoId}
						setEditingTodoId={setEditingTodoId}
					/>
				))}
			</MUIList>
		</div>
	)
}

export default List
