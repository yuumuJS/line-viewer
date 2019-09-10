import React, {Component} from 'react';
import Balloon from '../balloon/balloon';
import './talkofday.css';

export default class TalkOfDay extends Component {
	render() {
		return (
			<div className='talkOfDay'>
				<h2>{this.props.date}</h2>
				<div className='balloons'>
					{this.props.talksOfDay.map((talk) => {
						return (
							<Balloon
								user={talk.user}
								text={talk.text}
								time={talk.time}
								myTalk={this.props.my === talk.user}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}
