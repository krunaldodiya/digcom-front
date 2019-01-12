import { Container } from "native-base";
import React from "react";
import Loader from "../../Shared/Loader";
import ContentBody from "./content_body";
import ContentHeader from "./content_header";

class ManageCommunity extends React.Component {
  render() {
    const { loading, navigation } = this.props;
    const { params } = navigation;

    const select_community = params && params.select_community;

    return (
      <Container style={{ flex: 1 }}>
        <Loader loading={loading.models.selectCommunity} />
        <ContentHeader {...this.props} select_community={select_community} />
        <ContentBody {...this.props} select_community={select_community} />
      </Container>
    );
  }
}

export default ManageCommunity;
