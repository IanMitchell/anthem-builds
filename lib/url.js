export function parse(queryParams) {
  return {
    javelin: parseInt(queryParams.get('j'), 10),
    weaponOne: parseInt(queryParams.get('w1').split('-')[0], 10),
    weaponTwo: parseInt(queryParams.get('w2').split('-')[0], 10),
    gearOne: parseInt(queryParams.get('g1').split('-')[0], 10),
    gearTwo: parseInt(queryParams.get('g2').split('-')[0], 10),
    support: parseInt(queryParams.get('s').split('-')[0], 10),
    version: queryParams.get('v'),
  };
}

export function serialize(
  javelin,
  gearList,
  support,
  weaponList,
  componentList,
  version
) {
  const url = new URLSearchParams();

  url.set('j', javelin.id);

  gearList.forEach((item, index) => {
    url.set(`g${index + 1}`, `${item.id}-${item.inscriptions.join('-')}`);
  });

  url.set('s', `${support.id}-${support.inscriptions.join('-')}`);

  weaponList.forEach((item, index) => {
    url.set(`w${index + 1}`, `${item.id}-${item.inscriptions.join('-')}`);
  });

  componentList.forEach((item, index) => {
    url.set(`c${index + 1}`, `${item.id}-${item.inscriptions.join('-')}`);
  });

  url.set('v', version);

  return url.toString();
}
