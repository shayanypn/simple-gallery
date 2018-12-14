import React from 'react';
import { GUID, Store } from '../utils/Index';
import Form from './Form';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import List from './List';
import ModalView from './ModalView';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeIndex: null,
			activeItem: null,
			items: []
		}
	}
	OnPrepareImage(id, data){
		const canvas = document.getElementById('simple-gallery-form-canvas'),
		ctx = canvas.getContext('2d'),
		img = new Image();
		img.onload = () => {
			const iw=img.width,
			ih=img.height,
			scale=Math.min((150/iw),(150/ih)),
			getBase64 = (scale) => {
				const iwScaled=iw*scale,
				ihScaled=ih*scale;
				canvas.width=iwScaled;
				canvas.height=ihScaled;
				ctx.drawImage(img,0,0,iwScaled,ihScaled);
				return canvas.toDataURL('image/jpeg',1);
			};
			this.OnAddImage((id ? false : true) ,{
				id: id ? id : GUID(),
				full: getBase64(1),
				thumbnail: getBase64(scale),
				date: (new Date()).getTime()
			});
		}
		img.src = data;
	}
	OnAddImage(do_save, item) {
		const { items } = this.state;
		items.push(item);
		this.setState({
			items: items
		});

		if (do_save) {
			Store.save(items);
		}
	}
	onView(index) {
		const item = this.state.items[index];
		this.setState({
			activeIndex: index,
			activeItem: item
		});
	}
	onClose(){
		this.setState({
			activeItem: null
		});
	}
	onNext(){
		const { items, activeIndex } = this.state;
		let nextIndex = activeIndex + 1;

		if (nextIndex >= items.length) {
			nextIndex = 0;
		}

		this.onView(nextIndex);
	}
	onPrev(){
		const { items, activeIndex } = this.state;
		let nextIndex = activeIndex - 1;

		if (nextIndex < 0) {
			nextIndex = items.length - 1;
		}

		this.onView(nextIndex);
	}
	onDelete(id){
		const { items } = this.state;
		const restItems = items.filter(x=> x.id != id);

		Store.save(restItems);
		this.setState({
			activeItem: null,
			items: restItems
		});
	}
	componentDidMount(){
		Store.load( data => {
			data.forEach(x => {
				this.OnPrepareImage(null, x.full);
			});
		});
	}
	render() {
		return (
			<div>
				<Header />
				<main role="main">
					<About />
				    <div className="album py-5 bg-light">
				        <div className="container">
				        	<canvas id="simple-gallery-form-canvas" style={{display:'none'}} />
							<Form 
								onImage={this.OnPrepareImage.bind(this)}
								/>
							<List 
								items={this.state.items} 
								onView={this.onView.bind(this)}
								onDelete={this.onDelete.bind(this)}
								/>
				        </div>
				    </div>
				</main>
				<ModalView 
					total={this.state.items.length}
					current={this.state.activeIndex+1}
					item={this.state.activeItem}
					onClose={this.onClose.bind(this)}
					onDelete={this.onDelete.bind(this)}
					onNext={this.onNext.bind(this)}
					onPrev={this.onPrev.bind(this)}
					 />
			</div>
		);
	}
}

export default App;