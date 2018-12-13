

export const GUID = function () {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}



export class Store {
	static save(items) {

		const ids = (items || []).map(x => x.id).join(',');
		localStorage.setItem('gallery-ids', ids);

		(items || []).forEach((x, indx) => {
			localStorage.setItem(`gallery-id-${indx}`, x.full);
		});
	}

	static load(_callback) {
		const items = [],
		gallery_ids = localStorage.getItem('gallery-ids'),
		ids = (gallery_ids || '').split(',');


		ids.forEach( (id, indx) => {
			const image = localStorage.getItem(`gallery-id-${indx}`);
			items.push({
				id: id,
				full: image
			})
		});

		if (typeof _callback === 'function') {
			_callback(items);
		}
	}
}

