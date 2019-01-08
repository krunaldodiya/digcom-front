import React from "react";
import { KeyboardAvoidingView, SafeAreaView } from "react-native";
import Loader from "../../Shared/Loader";
import Content from "./content";
import Header from "./header";

class AddAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avoidKeyboard: false,
      relation: null
    };
  }

  componentDidMount() {
    const { state } = this.props.navigation;
    const relation_data = state.params ? state.params.relation : "Family";

    this.setState({ relation: relation_data });
  }

  toggleKeyboardAvoidView = avoidKeyboard => {
    this.setState({ avoidKeyboard });
  };

  render() {
    const { loading } = this.props;
    const { avoidKeyboard, relation } = this.state;
    
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior="position"
          enabled={avoidKeyboard}
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1 }}
        >
          <Loader loading={loading.effects.auth.updateAuthUser} />
          <Header {...this.props} relation={relation} />
          <Content
            {...this.props}
            relation={relation}
            toggleKeyboardAvoidView={this.toggleKeyboardAvoidView}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default AddAccount;
