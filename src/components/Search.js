import { useState, useContext } from 'react';
import ApplicationContext from '../context/Context';

const Search = () => {
	const [term, setTerm] = useState('');
	const { items, setItems } = useContext(ApplicationContext);

	const handleItemAdd = () => {
		if (term !== '') {
			setItems([...items, { text: term }]);
			setTerm('');
		}
	};

	return (
		<div className='search'>
			<div className='search__field'>
				<input
					type='text'
					value={term}
					onChange={(event) => setTerm(event.target.value)}
				/>
			</div>

			<div className='search__actions'>
				<button onClick={handleItemAdd}>Add Item</button>
			</div>
		</div>
	);
};

export default Search;
