import { Container } from "native-base";
import React from "react";
import Loader from "../../../components/Shared/Loader";
import ContentBody from "./content_body";
import ContentHeader from "./content_header";

class AccountList extends React.Component {
  render() {
    const { loading } = this.props;

    return (
      <Container style={{ flex: 1 }}>
        <Loader loading={loading.models.auth} />
        <ContentHeader {...this.props} />
        <ContentBody {...this.props} />
      </Container>
    );
  }
}

export default AccountList;
