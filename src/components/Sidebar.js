import React from "react";
import styled from "styled-components";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SideMenu";
import { IconContext } from "react-icons/lib";
import { useSelector } from "react-redux";
import isEmpty from 'lodash/isEmpty';
import { COLOR_CODES } from '../constants'

const Nav = styled.div`
background: #15171c;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const SidebarNav = styled.nav`
background: #15171c;
width: 250px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left:  0;
transition: 350ms;
z-index: 10;
`;

const SidebarWrap = styled.div`
width: 100%;
`;

const Sidebar = () => {

    const dataReducer = useSelector(state => state.dataReducer);

    const updSidebarData = SidebarData.map(eachItem => {
        eachItem.enabled = eachItem.enabledFieldNotEmpty ? !isEmpty(dataReducer[eachItem.enabledFieldNotEmpty]) : true;
        eachItem.count = eachItem.dataField ? dataReducer[eachItem.dataField].length : 0;
        if (!isEmpty(eachItem.subNav)) {
            eachItem.subNav.forEach(eachSubItem => {
                eachSubItem.enabled = eachSubItem.enabledFieldNotEmpty ? !isEmpty(dataReducer[eachSubItem.enabledFieldNotEmpty]) : true;
                eachSubItem.count = eachSubItem.dataField ? dataReducer[eachSubItem.dataField].length : 0;
            })
        }
        return eachItem;
    });

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav>
                    <h1 style={{
                        textAlign: "center",
                        marginLeft: 250,
                        color: COLOR_CODES.primary
                    }}>
                        Hubilo
		            </h1>
                </Nav>
                <SidebarNav>
                    <SidebarWrap>
                        {updSidebarData.map((item, index) => <SubMenu item={item} key={`side-menu-${index}`} />)}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};

export default Sidebar;
