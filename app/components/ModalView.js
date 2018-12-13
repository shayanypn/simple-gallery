import React from 'react';

class ModalView extends React.Component {
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
	render() {
		const { item, total, current } = this.props;

		if (!item) {
			return (<div></div>);
		}

		return (
			<div className={`modal-view ${item ? 'active' : ''}`}>
				<div className="modal-view-dialog">
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