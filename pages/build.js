/* global window */
import React from 'react';
import { Pane, Heading, Text } from 'evergreen-ui';
import Page from '../layouts/Page';
import { parse } from '../lib/url';

export default class extends React.Component {
  state = {
    loading: true,
    error: null,
    javelin: null,
    weaponOne: null,
    weaponTwo: null,
    gearOne: null,
    gearTwo: null,
    support: null,
    version: null,
  };

  componentDidMount() {
    try {
      const data = parse(new URLSearchParams(window.location.search));

      this.loadData(data.version).then(() => {
        this.setState(state => ({
          javelin: state.javelinList.find(
            javelin => javelin.id === data.javelin
          ),
          weaponOne: state.weaponList.find(
            weapon => weapon.id === data.weaponOne
          ),
          weaponTwo: state.weaponList.find(
            weapon => weapon.id === data.weaponTwo
          ),
          gearOne: state.gearList.find(gear => gear.id === data.gearOne),
          gearTwo: state.gearList.find(gear => gear.id === data.gearTwo),
          support: state.gearList.find(gear => gear.id === data.support),
          loading: false,
        }));
      });
    } catch (error) {
      this.setState({ error: true, loading: false });
    }
  }

  async loadData(version) {
    const javelinImport = import(`../data/${version}/javelins.json`);
    const gearImport = import(`../data/${version}/gear.json`);
    const weaponImport = import(`../data/${version}/weapons.json`);

    return Promise.all([javelinImport, weaponImport, gearImport]).then(
      ([javelins, weapons, gear]) => {
        this.setState({
          javelinList: javelins.default.javelins,
          weaponList: weapons.default.weapons,
          gearList: gear.default.gear,
          version,
        });
      }
    );
  }

  render() {
    if (this.state.loading) {
      return <Page>Loading...</Page>;
    }

    if (this.state.error) {
      return <Page>Sorry, there was an error</Page>;
    }

    return (
      <Page>
        <Heading size={900} width="auto" marginTop={48} marginBottom={8}>
          {this.state.javelin.name} Build
        </Heading>
        <Text marginBottom={36} width="auto">
          Version {this.state.version}
        </Text>

        <Pane
          width="100%"
          display="flex"
          flexDirection="row"
          alignItems="center"
          flexWrap="wrap"
          justifyContent="space-around"
        >
          <Pane marginBottom={32}>
            <img
              className="javelin"
              src={`static/javelins/${this.state.javelin.name.toLowerCase()}.jpg`}
              alt={this.state.javelin.name}
            />
          </Pane>

          <Pane>
            <Text size={500}>Primary Weapon</Text>
            <Heading size={700} marginTop={8} marginBottom={24}>
              {this.state.weaponOne.name}
            </Heading>

            <Text size={500}>Secondary Weapon</Text>
            <Heading size={700} marginTop={8} marginBottom={24} graph>
              {this.state.weaponTwo.name}
            </Heading>

            <Text size={500}>{this.state.javelin.slotOne}</Text>
            <Heading size={700} marginTop={8} marginBottom={24}>
              {this.state.gearOne.name}
            </Heading>

            <Text size={500}>{this.state.javelin.slotTwo}</Text>
            <Heading size={700} marginTop={8} marginBottom={24}>
              {this.state.gearTwo.name}
            </Heading>

            <Text size={500}>{this.state.javelin.support}</Text>
            <Heading size={700} marginTop={8} marginBottom={24}>
              {this.state.support.name}
            </Heading>
          </Pane>
        </Pane>
      </Page>
    );
  }
}
