import { useState, useContext } from 'react';
import ApplicationContext from '../context/Context';

import DeleteIcon from '../assets/images/trash-solid.svg';
import RenameIcon from '../assets/images/pen-solid.svg';
import CheckIcon from '../assets/images/check-solid.svg';
import ReOpenIcon from '../assets/images/rotate-right-solid.svg';
import CompleteIcon from '../assets/images/check-double-solid.svg';
import Check from '../assets/images/circle-check-regular.svg';

const Item = ({ item, index }) => {
	const [visible, setVisible] = useState(false);
	const [changedText, setChangedText] = useState('');
	const { items, setItems } = useContext(ApplicationContext);
	const { text, isCompleted } = item;

	const handleItemDelete = (index) => {
		const deletedItems = items.filter((item, idx) => {
			if (idx !== index) {
				return item;
			}

			return false;
		});

		setItems(deletedItems);
	};

	const handleItemRename = (index) => {
		const changedItems = items.map((item, idx) => {
			if (index === idx && changedText !== '') {
				return { ...item, text: changedText };
			} else {
				return item;
			}
		});

		setItems(changedItems);
	};

	const handleCompletedItems = (index) => {
		items[index].isCompleted = !items[index].isCompleted;
		setItems([...items]);
	};

	return (
		<div className='item'>
			<div className='item__content'>
				{isCompleted && (
					<div className='item__icon'>
						<img src={Check} alt='check icon' />
					</div>
				)}

				<p
					style={{ textDecoration: isCompleted && 'line-through' }}
					className='item__name'
				>
					{text}
				</p>

				{visible && (
					<input
						type='text'
						onChange={(event) => setChangedText(event.target.value)}
					/>
				)}
			</div>

			<div className='item__actions'>
				<button
					onClick={() => {
						setVisible(!visible);
						handleItemRename(index, changedText);
					}}
				>
					{visible ? (
						<img src={CheckIcon} alt='check icon' />
					) : (
						<img src={RenameIcon} alt='rename icon' />
					)}
				</button>

				<button onClick={() => handleCompletedItems(index)}>
					{isCompleted === true ? (
						<img src={ReOpenIcon} alt='reopen icon' />
					) : (
						<img src={CompleteIcon} alt='complete icon' />
					)}
				</button>

				<button onClick={() => handleItemDelete(index)}>
					<img src={DeleteIcon} alt='delete icon' />
				</button>
			</div>
		</div>
	);
};

export default Item;
