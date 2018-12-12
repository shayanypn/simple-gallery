import React from 'react';


class List extends React.Component {

	onHandleClick(index){
		this.props.onView(index);
	}

	render() {
		const { items } = this.props;
		return (
			<div className="row">
				{items.map((x, idx) => {
					return (<div key={idx} className="col-4">
						<div style={{backgroundImage: `url(${x.thumbnail})` }} className="bx-image" >
							<div onClick={e => this.onHandleClick(idx)} className="cover">
								<button> View </button>
							</div>
						</div>
					</div>)
				})}
			</div>
		);
	}
}

export default List;