import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR_CODES } from '../core/constants'

const SidebarLink = styled(Link)`
display: flex;
color: ${({ disabled }) => (disabled ? COLOR_CODES.disabled : COLOR_CODES.white)};
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
background: ${({ selected }) => (selected ? "#252831" : COLOR_CODES.lightGray)};
border-left:${({ selected }) => (selected ? `4px solid ${COLOR_CODES.primary}` : "none")};
pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
margin: 20px 0;
position: relative;
`;

const SidebarLabel = styled.span`
margin-left: 16px;
`;

const DataCount = styled.span`
margin-left: 16px;
background: ${COLOR_CODES.green};
border-radius: 0.8em;
-moz-border-radius: 0.8em;
-webkit-border-radius: 0.8em;
color: ${({ disabled }) => (disabled ? COLOR_CODES.disabled : COLOR_CODES.white)};
display: inline-block;
line-height: 1.6em;
margin-right: 5px;
text-align: center;
width: 40px;
font-size: 14px;
position: absolute;
top: -10px;
right: 10px;
`;

const DropdownLink = styled(Link)`
background: #252831;
height: 60px;
padding-left: 3rem;
display: flex;
align-items: center;
text-decoration: none;
color: ${({ disabled }) => (disabled ? COLOR_CODES.disabled : COLOR_CODES.white)};
font-size: 18px;
&:hover {
	background: #252831;
	cursor: pointer;
}
background: ${({ selected }) => (selected ? `${COLOR_CODES.primary}` : COLOR_CODES.lightGray)};
pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
margin: 20px 0;
position: relative;
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
                    <SidebarLabel>{item.title} {!item.subNav && <DataCount>{item?.count}</DataCount>}</SidebarLabel>

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
                item.subNav.map((item, index) => (
                    <DropdownLink
                        to={item.path}
                        selected={window.location.pathname === item.path}
                        key={`drop-down-link-${index}`}
                        disabled={!item.enabled}>
                        {item.icon}
                        <SidebarLabel>{item.title} <DataCount>{item?.count}</DataCount></SidebarLabel>
                    </DropdownLink>
                ))}
        </>
    );
};

export default SubMenu;
