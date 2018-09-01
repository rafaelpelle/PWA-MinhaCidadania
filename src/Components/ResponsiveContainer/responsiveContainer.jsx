import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Icon, Menu, Responsive, Segment, Sidebar, Visibility } from 'semantic-ui-react'
import Footer from '../Footer/footer'

class ResponsiveContainer extends Component {
	render() {
		const { children } = this.props
		return(
			<div>
				<DesktopContainer>{children}</DesktopContainer>
				<MobileContainer>{children}</MobileContainer>
			</div>
		)
	}
}

class DesktopContainer extends Component {
	constructor(props) {
		super(props)
		this.state = { fixed: false, homeActive: true, contactActive: false }
	}

	hideFixedMenu = () => this.setState({ ...this.state, fixed: false })
	showFixedMenu = () => this.setState({ ...this.state, fixed: true })
	switchToHome = () => this.setState({ ...this.state, homeActive: true, contactActive: false })
	switchToContact = () => this.setState({ ...this.state, homeActive: false, contactActive: true })

	render() {
		const { children } = this.props
		const { fixed, homeActive, contactActive } = this.state
		return (
			<Responsive minWidth={Responsive.onlyTablet.minWidth}>
				<Visibility
					once={false}
					onBottomPassed={this.showFixedMenu}
					onBottomPassedReverse={this.hideFixedMenu}
				>
					<Segment
						inverted
						textAlign='center'
						style={{ padding: '1em 0em' }}
						vertical
					>
						<Menu
							fixed={fixed ? 'top' : null}
							inverted={!fixed}
							pointing={!fixed}
							secondary={!fixed}
							size='large'
						>
							<Container>
								<Menu.Item as={ Link } to='/' >
									Home
								</Menu.Item>
								<Menu.Item as={ Link } to='/contato' >
									Contato
								</Menu.Item>
							</Container>
						</Menu>
					</Segment>
				</Visibility>
				{children}

			</Responsive>
		)
	}
}


class MobileContainer extends Component {
	state = {}

	handlePusherClick = () => {
		const { sidebarOpened } = this.state
		if (sidebarOpened) this.setState({ sidebarOpened: false })
	}

	handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

	render() {
		const { children } = this.props
		const { sidebarOpened } = this.state
		return (
			<Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
				<Sidebar.Pushable>
					<Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened} style={{paddingTop: '2em'}}>
						<Menu.Item as={Link} to='/' onClick={this.handlePusherClick} >Home</Menu.Item>
						<Menu.Item as={Link} to='/contato' onClick={this.handlePusherClick} >Contato</Menu.Item>
					</Sidebar>

					<Sidebar.Pusher
						dimmed={sidebarOpened}
						onClick={this.handlePusherClick}
						style={{ minHeight: '100vh' }}
					>
						<Segment
							inverted
							textAlign='center'
							style={{ padding: '1em 0em' }}
							vertical
						>
							<Container>
								<Menu inverted pointing secondary size='large'>
									<Menu.Item onClick={this.handleToggle}>
										<Icon name='sidebar' />
									</Menu.Item>
								</Menu>
							</Container>
						</Segment>
						{children}
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</Responsive>
		)
	}
}

export default ResponsiveContainer