import React from 'react';

class Form extends React.Component {
	onHandleChange(e){
		const files = e.target.files;
		this.props.onImage(null, URL.createObjectURL(files[0]));
	}
	render() {
		return (
			<div className="row">
				<div className="col-10"><h2>Image Gallery</h2></div>
				<div className="col-2 text-right">
					<form className="form-inline">
						<div className="custom-file">
							<input type="file"
								className="custom-file-input"
								id="image-file"
								onChange={this.onHandleChange.bind(this)}
								/>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Form;