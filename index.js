module.exports = function(html){
  var div = document.createElement('div');
  div.innerHTML = html;
  document.body.appendChild(div);
};