import React from 'react';
import Router from 'next/router';
import { Heading, Button, Pane, SelectField, Spinner } from 'evergreen-ui';
import Page from '../layouts/Page';
import { serialize } from '../lib/url';
import { filterWeaponsByJavelin } from '../lib/filters';

export default class extends React.Component {
  state = {
    loading: true,
    javelin: null,
    weaponOne: null,
    weaponTwo: null,
    gearOne: null,
    gearTwo: null,
    support: null,
    version: null,
  };

  componentDidMount() {
    this.loadData();
  }

  onSubmit = event => {
    event.preventDefault();

    const url = serialize(
      this.state.javelin,
      [
        { ...this.state.gearOne, inscriptions: [0, 0, 0, 0] },
        { ...this.state.gearTwo, inscriptions: [0, 0, 0, 0] },
      ],
      { ...this.state.support, inscriptions: [0, 0, 0, 0] },
      [
        { ...this.state.weaponOne, inscriptions: [0, 0, 0, 0] },
        { ...this.state.weaponTwo, inscriptions: [0, 0, 0, 0] },
      ],
      [],
      this.state.version
    );

    Router.push(`/build?${url}`);
  };

  setJavelin = value => {
    this.setState(state => ({
      javelin: state.javelinList.find(javelin => javelin.id === value),
      gearOne: state.gearList.find(
        gear => gear.javelin === value && gear.slot === 1
      ),
      gearTwo: state.gearList.find(
        gear => gear.javelin === value && gear.slot === 2
      ),
      support: state.gearList.find(
        gear => gear.javelin === value && gear.slot === 3
      ),
    }));
  };

  setWeaponOne(id) {
    this.setState(state => ({
      weaponOne: state.weaponList.find(el => el.id === parseInt(id, 10)),
    }));
  }

  setWeaponTwo(id) {
    this.setState(state => ({
      weaponTwo: state.weaponList.find(el => el.id === parseInt(id, 10)),
    }));
  }

  setGearOne(id) {
    this.setState(state => ({
      gearOne: state.gearList.find(el => el.id === parseInt(id, 10)),
    }));
  }

  setGearTwo(id) {
    this.setState(state => ({
      gearTwo: state.gearList.find(el => el.id === parseInt(id, 10)),
    }));
  }

  setSupport(id) {
    this.setState(state => ({
      support: state.gearList.find(el => el.id === parseInt(id, 10)),
    }));
  }

  async loadData() {
    const versions = await import('../data/versions.json');

    const javelinImport = import(`../data/${versions.stable}/javelins.json`);
    const gearImport = import(`../data/${versions.stable}/gear.json`);
    const weaponImport = import(`../data/${versions.stable}/weapons.json`);

    Promise.all([javelinImport, weaponImport, gearImport]).then(
      ([javelins, weapons, gear]) => {
        this.setState({
          javelinList: javelins.default.javelins,
          weaponList: weapons.default.weapons,
          weaponOne: weapons.default.weapons[0],
          weaponTwo: weapons.default.weapons[1],
          gearList: gear.default.gear,
          loading: false,
          version: versions.stable,
        });
      }
    );
  }

  render() {
    const {
      loading,
      javelinList,
      javelin,
      weaponList,
      weaponOne,
      weaponTwo,
      gearList,
      gearOne,
      gearTwo,
      support,
    } = this.state;

    if (loading) {
      return (
        <Page>
          <Pane
            display="flex"
            alignItems="center"
            justifyContent="center"
            height={400}
          >
            <Spinner delay={300} />
          </Pane>
        </Page>
      );
    }

    return (
      <Page>
        <Heading size={900} width="auto" marginTop={48} marginBottom={36}>
          Create a Build
        </Heading>

        <Pane display="flex" width="100%" flexDirection="column">
          <Pane
            elevation={1}
            marginBottom={24}
            marginLeft={16}
            marginRight={16}
            padding={16}
          >
            <Heading size={700} marginBottom={16}>
              Choose a Javelin
            </Heading>

            <Pane
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              className={`highlight ${this.state.javelin &&
                `highlight_${this.state.javelin.id}`}`}
            >
              {javelinList.map(suit => (
                <Pane key={suit.name} marginLeft="auto" marginRight="auto">
                  <a onClick={() => this.setJavelin(suit.id)}>
                    <img
                      className="javelin"
                      src={`static/javelins/${suit.name.toLowerCase()}.jpg`}
                      alt={suit.name}
                    />
                  </a>
                </Pane>
              ))}
            </Pane>
          </Pane>
        </Pane>

        {javelin && (
          <Pane width="100%" display="flex" flexDirection="column">
            <Pane
              display="flex"
              flexWrap="wrap"
              flexDirection="row"
              width="100%"
            >
              <Pane elevation={1} padding={16} margin={16} flex="auto">
                <Heading size={700} marginBottom={16}>
                  Choose Weapons
                </Heading>

                <SelectField
                  label="Primary Weapon"
                  onChange={event => this.setWeaponOne(event.target.value)}
                  value={weaponOne.id}
                >
                  {filterWeaponsByJavelin(weaponList, javelin).map(item => (
                    <option value={item.id} key={item.name}>
                      {item.name} ({item.type})
                    </option>
                  ))}
                </SelectField>

                <SelectField
                  label="Secondary Weapon"
                  onChange={event => this.setWeaponTwo(event.target.value)}
                  value={weaponTwo.id}
                >
                  {filterWeaponsByJavelin(weaponList, javelin).map(item => (
                    <option value={item.id} key={item.name}>
                      {item.name} ({item.type})
                    </option>
                  ))}
                </SelectField>
              </Pane>

              <Pane elevation={1} padding={16} margin={16} flex="auto">
                <Heading size={700} marginBottom={16}>
                  Choose Gear
                </Heading>

                <SelectField
                  label={javelin.slotOne}
                  onChange={event => this.setGearOne(event.target.value)}
                  value={gearOne.id}
                >
                  {gearList
                    .filter(
                      item => item.slot === 1 && item.javelin === javelin.id
                    )
                    .map(item => (
                      <option value={item.id} key={item.name}>
                        {item.name}
                      </option>
                    ))}
                </SelectField>

                <SelectField
                  label={javelin.slotTwo}
                  onChange={event => this.setGearTwo(event.target.value)}
                  value={gearTwo.id}
                >
                  {gearList
                    .filter(
                      item => item.slot === 2 && item.javelin === javelin.id
                    )
                    .map(item => (
                      <option value={item.id} key={item.name}>
                        {item.name}
                      </option>
                    ))}
                </SelectField>

                <SelectField
                  label={javelin.support}
                  onChange={event => this.setSupport(event.target.value)}
                  value={support.id}
                >
                  {gearList
                    .filter(
                      item => item.slot === 3 && item.javelin === javelin.id
                    )
                    .map(item => (
                      <option value={item.id} key={item.name}>
                        {item.name}
                      </option>
                    ))}
                </SelectField>
              </Pane>
            </Pane>

            <Button
              height={56}
              appearance="primary"
              intent="success"
              width="auto"
              justifyContent="center"
              marginTop={36}
              marginLeft={16}
              marginRight={16}
              marginBottom={16}
              onClick={this.onSubmit}
            >
              Create Build
            </Button>
          </Pane>
        )}
      </Page>
    );
  }
}
