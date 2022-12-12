import React from "react";
import { useContext } from "react";
// importamos los componentes
import { TodoCounter } from "./components/TodoCounter/TodoCounter.jsx";
import { TodoSearch } from "./components/TodoSearch/TodoSearch.jsx";
import { TodoList } from "./components/TodoList/TodoList.jsx";
import { TodoItem } from "./components/TodoItem/TodoItem.jsx";
import { CreateTodoButtom } from "./components/CreateTodoButtom/CreateTodoButtom";
import { TodoInfo } from "./components/TodoInfo/TodoInfo.jsx";
import { TodoListContainer } from "./components/TodoListContainer/TodoListContainer.jsx";
import { Modal } from "./components/Modal/Modal.jsx";
import { Form } from "./components/Form/Form.jsx";
import { TodoHeader } from "./components/TodoHeader/TodoHeader.jsx";
import { TodoMessage } from "./components/TodoMessage/TodoMessage.jsx";
import { TodoContext } from "./utils/todoContext";
import { ChangeAlert } from "./components/ChangeAlert/ChangeAlert.jsx";
import "./styles/App.css";

function App() {
	const {
		searchValue,
		setSearchValue,
		totalTodos,
		completedTodos,
		error,
		loading,
		searchedTodos,
		completeTodo,
		deleteTodo,
		openModal,
		setOpenModal,
		sincronizeTodos
	} = useContext(TodoContext);

	return (
		<>
			<TodoInfo>
				<TodoCounter />
				<TodoSearch
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					loading={loading}
				/>
			</TodoInfo>
			<TodoListContainer>
				<TodoHeader>
					<TodoMessage
						totalTodos={totalTodos}
						completedTodos={completedTodos}
					/>
				</TodoHeader>
				<TodoList
					error={error}
					loading={loading}
					totalTodos={totalTodos}
					searchedTodos={searchedTodos}
					searchText={searchValue}
					onError={() => <p>Error</p>}
					onLoading={() => <p>Loading...</p>}
					onEmptyTodos={() => <p>¡Crea tu primer TODO!</p>}
					onEmptySearch={(searchText) => (
						<p>No hay coincidencias para {searchText}</p>
					)}
				// render prop
				/* render={(todo) => (
					<TodoItem
						error={error}
						loading={loading}
						key={todo.id}
						text={todo.text}
						complete={todo.complete}
						onComplete={() => completeTodo(todo.id)}
						onDelete={() => deleteTodo(todo.id)}
					/>
				)} */
				>
					{(todo) => ( // render function
						<TodoItem
							error={error}
							loading={loading}
							key={todo.id}
							text={todo.text}
							complete={todo.complete}
							onComplete={() => completeTodo(todo.id)}
							onDelete={() => deleteTodo(todo.id)}
						/>
					)}
				</TodoList>
				{!!openModal && (
					<Modal>
						<Form></Form>
					</Modal>
				)}

				<CreateTodoButtom setOpenModal={setOpenModal} />
				<ChangeAlert 
					sincronize={sincronizeTodos}
				/>
			</TodoListContainer>
		</>
	);
}
export default App;
