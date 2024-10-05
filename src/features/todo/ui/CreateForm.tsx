import { FC, FormEvent, useState } from 'react'
import { TextField, Button, Box } from '@mui/material'

interface ICreateFormProps {
	handleAddTodo: (title: string) => void
}

const CreateForm: FC<ICreateFormProps> = ({ handleAddTodo }) => {
	const [todoTitle, setTodoTitle] = useState<string>('')
	const [error, setError] = useState<string>('')

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		if (todoTitle.trim()) {
			handleAddTodo(todoTitle.trim())
			setTodoTitle('')
			setError('')
		} else {
			setError('Туду не должно быть пустым')
		}
	}
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTodoTitle(e.target.value)
		if (error) {
			setError('')
		}
	}

	return (
		<>
			<Box
				component='form'
				onSubmit={handleSubmit}
				sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}
			>
				<TextField
					label='Новая туду'
					aria-label='Новая туду'
					variant='outlined'
					value={todoTitle}
					onChange={handleInputChange}
					fullWidth
					error={Boolean(error)}
					helperText={error}
				/>
				<Button type='submit' size='small' variant='contained' color='primary'>
					Добавить туду
				</Button>
			</Box>
		</>
	)
}

export default CreateForm
