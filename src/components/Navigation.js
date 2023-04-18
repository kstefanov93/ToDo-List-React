import { useState, useContext } from 'react';
import ApplicationContext from '../context/Context';

const Navigation = () => {
	const { items, setItems } = useContext(ApplicationContext);

	const removeAllItems = () => {
		setItems([]);
	};

	const removeCompletedItems = () => {
		const remainigItems = items.filter((item) => {
			if (!item.isCompleted) {
				return item;
			}
		});

		setItems(remainigItems);
	};

	return (
		<div className='navigation'>
			<ul>
				<li>
					<button onClick={removeCompletedItems}>Remove Completed Items</button>
				</li>

				<li>
					<button onClick={removeAllItems}>Remove All Items</button>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
