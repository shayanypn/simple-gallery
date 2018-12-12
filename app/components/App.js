import React from 'react';
import Head from './Head';
import List from './List';
import ModalView from './ModalView';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: null,
			items: [{
				full: 'https://via.placeholder.com/550',
				thumbnail: 'https://via.placeholder.com/150',
				addedAt: (new Date()).getTime()
			}]
		}
	}
	onAddImage(item){
		const { items } = this.state;

		console.log(item);

		items.push(item);
		this.setState({
			items: items
		});
	}
	onView(index) {
		const item = this.state.items[index];

		this.setState({
			activeItem: item
		});
	}
	onClose(){
		this.setState({
			activeItem: null
		});
	}
	render() {
		return (
			<div>
				<div className="container">
					<Head onImage={this.onAddImage.bind(this)} />
					<List items={this.state.items} onView={this.onView.bind(this)} />
				</div>
				<ModalView 
					onClose={this.onClose.bind(this)}
					item={this.state.activeItem} />
			</div>
		);
	}
}

export default App;