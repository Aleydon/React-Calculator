import React from 'react';

import Button from '../button/Button';

import './Calculator.css';

function Calculator() {
	return (
		<div className="calculator">
			<Button label="+" />
			<Button label="-" />
			<Button label="*" />
			<Button label="/" />
			<Button label="%" />
		</div>
	);
}

export default Calculator;
