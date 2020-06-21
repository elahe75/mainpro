import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Videopage2 extends Component {
	render() {
		return (
			<ReactPlayer
          width='100%'
          height='100%'
				url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
				playing
				muted
			/>
		);
	}
}

export default Videopage2;
