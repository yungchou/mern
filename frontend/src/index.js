import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	return (
		<div className='abc'>
			<h1>Level 1 Heading</h1>
			<div>
				<p>Level 2 content</p>
			</div>
		</div>
	);
};
ReactDOM.render(<App />, document.querySelector('#root'));
