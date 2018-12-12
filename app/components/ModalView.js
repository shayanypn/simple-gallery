import React from 'react';

class ModalView extends React.Component {
	onHandleClose(){
		this.props.onClose();
	}
	render() {
		const { item } = this.props;

		if (!item) {
			return (<div></div>);
		}

		return (
			<div className={`modal-view ${item ? 'active' : ''}`}>
				<div className="modal-view-dialog">
					<button onClick={this.onHandleClose.bind(this)} className="btn btn-default modal-view-dialog-close">x</button>
					<img src={item.full} className="rounded w-100" />
				</div>
			</div>
		);
	}
}

export default ModalView;