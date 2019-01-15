import { Container } from "native-base";
import React from "react";
import Loader from "../../Shared/Loader";
import ContentBody from "./content_body";
import ContentHeader from "./content_header";

class SelectCommunity extends React.Component {
  render() {
    const { loading, navigation } = this.props;
    const { params } = navigation.state;

    const selected_community = params && params.selected_community;
    
    return (
      <Container style={{ flex: 1 }}>
        <Loader loading={loading.models.selectCommunity} />
        <ContentHeader {...this.props} selected_community={selected_community} />
        <ContentBody {...this.props} selected_community={selected_community} />
      </Container>
    );
  }
}

export default SelectCommunity;
