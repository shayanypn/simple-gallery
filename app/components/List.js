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
					return (<div key={idx}  className="col-3">
							<div className="card mb-4 shadow-sm">
								<div className="card-img-top" style={{backgroundImage: `url(${x.thumbnail})` }} ></div>
								<div className="card-body">
									<div className="d-flex justify-content-between align-items-center">
										<div className="btn-group">
											<button onClick={e => this.onHandleClick(idx)} type="button" className="btn btn-sm btn-outline-secondary">View</button>
											<button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
										</div>
										<small className="text-muted">9 mins</small>
									</div>
								</div>
							</div>
						</div>)
				})}
			</div>
		);
	}
}

export default List;