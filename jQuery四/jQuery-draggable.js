/**
 * Created by Administrator on 2018/5/17.
 */
$.prototype.draggable = function(){

  var that = this;
  this.on('mousedown',function(e){
    var spaceX = e.offsetX;
    var spaceY = e.offsetY;

    $(document).on('mousemove',function(e){

      that.css('position','absolute');
      var x = e.clientX - spaceX;
      var y = e.clientY - spaceY;
      that.css('left',x);
      that.css('top',y);

    })

    $(document).on('mouseup',function(){
      $(document).off('mousemove');
    })
    return this;
  });




}