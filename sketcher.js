Raphael.el.sketch = function(time,step){
  var el = this;
  /*---------------------
  el   = path element
  time = number of milliseconds for which the total animation should continue
  step = step is the length of each small step (in px) that is drawn during the animation
  ----------------------*/
  if(typeof(step)=='undefined'){step=1;}
  var paper     = el.paper;
  var len       = el.getTotalLength();
  var parts     = Math.ceil(len/step);
  var deltaT    = time/parts; 
  var newel     = paper.path(el.attrs.path).hide();
  var i         = 0;
  el.attr({path:newel.getSubpath(0,0)});
  for(var counter=0; counter<=parts; counter++){
    setTimeout(function(){
      var subpath = newel.getSubpath(0,i*step);
      el.attr({path:subpath});
      i++;
    },counter*deltaT);
  }
  setTimeout(function(){newel.remove()}, Math.ceil(counter*deltaT));
}
