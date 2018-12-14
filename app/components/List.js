import React from 'react';
import Moment from 'react-moment';

class List extends React.Component {

	onHandleClick(index){
		this.props.onView(index);
	}
	onHandleDelete(index){
		this.props.onDelete(index);
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
											<button onClick={e => this.onHandleDelete(x.id)} type="button" className="btn btn-sm btn-outline-danger">Delete</button>
										</div>
									</div>
									<small className="text-muted"><Moment fromNow>{x.date}</Moment></small>
								</div>
							</div>
						</div>)
				})}
			</div>
		);
	}
}

export default List;