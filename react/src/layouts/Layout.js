import React, {useState,useEffect,useCallback} from "react";
import { Routes , Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import {nav} from "../__nav"

import "./Layout.css";
import routes from "../views"
import SidebarNav from "../components/SidebarNav/SidebarNav";

export default function App(props) {
    console.log(routes);
    return (
        <div id="layout">

            <div id="menu">
                <div className="pure-menu">
                    {/* sidebar */}
                    <SidebarNav
                        nav={nav}
                        {...props}
                        // {...props }
                    />

                    {/* header < header nav*/}
                    {/* page */}
                    {/* page content*/}
                    <Routes >
                        {routes.map((page, key) => (
                            <Route path={page.path} component={page.component} key={key} />

                            ))}
                    </Routes >

                    {/*
                        <ul className="pure-menu-list">
                        <li className="pure-menu-item"><a href="#home" className="pure-menu-link">Home</a></li>
                        <li className="pure-menu-item"><a href="/account" className="pure-menu-link">Account</a></li>

                        <li className="pure-menu-item menu-item-divided pure-menu-selected">
                            <a href="#" className="pure-menu-link">Services</a>
                        </li>

                        <li className="pure-menu-item"><a href="#contact" className="pure-menu-link">Contact</a></li>
                    </ul>

                    */}

                    {/* end page content*/}

                    {/* footer */}
                    {/* end page */}

                </div>
            </div>



        </div>

    );
}


