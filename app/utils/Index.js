

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
		if (items.length) {
			const ids = (items || []).map(x => `${x.id}|${x.date}`).join(',');

			localStorage.setItem('gallery-ids', ids);

			(items || []).forEach((x, indx) => {
				localStorage.setItem(`gallery-id-${indx}`, x.full);
			});
		}else{
			localStorage.setItem('gallery-ids', '');
		}
	}

	static load(_callback) {
		const items = [],
		gallery_ids = localStorage.getItem('gallery-ids'),
		ids = (gallery_ids || '').split(',').map(x=> {
			return {
				id: x.split('|')[0],
				date: x.split('|')[1]
			}
		});

		ids.forEach( (item, indx) => {
			const image = localStorage.getItem(`gallery-id-${indx}`);
			items.push({
				id: item.id,
				date: item.date,
				full: image
			})
		});


		if (typeof _callback === 'function') {
			_callback(items);
		}
	}
}

