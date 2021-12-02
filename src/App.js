import React from 'react';
import Dropdown from './Dropdown';
import Illustration from './Illustration';

export default class App extends React.Component{
	render(){
		return (
			<main className="container min-height background p-3">
				<article className="container-md space-around w-100 w-70-md p-2 radius bg-white box-shadow text-center">
					<div className="container container-illustration w-40-md">
						<Illustration/>
					</div>


					<div className="w-60-md">
						<div className="mt-4 m-0-md">
							<h1 className="bolder">FAQ</h1>
						</div>

						<div className="light pl-2 pr-2 text-left">
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
					</div>
				</article>
			</main> 
		);
	}
}