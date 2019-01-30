export function filterWeaponsByJavelin(weaponList, javelin) {
  return weaponList.filter(weapon => javelin.weaponTypes.includes(weapon.type));
}
