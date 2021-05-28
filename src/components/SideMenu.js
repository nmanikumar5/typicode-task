import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR_CODES } from '../constants'

const SidebarLink = styled(Link)`
display: flex;
color: #e1e9fc;
justify-content: space-between;
align-items: center;
padding: 20px;
list-style: none;
height: 60px;
text-decoration: none;
font-size: 18px;
&:hover {
	background: #252831;
	cursor: pointer;
}
background: ${({ selected }) => (selected ? "#252831" : "transparent")};
border-left:${({ selected }) => (selected ? `4px solid ${COLOR_CODES.primary}` : "none")};
pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")}
`;

const SidebarLabel = styled.span`
margin-left: 16px;
`;

const DropdownLink = styled(Link)`
background: #252831;
height: 60px;
padding-left: 3rem;
display: flex;
align-items: center;
text-decoration: none;
color: #f5f5f5;
font-size: 18px;
&:hover {
	background: #252831;
	cursor: pointer;
}
background: ${({ selected }) => (selected ? `${COLOR_CODES.primary}` : "transparent")};
pointer - events: ${({ disabled }) => (disabled ? "none" : "auto")}
`;

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <SidebarLink to={item.path}
                onClick={item.subNav && showSubnav}
                disabled={!item.enabled}
                selected={window.location.pathname === item.path}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                    {!item.subNav && <SidebarLabel>{item?.count}</SidebarLabel>}
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}
                </div>
            </SidebarLink>
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <DropdownLink
                            to={item.path}
                            selected={window.location.pathname === item.path}
                            key={`drop - down - link - ${index} `}
                            disabled={!item.enabled}>
                            {item.icon}
                            <SidebarLabel>{item.title}</SidebarLabel>
                            <SidebarLabel>{item?.count}</SidebarLabel>
                        </DropdownLink>
                    );
                })}
        </>
    );
};

export default SubMenu;
