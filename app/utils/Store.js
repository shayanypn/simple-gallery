
class Store {
	static save(items) {

		console.log('items', items);

		// localStorage.setItem('gallery-items', items.map( x => x.id ).join(','));
		// items.forEach( x => {
		// 	localStorage.setItem(`gallery-image-${x.id}`, x.full);
		// });
	}

	static load(_callback) {
		const items = [],
		gallery_items = localStorage.getItem('gallery-items'),
		ids = (gallery_items || '').split(',');

		ids.forEach( id => {
			const image = localStorage.getItem(`gallery-image-${id}`);
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

export Store;