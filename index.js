var getGongDaigi = function(fontSize, audioSource, outputContainer) {
var outputTextarea = document.createElement('textarea');
outputTextarea.rows = 7;
outputTextarea.cols = 100;
//var outputTextarea = document.getElementById('embedCode');
var playButtonSize = fontSize;
var triangleHeight = playButtonSize / 2, triangleWidth = triangleHeight/2 * Math.pow(3, 0.5);
var triangleMarginLeft=(playButtonSize-triangleWidth)/2 + triangleWidth/5, triangleMarginTop=(playButtonSize-triangleHeight)/2;
var triangleMarginLeft=(playButtonSize/2) - triangleWidth + triangleHeight*Math.pow(3, 0.5)/3;
var output = '';
output += '<div style="font-size:' + fontSize + 'px;">';
  output += '你好嗎？我很好！';
  output += '<div class="playButton" onclick="document.getElementById(\'player\').play();" style="width:'+ playButtonSize +'px;height:'+ playButtonSize +'px;overflow:hidden;display:inline-block;vertical-align:top;">';
    output += '<div class="playIcon" style="display:inline-block;width:' + playButtonSize + 'px;height:' + playButtonSize + 'px;border-radius:' + playButtonSize/2+ 'px;background:#000"><div style="margin-left:'+ triangleMarginLeft +'px;margin-top:'+ triangleMarginTop +'px;width:0;height:0;border-width: '+ triangleHeight/2 +'px 0 '+ triangleHeight/2 +'px '+ triangleWidth +'px;border-style:solid;border-color:transparent transparent transparent white;"></div></div>';
    output += '<audio id="player">';
      output += '<source src="'+ audioSource +'" type="audio/wav"></source>';
    output += '</audio>';
  output += '</div>';
output += '</div>';
console.log(output);
outputTextarea.innerHTML = output;

var outputPreview = document.createElement('div');
outputPreview.innerHTML = output;
//document.getElementById('codePreview').innerHTML = output;

document.getElementById(outputContainer).appendChild(outputTextarea);
document.getElementById(outputContainer).appendChild(outputPreview);
};
