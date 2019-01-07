import { Tab, Tabs } from "native-base";
import React from "react";
import SideDrawer from "../../components/Shared/SideDrawer";
import TopBar from "../../components/Shared/TopBar";
import theme from "../../libs/theme";
import ChannelTab from "./ChannelTab";
import CommunityTab from "./CommunityTab";
import EventTab from "./EventTab";

class HomeTabs extends React.Component {
  render() {
    return (
      <SideDrawer {...this.props}>
        <TopBar {...this.props} />

        <Tabs
          tabBarUnderlineStyle={{
            height: 2
          }}
          tabBarPosition="top"
        >
          <Tab
            heading="Events"
            textStyle={{
              color: "#dedede",
              fontFamily: theme.fonts.TitilliumWebRegular
            }}
            activeTextStyle={{
              color: "white",
              fontFamily: theme.fonts.TitilliumWebSemiBold
            }}
            tabStyle={{ backgroundColor: "#d80402" }}
            activeTabStyle={{ backgroundColor: "#d80402" }}
          >
            <EventTab {...this.props} />
          </Tab>

          <Tab
            heading="Community"
            textStyle={{
              color: "#dedede",
              fontFamily: theme.fonts.TitilliumWebRegular
            }}
            activeTextStyle={{
              color: "white",
              fontFamily: theme.fonts.TitilliumWebSemiBold
            }}
            tabStyle={{ backgroundColor: "#d80402" }}
            activeTabStyle={{ backgroundColor: "#d80402" }}
          >
            <CommunityTab {...this.props} />
          </Tab>

          <Tab
            heading="Channels"
            textStyle={{
              color: "#dedede",
              fontFamily: theme.fonts.TitilliumWebRegular
            }}
            activeTextStyle={{
              color: "white",
              fontFamily: theme.fonts.TitilliumWebSemiBold
            }}
            tabStyle={{ backgroundColor: "#d80402" }}
            activeTabStyle={{ backgroundColor: "#d80402" }}
          >
            <ChannelTab {...this.props} />
          </Tab>
        </Tabs>
      </SideDrawer>
    );
  }
}

export default HomeTabs;
