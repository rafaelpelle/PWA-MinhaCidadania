import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Icon, Menu, Responsive, Segment, Sidebar, Visibility } from 'semantic-ui-react'


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
	state = {}

	hideFixedMenu = () => this.setState({ fixed: false })
	showFixedMenu = () => this.setState({ fixed: true })

	render() {
		const { children } = this.props
		const { fixed } = this.state
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
								<Menu.Item as={ Link } to='/' active>Home</Menu.Item>
								<Menu.Item as={ Link } to='/contato' >Contato</Menu.Item>
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
					<Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
						<Menu.Item as={Link} to='/' >Home</Menu.Item>
						<Menu.Item as={Link} to='/contato' >Contato</Menu.Item>
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