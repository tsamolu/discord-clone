import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import ExpandMoreSharpIcon from "@material-ui/icons/ExpandMoreSharp";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutLinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import SettingsIcon from "@material-ui/icons/Settings";
import HeadSetIcon from "@material-ui/icons/Headset";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import db, { auth } from "./firebase";

function Sidebar() {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      );
    });
  }, []);

  const handleAddChannel = () => {
    const channelName = prompt("Enter a new channel name");

    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
    }
  };

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
          <AddIcon
            onClick={handleAddChannel}
            className="sidebar__adddChannel"
          />
        </div>
        <div className="sidebars__channelsList">
          {channels.map((id, channel) => (
            <SidebarChannel
              key={id}
              id={id}
              channelName={channel.channelName}
            />
          ))}
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
        <Avatar onClick={() => auth.signout()} src={user.photo} />
        <div className="sidebar__profileInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 5)}</p>
        </div>

        <div className="sidebar__voiceIcons">
          <MicIcon className="sidebar__notif" />
          <HeadSetIcon className="sidebar__notif" />
          <SettingsIcon className="sidebar__notif" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
