import React from 'react';

class Form extends React.Component {
	onHandleChange(e){
		const canvas=document.getElementById('simple-gallery-form-canvas'),
		ctx=canvas.getContext('2d'),
		img = new Image,
		files = e.target.files;
		
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

			this.props.onImage(Object.assign(files[0], {
				full: getBase64(1),
				thumbnail: getBase64(scale)
			}));
		}
		img.src = URL.createObjectURL(files[0]);
	}
	render() {
		return (
			<div className="row">
				<div className="col-10"><h2>Image Gallery</h2></div>
				<div className="col-2 text-right">
					<form className="form-inline">
						<canvas id="simple-gallery-form-canvas" style={{display:'none'}} ></canvas>
						<div className="custom-file my-1 mr-sm-2">
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