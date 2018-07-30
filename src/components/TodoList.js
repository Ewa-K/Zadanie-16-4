import React from 'react';

import Todo from './Todo';

const TodoList = props => (
	<div>
		{this.props.list.map((el, index) => (
			<Todo
				key={index}
				name={el.text}
				clickHandler={() => this.props.removeTodoHandler(el.id)}
			/>
		))}
	</div>
)


export default TodoList;