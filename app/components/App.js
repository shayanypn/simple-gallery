import React from 'react';


class App extends React.Component {
	render() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-10"><h2>Image Gallery</h2></div>
						<div className="col-2">
							<button className="btn btn-success">+</button>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<div className="jumbotron p-2 pl-5">
								<form className="form-inline">
									<label className="my-1 mr-2" htmlFor="image">Image</label>
									<div className="custom-file my-1 mr-sm-2">
										<input type="file" className="custom-file-input" id="image-file" />
										<label className="custom-file-label" htmlFor="image-file">Choose file</label>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-6">
							<img src="https://via.placeholder.com/150" className="rounded w-100" />
						</div>
						<div className="col-6">
							<img src="https://via.placeholder.com/150" className="rounded w-100" />
						</div>
					</div>
				</div>
				<div className="modal-view">
					<div className="modal-view-dialog">
						<button className="btn btn-default modal-view-dialog-close">x</button>
						<img src="https://via.placeholder.com/500" className="rounded w-100" />
					</div>
				</div>
			</div>
		);
	}
}

export default App;