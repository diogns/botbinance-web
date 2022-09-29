import {React} from "react"
import { Link } from "react-router-dom";

export default function SidebarNav(props){
    console.log("Sidebar Nav",props);

    const navItems = (items) => {
        return items.map((item, index) => itemType(item, index));
    };

    const itemType = (item, index) => {
        console.log(item)
        return (
            <li className="pure-menu-item" key={index}>
                <a href={item.url} className="pure-menu-link">
                    {item.name}
                </a>

                <Link to="item.url" className="pure-menu-link">{item.name}</Link>

            </li>

        )
        /*
        if (item.children) {
            return <NavDropdownItem key={index} item={item} isSidebarCollapsed={props.isSidebarCollapsed} />;
        } else if (item.divider) {
            return <NavDivider key={index} />;
        } else {
            return <NavSingleItem item={item} key={index} />;
        }




              <li className="nav-item">
        <a href={item.url} target={item.target} rel={rel}>
          {item.icon && Icon && <Icon className="side-nav-icon" />}
          <span className="nav-item-label">{item.name}</span>
          {item.badge && <NavBadge color={item.badge.variant} text={item.badge.text} />}
        </a>
      </li>


         */
    };


    return(
        <div>
            <a className="pure-menu-heading" href="#company">BOT Binance JR</a>

            <ul className="pure-menu-list">

                {navItems(props.nav.top)}
                {/*

                                <li className="pure-menu-item"><a href="#home" className="pure-menu-link">Home</a></li>
                <li className="pure-menu-item"><a href="/account" className="pure-menu-link">Account</a></li>

                <li className="pure-menu-item menu-item-divided pure-menu-selected">
                    <a href="#" className="pure-menu-link">Services</a>
                </li>
                <li className="pure-menu-item"><a href="#contact" className="pure-menu-link">Contact</a></li>

                */}



            </ul>
        </div>

    )
}