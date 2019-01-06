import { Button, Form, Input, Item, Text, View } from "native-base";
import React from "react";
import theme from "../../libs/theme";
import Switch from "../shared/Switch";
import styles from "./styles";

class ContentBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: props.users.filters
    };
  }

  render() {
    const { filters } = this.state;
    const { navigation, getUsers } = this.props;

    return (
      <Form style={styles.formWrapper}>
        <Item style={styles.inputWrapper}>
          <Input
            clearButtonMode="always"
            placeholder="Name / Mobile"
            placeholderTextColor="#000"
            autoCorrect={false}
            value={filters.keywords}
            onChangeText={keywords =>
              this.setState({ filters: { ...filters, keywords } })
            }
            style={styles.input}
          />
        </Item>

        <Item style={styles.inputWrapper}>
          <Input
            clearButtonMode="always"
            placeholder="ગામ"
            placeholderTextColor="#000"
            autoCorrect={false}
            value={filters.father_city}
            onChangeText={father_city =>
              this.setState({ filters: { ...filters, father_city } })
            }
            style={styles.input}
          />
        </Item>

        <Item style={styles.inputWrapper}>
          <Input
            clearButtonMode="always"
            placeholder="મોસાડ"
            placeholderTextColor="#000"
            autoCorrect={false}
            value={filters.mother_city}
            onChangeText={mother_city =>
              this.setState({ filters: { ...filters, mother_city } })
            }
            style={styles.input}
          />
        </Item>

        <View style={styles.buttonGroup}>
          <Item style={styles.buttonWrapper}>
            <Switch
              {...this.props}
              width={200}
              options={["Any", "Male", "Female"]}
              selected={filters.gender}
              onChange={gender =>
                this.setState({ filters: { ...filters, gender } })
              }
            />
          </Item>

          <Item style={styles.buttonWrapper}>
            <Switch
              {...this.props}
              width={200}
              options={["Any", "Married", "Single"]}
              selected={filters.marital_status}
              onChange={marital_status =>
                this.setState({ filters: { ...filters, marital_status } })
              }
            />
          </Item>

          <Item style={styles.submitButtonWrapper}>
            <Button
              rounded
              small
              style={styles.submitButton}
              onPress={() => {
                getUsers({ filters, page: 1, data: [] });
                navigation.goBack();
              }}
            >
              <Text style={styles.submitButtonText}>APPLY</Text>
            </Button>
          </Item>

          <Item style={styles.submitButtonWrapper}>
            <Button
              rounded
              small
              danger
              onPress={() => {
                getUsers({
                  filters: {
                    keywords: null,
                    father_city: null,
                    mother_city: null,
                    gender: "Any",
                    marital_status: "Any"
                  },
                  page: 1,
                  data: []
                });

                navigation.goBack();
              }}
            >
              <Text
                style={{
                  fontFamily: theme.fonts.TitilliumWebSemiBold
                }}
              >
                Reset
              </Text>
            </Button>
          </Item>
        </View>
      </Form>
    );
  }
}

export default ContentBody;
