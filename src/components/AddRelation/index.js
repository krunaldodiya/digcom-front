import { Container, Spinner } from "native-base";
import React from "react";
import ContentBody from "./content_body";
import ContentHeader from "./content_header";

class AddRelation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guestUser: null,
      loading: true
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const { guestUser } = navigation.state.params;

    this.setState({ guestUser, loading: false });
  }

  render() {
    const { guestUser, loading } = this.state;

    return (
      <Container style={{ flex: 1 }}>
        {loading && <Spinner size="small" />}

        {!loading && (
          <React.Fragment>
            <ContentHeader {...this.props} guestUser={guestUser} />
            <ContentBody {...this.props} guestUser={guestUser} />
          </React.Fragment>
        )}
      </Container>
    );
  }
}

export default AddRelation;
