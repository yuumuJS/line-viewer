import React, {Component} from 'react';
import './balloon.css';

class Balloon extends Component {
	render() {
		return (
			<div className={`balloon ${this.props.myTalk ? 'right' : 'left'}`}>
				<p className='user'>{this.props.user}</p>
				<p className='text'>{this.props.text}</p>
				<p className='time'>{this.props.time}</p>
			</div>
		);
	}
}

export default Balloon;
