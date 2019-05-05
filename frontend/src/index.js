import React from 'react';
import ReactDOM from 'react-dom';

// Component
import Header from './components/header';

const App = () => {
	return (
		<div className='abc'>
      <Header/>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
