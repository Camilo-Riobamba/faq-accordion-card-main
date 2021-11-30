import React from 'react';
import Dropdown from './Dropdown';
import Illustration from './Illustration';

export default class App extends React.Component{
	render(){
		return (
			<main>
				<Illustration/>
	
				<div>
					<h1>FAQ</h1>
				</div>
				
				<div>
					<Dropdown
						title="How many team members can I invite?"
						content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio maxime labore quibusdam ad."
					/>
					<Dropdown
						title="What is the maxium file upload size?"
						content="No more than 2GB. all files in your account must fit yourr allotted storage space."
					/>
					<Dropdown
						title="How  do I reset my password?"
						content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio maxime labore quibusdam ad."
					/>
					<Dropdown
						title="Can I cancel my subscription?"
						content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio maxime labore quibusdam ad."
					/>
					<Dropdown
						title="Do you provide additional support?"
						content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio maxime labore quibusdam ad."
					/>
				</div>
			</main> 
		);
	}
}