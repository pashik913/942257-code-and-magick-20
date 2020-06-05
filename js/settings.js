var fireballSize = 22;
var wizardWidth = 70;
var wizardSpeed = 3;

function getFireballSpeed (isHeadWind) {
  if (isHeadWind) {
    return 5;
  }

  return 2;
}

function getWizardHeight () {
  return 1.337 * wizardWidth;
}

function getWizardX (mapWidth) {
  return (mapWidth - wizardWidth) / 2;
}

function getWizardY (mapHeight) {
  return mapHeight / 2;
}
