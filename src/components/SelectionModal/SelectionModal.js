import React, { Component } from 'react';
import { Button, Header, Modal, Dropdown, Icon } from 'semantic-ui-react';

export default class SelectionModal extends Component {
	constructor() {
		super();
		this.state = {
			opponent: null,
			symbol: null,
			modalOpen: false
		};
	}

	onOpponentSelect = (opponent) => {
		this.setState({ opponent });
	};

	onSymbolSelect = (symbol) => {
		this.setState({ symbol });
	};

	handleStartGame = (opponent, symbol) => {
		if (opponent && symbol) {
			this.props.handleStartGame(opponent, symbol);
			this.setState({ modalOpen: false });
		}
	};

	render() {
		return (
			<div>
				<Modal open={this.state.modalOpen} basic size="small">
					<Header icon="chess board" content="X / O" />
					<Modal.Actions>
						<Dropdown
							text=""
							icon={this.state.opponent ? this.state.opponent : 'users'}
							floating
							button
							className="icon"
						>
							<Dropdown.Menu>
								<Dropdown.Item onClick={() => this.onOpponentSelect('user')}>
									<Icon name="user" size="big" />
								</Dropdown.Item>
								<Dropdown.Item onClick={() => this.onOpponentSelect('laptop')}>
									<Icon name="laptop" size="big" />
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<Dropdown
							text=""
							icon={this.state.symbol ? this.state.symbol : 'hand point up outline'}
							floating
							button
							className="icon"
							size="big"
						>
							<Dropdown.Menu>
								<Dropdown.Item onClick={() => this.onSymbolSelect('x')}>
									<Icon name="delete" size="big" />
								</Dropdown.Item>
								<Dropdown.Item onClick={() => this.onSymbolSelect('circle outline')}>
									<Icon name="circle outline" size="big" />
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<Button
							color="green"
							size="big"
							className="start-btn"
							onClick={() => this.handleStartGame(this.state.opponent, this.state.symbol)}
						>
							Go
						</Button>
					</Modal.Actions>
				</Modal>
			</div>
		);
	}
}
