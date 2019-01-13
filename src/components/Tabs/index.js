import { Tab, Tabs } from "native-base";
import React from "react";
import SideDrawer from "../../components/Shared/SideDrawer";
import TopBar from "../../components/Shared/TopBar";
import theme from "../../libs/theme";
// tabs
import Contacts from "./Contacts";
import Groups from "./Groups";
import Timeline from "./Timeline";

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
            heading="Timeline"
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
            <Timeline {...this.props} />
          </Tab>

          <Tab
            heading="Groups"
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
            <Groups {...this.props} />
          </Tab>

          <Tab
            heading="Contacts"
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
            <Contacts {...this.props} />
          </Tab>
        </Tabs>
      </SideDrawer>
    );
  }
}

export default HomeTabs;
