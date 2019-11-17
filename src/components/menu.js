import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        label: 'Trang chủ',
        to: '/',
        activeOnlyWhenExact: true
    },
    {
        label: 'Giới thiệu',
        to: '/ManagerProduct',
        activeOnlyWhenExact: false
    }
]


const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active' : '';
            return (
                <li className={`abc ${active}`}>
                    <Link to={to}>
                        {label}
                    </Link>
                </li>
            )
        }
        }
        />
    )
}

class menu extends Component {




    render() {


        return (
            <div className="navbar navbar-default">
                <a className="navbar-brand" >Title</a>
                <ul className="nav navbar-nav">
                    {this.showMenu(menus)}
                    {/* <li className = "active">
                        <a>Trang chu</a>
                    </li>
                    <li className = "active">
                        <a>Quan ly San Pham</a>
                    </li> */}
                </ul>
            </div>




        );
    }

    showMenu = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.label}
                        to={menu.to}
                        activeOnlyWhenExact={menu.activeOnlyWhenExact}
                    />
                )
            });
        }

        return result;
    }
}



export default menu;


