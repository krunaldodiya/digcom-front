import { Container } from "native-base";
import React from "react";
import Loader from "../../../Shared/Loader";
import ContentBody from "./content_body";
import ContentHeader from "./content_header";

class MemberList extends React.Component {
  render() {
    const { loading } = this.props;

    return (
      <Container style={{ flex: 1 }}>
        <Loader loading={loading.models.family} />
        <ContentHeader {...this.props} />
        <ContentBody {...this.props} />
      </Container>
    );
  }
}

export default MemberList;
