var timeline = function (shape_label, r, fillColor){
  
  var container = document.getElementById('content');
  var canvas    = document.createElement('canvas');
  var name      = shape_label;
  
  canvas.setAttribute('id', shape_label);
  canvas.setAttribute('width', '1000px');
  canvas.setAttribute('height', '800px');
  
  canvas.style.position    = 'absolute';
  canvas.style.marginLeft  = 'auto'
  canvas.style.marginRight = 'auto';
  canvas.style.display     = 'block';
  
  container.appendChild(canvas);
  
  // Make sure we don't execute when canvas isn't supported
  if (canvas.getContext){

    // use getContext to use the canvas for drawing
    var ctx = canvas.getContext('2d');

    // position
    var xpos = document.getElementById(shape_label).width / 2;
    var ypos = document.getElementById(shape_label).height / 2;
    
    var radius = r;
    var circum = Math.PI*2;
    
    // Draw shape
	  ctx.arc(
	      xpos,	
				ypos,	
				radius,
				0,		   
				circum,
				true);
		
    ctx.fillStyle = fillColor;
		ctx.fill();      
    
    
    return {
      get_name: function() {
        return name;
      },
      get_ctx: function() {
        return ctx;
      },
      get_xpos: function() {
        return xpos;
      },
      get_ypos: function() {
        return ypos;
      },
      get_radius: function() {
        return radius;
      },
      get_circumference: function() {
        return circum;
      }
    }
  }   
}

function createTimeline() {
  var startNum = 12*8;
  var num_of_topics = 6;
  var topic_time_lens = [300, 250, 200, 180, 150, 50];
  var colors = ["#FF80E1", "#80FFBB", "#FF9D2D", "#FFDA23", "#B3CCCC", "#FFFFFF"];

  for ( var i= 0; i < num_of_topics; i +=1 ) {
    var tl = timeline("topic_" + i, topic_time_lens[i], colors[i]);
    createTimeTracks(Math.random()*100+1,
                     tl.get_name(), 
                     tl.get_xpos(), 
                     tl.get_ypos(), 
                     tl.get_radius(), 
                     tl.get_circumference());
  }
}

function createTimeTracks(numOfTracks, canvas, xpos, ypos, radius, circum) {
  
  for ( var i = 0; i < numOfTracks; i+=1) {
    var radian = Math.random()*360;
    drawLineSegment(canvas, xpos, ypos, radius, circum, (2*Math.PI/360) * radian);    
  }
  
}

function drawLineSegment(name,startPosX, startPosY, radius, circum, radian) {

 var canvas = document.getElementById(name)
 var ctx = canvas.getContext('2d');
 var angle = radian;
 var offSet = 15;

 var posX  = ( startPosX + Math.cos(angle) * (radius - offSet));
 var posY  = ( startPosY + Math.sin(angle) * (radius - offSet));
 
 ctx.beginPath();
 ctx.moveTo(startPosX, startPosY);
 ctx.lineTo(posX, posY );
 ctx.strokeStyle = '#FFF';
 ctx.stroke();
 
}