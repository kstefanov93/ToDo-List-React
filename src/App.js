import { useState, useEffect } from 'react';
import Search from '././components/Search';
import Item from '././components/Item';
import Navigation from './components/Navigation';
import ApplicationContext from './context/Context';

function App() {
	const [items, setItems] = useState(
		JSON.parse(window.localStorage.getItem('items')) || []
	);

	useEffect(() => {
		window.localStorage.setItem('items', JSON.stringify(items));
	}, [items]);

	return (
		<ApplicationContext.Provider value={{ items, setItems }}>
			<section className='section'>
				<div className='shell'>
					<Search />

					{items.map((item, index) => {
						return <Item item={item} key={item.text} index={index} />;
					})}

					<Navigation />
				</div>
			</section>
		</ApplicationContext.Provider>
	);
}

export default App;
