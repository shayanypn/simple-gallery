import React from 'react';

class ModalView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			width: null,
		}
	}
	onHandleClose(){
		this.props.onClose();
	}
	onHandleNext(){
		this.props.onNext();
	}
	onHandlePrev(){
		this.props.onPrev();
	}
	onHandleDelete(){
		const { item } = this.props;

		this.props.onDelete(item.id);
	}
	componentDidUpdate(prevProps, prevState) {
		const { item } = this.props,
		img = new Image(),
		maxWidth = window.innerWidth * 0.9;
		let desireWidth = 0;

		if (!item) {return;}

		img.onload = () => {
			this.setState({
				width: (img.width > maxWidth) ? maxWidth : img.width
			});
		};
		img.src = item.full;
	}
	render() {
		const { item, total, current } = this.props;

		if (!item) {
			return (<div></div>);
		}

		return (
			<div className={`modal-view ${item ? 'active' : ''}`}>
				<div className="modal-view-dialog" style={{width: this.state.width}}>
					<div className="modal-view-image">
						<div className="pagination">{current}/{total}</div>
						<button onClick={this.onHandleClose.bind(this)} className="btn btn-default modal-view-dialog-close">x</button>
						<button onClick={this.onHandleDelete.bind(this)} className="btn btn-default modal-view-dialog-delete"></button>
						<div onClick={this.onHandleNext.bind(this)} className="modal-view-next"></div>
						<img src={item.full} className="rounded" />
						<div onClick={this.onHandlePrev.bind(this)} className="modal-view-prev"></div>
					</div>
				</div>
			</div>
		);
	}
}

export default ModalView;