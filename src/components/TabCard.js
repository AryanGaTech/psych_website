import React, {Component} from "react";
import { Button, Box, Flex, HStack } from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
import {Home} from "../pages/Home_And_About/Home";
import {Features} from "../pages/Features";
import {Connect} from "../pages/Connect";
import { Demographics } from "../pages/Demographics";

import "./TabCard.css";


export class TabCard extends Component {
    render() {
        return (
            <nav className="nav container">
                <div
                    className={"nav__menu"}
                    id="nav-menu"
                >
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink to="/" className="nav__link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/features" className="nav__link">
                                Features
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/connect" className="nav__link">
                                Connect
                            </NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink to="/demographics" className="nav_link">
                                Demographics
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </nav>
        )
    }
}

/*
    <a href="https://www.google.com">Home</a>
    <a href="https://www.google.com">Features</a>
    <a href="https://www.google.com">Connect</a>
*/
