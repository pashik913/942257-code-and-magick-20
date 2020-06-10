'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var barHeight = CLOUD_HEIGHT - GAP - (TEXT_WIDTH * 3) - GAP;
var BAR_WIDTH = 40;
var barMargin = GAP * 5;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + BAR_WIDTH + (BAR_WIDTH + barMargin) * i, CLOUD_Y + GAP + FONT_GAP + (GAP + barHeight));
    ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + barMargin) * i, TEXT_WIDTH + CLOUD_Y + GAP + barHeight, BAR_WIDTH , (barHeight * times[i]) / maxTime);
  }
};
