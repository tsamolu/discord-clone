import React from 'react'
import "./Sidebar.css"
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from "./SidebarChannel";
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutLinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from "@material-ui/icons/Call";
import {Avatar} from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic"
import SettingsIcon from "@material-ui/icons/Settings"
import HeadSetIcon from "@material-ui/icons/Headset"


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Clever Programmer</h3>
                <ExpandMoreSharpIcon />
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreSharpIcon />
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon className="sidebar__adddChannel" />
                    
                </div>
                <div className="sidebars__channelsList">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
            </div>

            <div className="sidebar__voice">
                <SignalCellularAltIcon className="sidebar__voiceIcon" />
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar__voiceIcons">
                    <InfoOutLinedIcon className="sidebar__notif" />
                    <CallIcon className="sidebar__notif" />                
                </div>
            </div>

            <div className="sidebar__profile">
                <Avatar />
                <div className="sidebar__profileInfo">
                    <h3>@ssangha</h3>
                    <p>#thisismyID</p>
                </div>

                <div className="sidebar__voiceIcons">
                    <MicIcon className="sidebar__notif"/>
                    <HeadSetIcon className="sidebar__notif"/>
                    <SettingsIcon className="sidebar__notif" />
                </div>
            </div>
        </div>

    )
}


export default Sidebar