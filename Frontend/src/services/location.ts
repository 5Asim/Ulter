export function getCurrentPosition(): Promise<{ latitude: number; longitude: number }> {
	return new Promise((resolve, reject) => {
		if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
		(position) => {
		resolve({
			latitude: position.coords.latitude,
			longitude: position.coords.longitude,
		});
		},
		(error) => {
		if (error.code === error.PERMISSION_DENIED) {
			reject('User denied permission to access location');
		} else if (error.code === 3) {
	// Handle "Response was malformed" error
			reject('Unable to retrieve location data. Please check your network connection and try again.');
		} else {
			reject(`Error getting location: ${error.message}`);
		}
		}
		);
		} else {
		reject('Geolocation is not supported by this browser.');
		}
	});
      }