import { View } from "native-base";
import React from "react";
import Loader from "../../components/Shared/Loader";
import FromRequest from "./from_request";
import RequestAccepted from "./request_accepted";
import SelectRelation from "./select_relation";
import Top from "./top";
import ToRequest from "./to_request";

class ContentBody extends React.Component {
  constructor(props) {
    super(props);

    const { auth, guestUser } = props;
    const { authUser } = auth;

    this.state = {
      from: authUser,
      to: guestUser,
      relation: null
    };
  }

  componentDidMount() {
    this.setRelation(this.props);
  }

  componentWillReceiveProps(props) {
    this.setRelation(props);
  }

  setRelation = props => {
    const { auth, guestUser } = props;
    const { authUser } = auth;
    const { relatives } = authUser;

    if (!relatives.length) {
      this.setState({ relation: null });
    }

    if (relatives.length) {
      const relation = relatives.filter(data => guestUser.id === data.from)[0];
      this.setState({ relation });
    }
  };

  render() {
    const { from, to, relation } = this.state;
    const { auth } = this.props;
    const { loading } = auth;

    return (
      <View style={{ flex: 1, padding: 10 }}>
        <Loader loading={loading} />

        <Top {...this.props} to={to} relation={relation} />

        {!relation && <SelectRelation {...this.props} guestUser={to} />}

        {relation && (
          <View style={{ flex: 1 }}>
            {relation.status == true && (
              <RequestAccepted {...this.props} relation={relation} />
            )}

            {relation.status == false && (
              <View style={{ flex: 1 }}>
                {relation.user_id === to.id && (
                  <ToRequest {...this.props} relation={relation} />
                )}

                {relation.user_id === from.id && (
                  <FromRequest {...this.props} relation={relation} />
                )}
              </View>
            )}
          </View>
        )}
      </View>
    );
  }
}

export default ContentBody;
