import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from '../routes'

export default () => {
    return (
        <Menu style={{ marginTop: '10px' }}>
            <Link route="/">
                <a className="item">
                <img style={{ marginRight: '10px',  width: '30px', height: '30px'}} src='/static/logo.svg' alt='Logo'/>
                Gesture Control
                </a>
            </Link>

            <Menu.Menu position="left">
                <Link route="/about">
                    <a className="item">About</a>
                </Link>

                <Link route="/gestures/active">
                    <a className="item">Active Gestures</a>
                </Link>

                <Link route="/gestures/inactive">
                    <a className="item">Inactive Gestures</a>
                </Link>
            </Menu.Menu>
        
            <Menu.Menu position="right">
                <Link route="/gestures/new">
                    <a className="item">+ Create New Gesture</a>
                </Link>
            </Menu.Menu>
        </Menu>
    )
}