import React from 'react';
import { GUID, Store } from '../utils/Index';
import Head from './Head';
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
				thumbnail: getBase64(scale)
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
				<header>
				    <div className="collapse bg-dark" id="navbarHeader">
				        <div className="container">
				            <div className="row">
				                <div className="col-sm-8 col-md-7 py-4">
				                    <h4 className="text-white">About</h4>
				                    <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
				                </div>
				                <div className="col-sm-4 offset-md-1 py-4">
				                    <h4 className="text-white">Contact</h4>
				                    <ul className="list-unstyled">
				                        <li><a href="#" className="text-white">Follow on Twitter</a></li>
				                        <li><a href="#" className="text-white">Like on Facebook</a></li>
				                        <li><a href="#" className="text-white">Email me</a></li>
				                    </ul>
				                </div>
				            </div>
				        </div>
				    </div>
				    <div className="navbar navbar-dark bg-dark shadow-sm">
				        <div className="container d-flex justify-content-between">
							<a href="#" className="navbar-brand d-flex align-items-center">
								<strong>Album</strong>
							</a>
				        </div>
				    </div>
				</header>
				<main role="main">
				    <section className="jumbotron text-center mb-0">
				        <div className="container">
				            <h1 className="jumbotron-heading">Image Gallery</h1>
				            <p className="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
								proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
				        </div>
				    </section>
				    <div className="album py-5 bg-light">
				        <div className="container">
				        	<div className="row">
				        		<div className="col-md-12">
									<canvas id="simple-gallery-form-canvas" style={{display:'none'}} ></canvas>
									<Head onImage={this.OnPrepareImage.bind(this)} />
				        		</div>
				        	</div>
							<List 
							items={this.state.items} 
							onView={this.onView.bind(this)}
							/>
				        </div>
				    </div>
				</main>
				<footer className="text-muted">
				</footer>
				<ModalView 
					total={this.state.items.length}
					current={this.state.activeIndex}
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