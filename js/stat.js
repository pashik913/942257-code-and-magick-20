'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_HEIGHT = 20;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;

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
  ctx.font = '16px PT Mono';

  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + TEXT_HEIGHT, TEXT_HEIGHT);
  ctx.fillText('Список результатов:', CLOUD_X + TEXT_HEIGHT, TEXT_HEIGHT * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var x = CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;
    var height = (BAR_HEIGHT * times[i]) / maxTime;

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), x, BAR_HEIGHT + BAR_GAP + TEXT_HEIGHT - height);
    ctx.fillText(players[i], x, CLOUD_X + BAR_HEIGHT);

    ctx.fillStyle = players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsla(239, 84%, 29%, ' + Math.random() +')';
    ctx.fillRect(x, TEXT_HEIGHT * 2 + BAR_GAP + BAR_HEIGHT, BAR_WIDTH, -height);
  }
};
