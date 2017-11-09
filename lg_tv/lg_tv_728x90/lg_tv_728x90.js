(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/oledLogo.png", id:"oledLogo"},
		{src:"images/pic1.jpg", id:"pic1"},
		{src:"images/pic3.jpg", id:"pic3"},
		{src:"images/pic4TV.png", id:"pic4TV"},
		{src:"images/wall.png", id:"wall"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.oledLogo = function() {
	this.initialize(img.oledLogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,293,40);


(lib.pic1 = function() {
	this.initialize(img.pic1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,673,250);


(lib.pic3 = function() {
	this.initialize(img.pic3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.pic4TV = function() {
	this.initialize(img.pic4TV);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,139);


(lib.wall = function() {
	this.initialize(img.wall);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,387,250);


(lib.Symbol111 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgdAeIA7g7");
	this.shape.setTransform(-3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgdgdIA7A7");
	this.shape_1.setTransform(-3,-3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1,3,true).p("AhjAAIDHAA");
	this.shape_2.setTransform(-10,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-7,22,14);


(lib.Symbol35copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACMCGQgEgEAAgJQAAgJAEgFQAFgGAIABQAFgBACACIAAgRIAIgBIAAAsIABAJIgHAAIgBgCQgEADgGAAQgIgBgDgEgACTBvQgCACgBAIQABAMAIAAQAEAAADgCIAAgWIgGgCQgFABgCADgABkCFQgDgDAAgKQAAgJAEgFQAFgEAJAAQAJAAAEAEQADAFABAKQgBAJgEAEQgFAEgIABQgJAAgFgGgABrBvQgCADAAAHQAAAFACAEQABADAGAAQAFAAACgDQACgEAAgGQAAgGgBgDQgCgEgFAAQgFABgDADgAA9CFQgDgDAAgKQAAgJAEgFQAEgEAKAAQAJAAAEAEQADAFAAAKQAAAJgEAEQgEAEgKABQgJAAgEgGgABEBvQgCADAAAHQAAAFACAEQACADAEAAQAFAAADgDQACgEAAgGQAAgGgCgDQgCgEgEAAQgGABgCADgAAQCEQgGgHAAgMQAAgOAHgGQAGgHALAAQAGABAEABQAFACADAEIgFADQgEgEgJAAQgIgBgDAGQgFAFAAAKQAAAJAFAFQAEAFAHAAIAKgBIAAgOIgLAAIAAgGIATAAIAAAYQgHADgLABQgMgBgGgGgAgpCIIADgFQAEABAHAAIAEAAQABAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgDgFgCIgIgDQgDgBgCgCQgDgCAAgEQAAgFAFgDQAEgDAGABQAHgBAHADIgDAGQgFgDgGAAIgFACQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABIABABIAEACIAIAEQADABACABQACADABAEQgBAFgEADQgEACgGABQgIgBgGgCgAhSCGQgEgEAAgKQABgSAQAAQAIAAAEAEQADAFAAAIIAAADIgYAAQAAAFADADQACADAFgBIAHAAIAFgCIACAFIgHADIgIABQgJgBgEgEgAhLBuQgCACgBAEIAQAAQAAgJgHAAQgFAAgBADgAhsCKIAAgdIgGAAIAAgGIAGAAIAAgFQAAgHADgEQAEgCAGAAQAGgBADACIgCAGIgFgBQgEAAgCACQgBABAAAEIAAAFIAMAAIAAAGIgMAAIAAAdgAiFCJIAAgjIAIAAIAAAjgAioCJIAAgzIAIAAIAAAtIAWAAIAAAGgAg1BmQADgFAAgDIABgJIAHAAIgCALQgBAFgDADgAiFBeIAAgHIAIAAIAAAHgAgOAQQgVgVAAgrQAAgsAWgXQAUgXAqAAQAUAAARAHQATAHAKAPIgZAXQgHgKgJgEQgKgFgOABQgbAAgKAOQgLAOAAAcQAAAdALANQALALAaAAIARgBIAMgDIAAgdIghAAIAAggIBGAAIAABSQgLAIgSAEQgTAFgTAAQgsAAgTgXgAioAkIAAisIAoAAIAACKIBTAAIAAAig");
	this.shape.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.8,-13.9,33.9,27.8);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4D4F").s().p("ACMCGQgEgEAAgJQAAgJAEgFQAFgGAIABQAFgBACACIAAgRIAIgBIAAAsIABAJIgHAAIgBgCQgEADgGAAQgIgBgDgEgACTBvQgCACgBAIQABAMAIAAQAEAAADgCIAAgWIgGgCQgFABgCADgABkCFQgDgDAAgKQAAgJAEgFQAFgEAJAAQAJAAAEAEQADAFABAKQgBAJgEAEQgFAEgIABQgJAAgFgGgABrBvQgCADAAAHQAAAFACAEQABADAGAAQAFAAACgDQACgEAAgGQAAgGgBgDQgCgEgFAAQgFABgDADgAA9CFQgDgDAAgKQAAgJAEgFQAEgEAKAAQAJAAAEAEQADAFAAAKQAAAJgEAEQgEAEgKABQgJAAgEgGgABEBvQgCADAAAHQAAAFACAEQACADAEAAQAFAAADgDQACgEAAgGQAAgGgCgDQgCgEgEAAQgGABgCADgAAQCEQgGgHAAgMQAAgOAHgGQAGgHALAAQAGABAEABQAFACADAEIgFADQgEgEgJAAQgIgBgDAGQgFAFAAAKQAAAJAFAFQAEAFAHAAIAKgBIAAgOIgLAAIAAgGIATAAIAAAYQgHADgLABQgMgBgGgGgAgpCIIADgFQAEABAHAAIAEAAQABAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgDgFgCIgIgDQgDgBgCgCQgDgCAAgEQAAgFAFgDQAEgDAGABQAHgBAHADIgDAGQgFgDgGAAIgFACQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABIABABIAEACIAIAEQADABACABQACADABAEQgBAFgEADQgEACgGABQgIgBgGgCgAhSCGQgEgEAAgKQABgSAQAAQAIAAAEAEQADAFAAAIIAAADIgYAAQAAAFADADQACADAFgBIAHAAIAFgCIACAFIgHADIgIABQgJgBgEgEgAhLBuQgCACgBAEIAQAAQAAgJgHAAQgFAAgBADgAhsCKIAAgdIgGAAIAAgGIAGAAIAAgFQAAgHADgEQAEgCAGAAQAGgBADACIgCAGIgFgBQgEAAgCACQgBABAAAEIAAAFIAMAAIAAAGIgMAAIAAAdgAiFCJIAAgjIAIAAIAAAjgAioCJIAAgzIAIAAIAAAtIAWAAIAAAGgAg1BmQADgFAAgDIABgJIAHAAIgCALQgBAFgDADgAiFBeIAAgHIAIAAIAAAHgAgOAQQgVgVAAgrQAAgsAWgXQAUgXAqAAQAUAAARAHQATAHAKAPIgZAXQgHgKgJgEQgKgFgOABQgbAAgKAOQgLAOAAAcQAAAdALANQALALAaAAIARgBIAMgDIAAgdIghAAIAAggIBGAAIAABSQgLAIgSAEQgTAFgTAAQgsAAgTgXgAioAkIAAisIAoAAIAACKIBTAAIAAAig");
	this.shape.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.8,-13.9,33.9,27.8);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.82)","rgba(255,255,255,0)"],[0,1],-474.3,0.5,474.4,0.5).s().p("EhOsAX1MAAAgvpMCdZAAAMAAAAvpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-503.7,-152.5,1007.5,305.1);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.976)","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,240.4).s().p("A7ZbZQrWrWAAwDQAAwCLWrXQLXrWQCAAQQDAALWLWQLXLXAAQCQAAQDrXLWQrWLXwDAAQwCAArXrXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-248,-248,496,496);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.357)","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,20.4).s().p("AiOCPQg7g7AAhUQAAhSA7g8QA8g7BSAAQBUAAA7A7QA7A8AABSQAABUg7A7Qg7A7hUAAQhSAAg8g7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.2,-20.2,40.5,40.5);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wall();
	this.instance.setTransform(-193,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193,-125,387,250);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pic1();
	this.instance.setTransform(-336.5,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-336.5,-125,673,250);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.pic4TV, null, new cjs.Matrix2D(1,0,0,1,-111.9,-63.9)).s().p("Aw6JqIAAy/IM3gUIIBAAIM9AAIAATTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.3,-61.9,216.8,123.8);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AARA/IAAhAIgCAAIgUBAIgiAAIAAhSIAXAAIAAA/IACAAIAUg/IAiAAIAABSgAgWgmQgGgIgBgQIASAAQABAHADAEQACAFAGAAQAHAAADgFQACgEAAgHIASAAQABAQgIAIQgGAHgRAAQgPAAgIgHg");
	this.shape.setTransform(104.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARAqIAAhAIgCAAIgUBAIgiAAIAAhTIAXAAIAABAIACAAIAUhAIAiAAIAABTg");
	this.shape_1.setTransform(94.1,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcAqIAAhTIA6AAIAAASIgiAAIAABBg");
	this.shape_2.setTransform(86.2,2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUApQgIgDgFgGQgEgGgCgIQgCgIAAgKQAAgVALgLQAKgLAVAAQAMAAAIADQAIADAEAGQAFAGACAIQACAJAAAIQAAAWgLALQgKALgVAAQgMAAgIgDgAgMgTQgFAHAAANIABAKQABAFACAEQABADADADQAEACAFAAQAJAAAFgIQAEgHAAgNIgBgKIgCgJIgFgGQgEgCgFAAQgJAAgEAIg");
	this.shape_3.setTransform(77.3,2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglAqIgEgBIABgTIACABIADAAIAEgBIADgDIACgGIACgLIAAgIIABgNIABgNIAAgJIBAAAIAABSIgYAAIAAhBIgTAAIgBAOIgBAPQgCAUgHAJQgGAIgMAAIgHAAg");
	this.shape_4.setTransform(67.2,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUApQgIgDgFgGQgEgGgCgIQgCgIAAgKQAAgVALgLQAKgLAVAAQAMAAAIADQAIADAEAGQAFAGACAIQACAJAAAIQAAAWgLALQgKALgVAAQgMAAgIgDgAgMgTQgFAHAAANIABAKQABAFACAEQABADADADQAEACAFAAQAJAAAFgIQAEgHAAgNIgBgKIgCgJIgFgGQgEgCgFAAQgJAAgEAIg");
	this.shape_5.setTransform(58,2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANAqIAAgiIgZAAIAAAiIgYAAIAAhTIAYAAIAAAiIAZAAIAAgiIAYAAIAABTg");
	this.shape_6.setTransform(48.4,2.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AARAqIgRghIgBAAIgRAhIgZAAIAZgqIgYgpIAaAAIAQAgIABAAIAQggIAZAAIgYApIAaAqg");
	this.shape_7.setTransform(39.3,2.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdAgQgJgLAAgVQAAgrAoAAQAMAAAHADQAHADAEAGQAEAGACAHQABAIAAAJIAAAGIg0AAQAAAJADAFQAFAIALAAQAKAAAGgDIAMgEIAEAPIgHADIgIADIgKACIgLABQgVAAgKgMgAgFgaQgEACgCADQgCAEAAAFIAAAEIAcAAQAAgJgDgFQgDgFgHAAQgEAAgDABg");
	this.shape_8.setTransform(30.2,2.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLAqIAAhBIgZAAIAAgSIBJAAIAAASIgaAAIAABBg");
	this.shape_9.setTransform(21.8,2.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AARAqIgRghIgBAAIgRAhIgZAAIAZgqIgYgpIAaAAIAQAgIABAAIAQggIAZAAIgYApIAaAqg");
	this.shape_10.setTransform(9.2,2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAdAqIAAhTIAZAAIAABTgAg0AqIAAhTIAXAAIAAAdIAUAAQAHAAADABQAGACADAEQAEADADADQACAFAAAHQAAAIgCAFQgCAGgFADQgEADgGACQgEACgIAAgAgdAZIAOAAQAMAAAAgMQAAgEgDgDQgDgEgGAAIgOAAg");
	this.shape_11.setTransform(-1.5,2.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AANAqIAAgiIgZAAIAAAiIgYAAIAAhTIAYAAIAAAiIAZAAIAAgiIAYAAIAABTg");
	this.shape_12.setTransform(-12.6,2.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AANAqIAAgiIgZAAIAAAiIgYAAIAAhTIAYAAIAAAiIAZAAIAAgiIAYAAIAABTg");
	this.shape_13.setTransform(-22,2.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUApQgIgDgFgGQgEgGgCgIQgCgIAAgKQAAgVALgLQAKgLAVAAQAMAAAIADQAIADAEAGQAFAGACAIQACAJAAAIQAAAWgLALQgKALgVAAQgMAAgIgDgAgMgTQgFAHAAANIABAKQABAFACAEQABADADADQAEACAFAAQAJAAAFgIQAEgHAAgNIgBgKIgCgJIgFgGQgEgCgFAAQgJAAgEAIg");
	this.shape_14.setTransform(-31.6,2.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AARAqIAAhAIgCAAIgUBAIgiAAIAAhTIAXAAIAABAIACAAIAUhAIAiAAIAABTg");
	this.shape_15.setTransform(-41.4,2.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWApQgJgCgFgDIAHgPIAMAFQAGACAIAAIAHgBIAFgDIADgDIABgEQAAgFgEgCQgEgDgHAAIgMAAIAAgNIALAAIAGgBIAFgCQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIABgDQAAgFgEgDQgDgDgFAAQgGAAgFACQgGACgDAEIgNgMQAGgGAJgDQAIgDALAAIAMABIALAEQAFADADAEQADAEAAAGQAAAHgEAFQgFAFgGACQAHACAFAEQAGAEAAAKQAAANgLAGQgLAHgQAAQgNAAgIgDg");
	this.shape_16.setTransform(-50.7,2.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AARAqIAAhAIgCAAIgUBAIgiAAIAAhTIAXAAIAABAIACAAIAUhAIAiAAIAABTg");
	this.shape_17.setTransform(-59.5,2.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgkAqIAAhTIArAAQAMAAAHAFQAIAFAAALQAAAHgEAFQgEAEgHADQAIABAFAEQAGAFgBAJQABAGgDAEQgDAFgDADQgEADgFABQgFACgGAAgAgNAZIAPAAQALAAAAgKQAAgEgDgDQgCgDgGAAIgPAAgAgNgIIAPAAQAFAAACgDQACgCAAgEQAAgDgCgCQgCgCgEAAIgQAAg");
	this.shape_18.setTransform(-68.8,2.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgdAgQgJgLAAgVQAAgrAoAAQAMAAAHADQAHADAEAGQAEAGACAHQABAIAAAJIAAAGIg0AAQAAAJADAFQAFAIALAAQAKAAAGgDIAMgEIAEAPIgHADIgIADIgKACIgLABQgVAAgKgMgAgFgaQgEACgCADQgCAEAAAFIAAAEIAcAAQAAgJgDgFQgDgFgHAAQgEAAgDABg");
	this.shape_19.setTransform(-78.2,2.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AglAqIgEgBIABgTIACABIADAAIAEgBIADgDIACgGIACgLIAAgIIABgNIABgNIAAgJIBAAAIAABSIgYAAIAAhBIgTAAIgBAOIgBAPQgCAUgHAJQgGAIgMAAIgHAAg");
	this.shape_20.setTransform(-88.1,2.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgdAgQgJgLAAgVQAAgrAoAAQAMAAAHADQAHADAEAGQAEAGACAHQABAIAAAJIAAAGIg0AAQAAAJADAFQAFAIALAAQAKAAAGgDIAMgEIAEAPIgHADIgIADIgKACIgLABQgVAAgKgMgAgFgaQgEACgCADQgCAEAAAFIAAAEIAcAAQAAgJgDgFQgDgFgHAAQgEAAgDABg");
	this.shape_21.setTransform(-97,2.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgLAqIAAhBIgZAAIAAgSIBJAAIAAASIgaAAIAABBg");
	this.shape_22.setTransform(-105.4,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.3,-12.6,222.6,25.3);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAQAqIAAgdIgLAAIgSAdIgaAAIAXgfQgIgDgEgGQgGgEAAgKQAAgPAJgHQAJgHAPAAIApAAIAABTgAgKgMQAAAEADADQAEAEAEAAIAPAAIAAgXIgPAAQgLAAAAAMg");
	this.shape.setTransform(69.2,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARAqIAAhAIgCAAIgUBAIgiAAIAAhTIAXAAIAABAIACAAIAUhAIAiAAIAABTg");
	this.shape_1.setTransform(59.9,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLAqIAAhBIgZAAIAAgSIBJAAIAAASIgaAAIAABBg");
	this.shape_2.setTransform(51.1,2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AARAqIAAhAIgBAAIgWBAIghAAIAAhTIAXAAIAABAIABAAIAWhAIAhAAIAABTg");
	this.shape_3.setTransform(42.2,2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglAqIAAhTIArAAQANAAAIAFQAHAFAAALQAAAHgEAFQgEAEgGADQAHABAFAEQAFAFABAJQgBAGgCAEQgCAFgEADQgEADgFABQgFACgFAAgAgNAZIAQAAQAKAAAAgKQAAgEgCgDQgDgDgFAAIgQAAgAgNgIIAQAAQAEAAACgDQACgCAAgEQAAgDgBgCQgCgCgFAAIgQAAg");
	this.shape_4.setTransform(32.9,2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWApQgJgCgFgDIAHgPIAMAFQAGACAIAAIAHgBIAFgDIADgDIABgEQAAgFgEgCQgEgDgHAAIgMAAIAAgNIALAAIAGgBIAFgCQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIABgDQAAgFgEgDQgDgDgFAAQgGAAgFACQgGACgDAEIgNgMQAGgGAJgDQAIgDALAAIAMABIALAEQAFADADAEQADAEAAAGQAAAHgEAFQgFAFgGACQAHACAFAEQAGAEAAAKQAAANgLAGQgLAHgQAAQgNAAgIgDg");
	this.shape_5.setTransform(23.9,2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaApQgFgCgEgDQgDgEgBgFIgBgKQAAgIADgGQADgDAFgDQAFgDAHgBIAPgBIAEAAIAGAAIAAgEQAAgHgDgDQgEgEgHAAQgHAAgHACIgMAEIgEgOQAGgEAKgCQAKgDAKAAQAIAAAHACQAGACAEAEQAEAEACAHQACAHAAAKIAAAYQAAAFACACQACACAEAAIAAAQIgJABQgIAAgEgDQgFgCgDgEQgEAEgHADQgGADgGAAQgJAAgGgDgAgMAIQgDADAAAFQAAAGACACQACADAGAAIAGgBQAEgBADgDIAAgQIgGgBIgEAAQgHAAgDADg");
	this.shape_6.setTransform(15.8,2.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmgmIgCgXIAVAAIACAFIAJgEQAGgDAHAAQASAAAJALQAIAMAAATQAAAKgCAJQgCAGgFAHQgFAGgHADQgJAEgKAAQgFAAgFgCIgEgBIAAAoIgYADgAgMgrIgCACIAAAtIADACIAIABIAGgBQAEgCADgDQADgBABgGQABgFAAgIQAAgbgQAAQgGAAgFADg");
	this.shape_7.setTransform(6.5,4.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaApQgFgCgEgDQgDgEgBgFIgBgKQAAgIADgGQADgDAFgDQAFgDAHgBIAPgBIAEAAIAGAAIAAgEQAAgHgDgDQgEgEgHAAQgHAAgHACIgMAEIgEgOQAGgEAKgCQAKgDAKAAQAIAAAHACQAGACAEAEQAEAEACAHQACAHAAAKIAAAYQAAAFACACQACACAEAAIAAAQIgJABQgIAAgEgDQgFgCgDgEQgEAEgHADQgGADgGAAQgJAAgGgDgAgMAIQgDADAAAFQAAAGACACQACADAGAAIAGgBQAEgBADgDIAAgQIgGgBIgEAAQgHAAgDADg");
	this.shape_8.setTransform(-7,2.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AANAqIAAgiIgZAAIAAAiIgYAAIAAhTIAYAAIAAAiIAZAAIAAgiIAYAAIAABTg");
	this.shape_9.setTransform(-16.3,2.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AARAqIAAhAIgCAAIgUBAIgiAAIAAhTIAXAAIAABAIACAAIAUhAIAiAAIAABTg");
	this.shape_10.setTransform(-26,2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag3AqIAAhTIAXAAIAABBIAWAAIAAhBIAVAAIAABBIAWAAIAAhBIAXAAIAABTg");
	this.shape_11.setTransform(-37.7,2.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglgmIgDgXIAVAAIACAFIAJgEQAGgDAHAAQASAAAJALQAJAMAAATQgBAKgCAJQgCAGgFAHQgEAGgJADQgHAEgLAAQgEAAgFgCIgFgBIAAAoIgXADgAgLgrIgDACIAAAtIADACIAJABIAFgBQAEgCADgDQADgBABgGQABgFABgIQAAgbgRAAQgFAAgFADg");
	this.shape_12.setTransform(-49,4.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdAgQgJgLAAgVQAAgrAoAAQAMAAAHADQAHADAEAGQAEAGACAHQABAIAAAJIAAAGIg0AAQAAAJADAFQAFAIALAAQAKAAAGgDIAMgEIAEAPIgHADIgIADIgKACIgLABQgVAAgKgMgAgFgaQgEACgCADQgCAEAAAFIAAAEIAcAAQAAgJgDgFQgDgFgHAAQgEAAgDABg");
	this.shape_13.setTransform(-58.6,2.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgtA8IAAh3IAuAAQAKAAAHABQAIACAGAEQAEADADAGQADAGAAAIQAAAJgFAHQgFAHgHADQAIADAGAGQAHAHAAALQAAAKgDAHQgEAGgFAFQgGAEgIACQgHACgIAAgAgWApIAWAAIAIAAIAGgDQADgCABgDQACgEAAgFQAAgFgCgEQgBgDgCgCIgHgDIgHgBIgXAAgAgWgKIAWAAQAIAAAEgEQAFgEAAgHQAAgFgBgDIgEgFIgFgCIgHAAIgWAAg");
	this.shape_14.setTransform(-68.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.3,-12.6,152.7,25.3);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#710B2B","#000000"],[0,1],0,0,0,0,0,247.1).s().p("A7DbDQrNrNAAv2QAAv1LNrNQLOrPP1ABQP2gBLNLPQLPLNgBP1QABP2rPLNQrNLPv2gBQv1ABrOrPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-245,-245,490,490);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghA0QgHgCgEgFQgEgFgBgGQgBgGAAgHQAAgKADgHQAEgEAGgEQAGgEAJgCQAJgBAKAAIAGAAIAIAAIAAgEQAAgIgFgGQgFgEgJAAQgJAAgIACQgIACgHAFIgGgTQAJgEAMgDQAMgEANAAQAKAAAJADQAIACAFAFQAFAFACAIQACAJAAANIAAAeQAAAGACADQADADAFgBIAAAUIgLACQgJAAgGgDQgGgDgEgGQgFAGgJADQgHAEgIAAQgLAAgIgDgAgPALQgEADAAAHQAAAGADAEQACADAHAAIAIgBQAFgBAFgEIAAgVIgIAAIgFgBQgKAAgDAFg");
	this.shape.setTransform(47.9,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAmA0IAAhQIgCAAIgYBQIgYAAIgYhQIgCAAIAABQIgcAAIAAhnIAtAAIAVBQIABAAIAXhQIArAAIAABng");
	this.shape_1.setTransform(34.3,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAzQgKgDgFgIQgGgHgDgLQgCgKAAgMQAAgbAOgNQANgOAaAAQAPAAAKAEQAKAEAGAHQAGAHACALQADAKAAAMQAAAbgOANQgNAOgbAAQgPAAgKgEgAgQgYQgGAJAAAQIACANIADALQACAEAEADQAEADAGAAQAMAAAGgKQAFgIAAgRIgBgNQgBgGgCgEQgCgFgEgDQgEgDgHAAQgMAAgFAKg");
	this.shape_2.setTransform(20.3,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAkBDIAAgdIhHAAIAAAdIgZAAIAAgzIALAAQAEgIACgIIAEgSIACgWIACgaIBRAAIAABSIAPAAIAAAzgAgNgKQgDAPgEALIAkAAIAAg8IgZAAQgBARgDARg");
	this.shape_3.setTransform(7.7,4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiApQgMgNAAgbQAAgbAPgOQAOgOAaAAQAMAAALAEQAKAEAFAGIgRARQgEgGgFgCQgGgCgGAAQgLAAgIAJQgGAHAAASQAAAQAGAIQAFAJAMAAQAKAAAHgCQAHgCAIgEIAFATQgGAEgKADQgLADgMAAQgbAAgMgOg");
	this.shape_4.setTransform(-9.1,2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghA0QgHgCgEgFQgEgFgBgGQgBgGAAgHQAAgKADgHQAEgEAGgEQAGgEAJgCQAJgBAKAAIAGAAIAIAAIAAgEQAAgIgFgGQgFgEgJAAQgJAAgIACQgIACgHAFIgGgTQAJgEAMgDQAMgEANAAQAKAAAJADQAIACAFAFQAFAFACAIQACAJAAANIAAAeQAAAGACADQADADAFgBIAAAUIgLACQgJAAgGgDQgGgDgEgGQgFAGgJADQgHAEgIAAQgLAAgIgDgAgPALQgEADAAAHQAAAGADAEQACADAHAAIAIgBQAFgBAFgEIAAgVIgIAAIgFgBQgKAAgDAFg");
	this.shape_5.setTransform(-20.1,2.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguA0IAAhnIA2AAQAQAAAJAGQAKAGAAAOQAAAJgFAFQgFAGgIADQAJACAGAFQAHAGAAALQAAAIgDAFQgDAGgFAEQgEADgHACQgGACgHAAgAgRAfIAUAAQAOAAAAgMQAAgFgEgEQgDgDgHAAIgUAAgAgRgKIAUAAQAGAAADgEQACgDAAgEQAAgEgCgDQgDgDgFAAIgVAAg");
	this.shape_6.setTransform(-31.2,2.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtBPIgHgCIADgUIAJAAQAIAAAEgCIAGgFQADgDADgIIAFgNIgqhoIAhAAIAUBIIACAAIAVhIIAfAAIgqBxIgIASQgEAIgEAFQgFAHgIACQgIAEgMAAIgIAAg");
	this.shape_7.setTransform(-48,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.4,-15.3,111,30.7);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AASA0IgggqIgHAAIAAAqIgdAAIAAhnIAdAAIAAApIAHAAIAfgpIAgAAIgpAzIArA0g");
	this.shape.setTransform(42.1,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtBPIgHgCIADgUIAJAAQAIAAAEgCIAGgFQADgDADgIIAFgNIgqhoIAhAAIAUBIIADAAIAUhIIAfAAIgqBxIgIASQgEAIgEAFQgFAHgIACQgIAEgMAAIgIAAg");
	this.shape_1.setTransform(30.3,5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguA0IAAhnIA2AAQAQAAAJAGQAKAGAAAOQAAAJgFAFQgFAGgIADQAJACAGAFQAHAGAAALQAAAIgDAFQgDAGgFAEQgEADgHACQgGACgHAAgAgRAfIAUAAQAOAAAAgMQAAgFgEgEQgDgDgHAAIgUAAgAgRgKIAUAAQAGAAADgEQACgDAAgEQAAgEgCgDQgDgDgFAAIgVAAg");
	this.shape_2.setTransform(19.5,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcA0IgRgGIAJgUQAHAEAHACQAIADAKAAQAFAAAEgCQAEgBADgCIADgDIABgGQAAgFgFgEQgFgCgJAAIgPAAIAAgRIAOAAQAEAAAEgCQAEgBACgCIADgEIABgFQAAgFgFgEQgEgEgHAAQgHAAgHADQgGADgEAFIgQgQQAHgIAKgDQALgEAOAAQAHAAAIACQAIACAGACQAGADAEAGQADAFAAAIQAAAJgFAFQgFAGgIAEQAJACAHAFQAGAGAAALQAAARgNAIQgOAIgUAAQgRAAgKgDg");
	this.shape_3.setTransform(8.2,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAzQgKgDgFgIQgGgHgDgLQgCgKAAgMQAAgbAOgNQANgOAaAAQAPAAALAEQAJAEAGAHQAGAHACALQADAKAAAMQAAAbgOANQgNAOgbAAQgPAAgKgEgAgQgYQgGAJAAAQIACANIADALQACAEAEADQADADAHAAQAMAAAGgKQAFgIAAgRIgBgNQgBgGgCgEQgCgFgEgDQgEgDgHAAQgMAAgFAKg");
	this.shape_4.setTransform(-2.7,2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAQA0IAAgqIgfAAIAAAqIgeAAIAAhnIAeAAIAAApIAfAAIAAgpIAeAAIAABng");
	this.shape_5.setTransform(-14.7,2.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWA0IAAhQIgCAAIgbBQIgqAAIAAhnIAdAAIAABQIABAAIAbhQIAqAAIAABng");
	this.shape_6.setTransform(-26.8,2.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAZBLIgshAIgKAAIAABAIggAAIAAiVIAgAAIAABAIAKAAIAthAIAiAAIg3BKIA4BLg");
	this.shape_7.setTransform(-39.3,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.1,-15.3,98.2,30.7);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAVBPIAAhRIgBAAIgbBRIgqAAIAAhoIAcAAIAABQIACAAIAbhQIAqAAIAABogAgbgxQgJgJABgUIAVAAQABAJADAFQAEAFAHAAQAJAAADgFQADgFABgJIAWAAQAAAUgIAJQgIAKgWAAQgTAAgJgKg");
	this.shape.setTransform(28.5,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAVA0IAAhQIgBAAIgbBQIgqAAIAAhnIAcAAIAABQIACAAIAbhQIAqAAIAABng");
	this.shape_1.setTransform(16,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AASA0IgggqIgHAAIAAAqIgdAAIAAhnIAdAAIAAApIAHAAIAfgpIAgAAIgpAzIArA0g");
	this.shape_2.setTransform(5,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAQA0IAAgqIgfAAIAAAqIgeAAIAAhnIAeAAIAAApIAfAAIAAgpIAeAAIAABng");
	this.shape_3.setTransform(-7.3,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgaAzQgKgDgFgIQgGgHgDgLQgCgKAAgMQAAgbAOgNQANgOAaAAQAPAAAKAEQAKAEAGAHQAGAHACALQADAKAAAMQAAAbgOANQgNAOgbAAQgPAAgKgEgAgQgYQgGAJABAQIABANIACALQADAEAEADQADADAHAAQAMAAAGgKQAFgIAAgRIAAgNQgCgGgCgEQgCgFgEgDQgEgDgHAAQgMAAgFAKg");
	this.shape_4.setTransform(-19.2,2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgNA0IAAhRIggAAIAAgWIBbAAIAAAWIggAAIAABRg");
	this.shape_5.setTransform(-30.2,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-15.3,74,30.7);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgaAzQgKgDgFgIQgGgHgDgLQgCgKAAgMQAAgbAOgNQANgOAaAAQAPAAAKAEQAKAEAGAHQAGAHACALQADAKAAAMQAAAbgOANQgNAOgbAAQgPAAgKgEgAgQgYQgGAJABAQIABANIACALQADAEAEADQADADAHAAQAMAAAGgKQAFgIAAgRIAAgNQgCgGgCgEQgCgFgEgDQgEgDgHAAQgMAAgFAKg");
	this.shape.setTransform(43.3,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAQA0IAAgqIgfAAIAAAqIgeAAIAAhnIAeAAIAAApIAfAAIAAgpIAeAAIAABng");
	this.shape_1.setTransform(31.3,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AguA0IAAhnIAeAAIAAAjIAZAAQAIAAAHACQAHADAFAEQAFAEADAFQADAGAAAJQAAAJgDAHQgDAHgGAEQgFAEgHACQgIACgJAAgAgQAfIARAAQAPAAAAgOQAAgGgDgEQgEgEgIAAIgRAAg");
	this.shape_2.setTransform(20.2,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AguA0IgGgBIABgXIADABIADAAIAFgBQADgBABgDQACgDABgFIACgNIABgLIABgQIABgQIAAgMIBRAAIAABoIgeAAIAAhSIgYAAIgCARIgCAUQgCAYgIALQgIALgPAAIgIgBg");
	this.shape_3.setTransform(7.7,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AghA0QgHgCgEgFQgEgFgBgGQgBgGAAgHQAAgKADgHQAEgEAGgEQAGgEAJgCQAJgBAKAAIAGAAIAIAAIAAgEQAAgIgFgGQgFgEgJAAQgJAAgIACQgIACgHAFIgGgTQAJgEAMgDQAMgEANAAQAKAAAJADQAIACAFAFQAFAFACAIQACAJAAANIAAAeQAAAGACADQADADAFgBIAAAUIgLACQgJAAgGgDQgGgDgEgGQgFAGgJADQgHAEgIAAQgLAAgIgDgAgPALQgEADAAAHQAAAGADAEQACADAHAAIAIgBQAFgBAFgEIAAgVIgIAAIgFgBQgKAAgDAFg");
	this.shape_4.setTransform(-3.1,2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgkApQgMgOAAgbQAAg2AzAAQAOAAAJAEQAJAEAFAHQAGAHABAKQACAJAAALIAAAIIhCAAQAAAMAEAGQAGAJAPAAQAMAAAIgCIAOgGIAFASIgIAFIgKADIgNADIgNABQgbAAgMgOgAgHggQgFACgCAEQgCAEgBAHIAAAEIAjAAQAAgLgDgGQgEgGgJAAQgFAAgEACg");
	this.shape_5.setTransform(-14.6,2.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AAkBDIAAgdIhGAAIAAAdIgaAAIAAgzIALAAQAEgIACgIIAEgSIACgWIACgaIBRAAIAABSIAPAAIAAAzgAgNgKQgDAPgEALIAkAAIAAg8IgaAAQgBARgCARg");
	this.shape_6.setTransform(-26.8,4.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAkBLIAAh+IgDAAIgwB+IgyAAIAAiVIAfAAIAAB+IACAAIAwh+IAyAAIAACVg");
	this.shape_7.setTransform(-41.3,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.6,-15.3,103.2,30.7);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAVA0IAAhQIgBAAIgbBQIgqAAIAAhnIAdAAIAABQIABAAIAbhQIAqAAIAABng");
	this.shape.setTransform(39.6,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AASA0IgggqIgHAAIAAAqIgdAAIAAhnIAdAAIAAApIAHAAIAfgpIAgAAIgpAzIArA0g");
	this.shape_1.setTransform(28.6,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAQA0IAAgqIgfAAIAAAqIgeAAIAAhnIAeAAIAAApIAfAAIAAgpIAeAAIAABng");
	this.shape_2.setTransform(16.3,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAVA0IAAhQIgBAAIgbBQIgqAAIAAhnIAcAAIAABQIACAAIAbhQIAqAAIAABng");
	this.shape_3.setTransform(4.2,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgNA0IAAhRIggAAIAAgWIBbAAIAAAWIggAAIAABRg");
	this.shape_4.setTransform(-6.9,2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgwgwIgCgcIAaAAIABAGIAMgFQAIgEAJAAQAXAAALAOQALAOAAAYQAAANgEALQgCAIgGAJQgHAHgJAEQgKAFgNAAQgGAAgHgCIgFgCIAAAyIgeAEgAgPg2IgDACIAAA6IAEABIAKACQAEAAAEgCQAFgCADgDQADgDACgGQACgHAAgLQABghgWAAQgHAAgGAEg");
	this.shape_5.setTransform(-17.5,5.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AghA0QgHgCgEgFQgEgFgBgGQgBgGAAgHQAAgKADgHQAEgEAGgEQAGgEAJgCQAJgBAKAAIAGAAIAIAAIAAgEQAAgIgFgGQgFgEgJAAQgJAAgIACQgIACgHAFIgGgTQAJgEAMgDQAMgEANAAQAKAAAJADQAIACAFAFQAFAFACAIQACAJAAANIAAAeQAAAGACADQADADAFgBIAAAUIgLACQgJAAgGgDQgGgDgEgGQgFAGgJADQgHAEgIAAQgLAAgIgDgAgPALQgEADAAAHQAAAGADAEQACADAHAAIAIgBQAFgBAFgEIAAgVIgIAAIgFgBQgKAAgDAFg");
	this.shape_6.setTransform(-29.1,2.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AASA0IgggqIgHAAIAAAqIgdAAIAAhnIAdAAIAAApIAHAAIAfgpIAgAAIgpAzIArA0g");
	this.shape_7.setTransform(-39.6,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-15.3,96.1,30.7);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgaAzQgJgDgGgIQgGgHgCgLQgDgKAAgMQAAgbAOgNQANgOAbAAQAPAAAJAEQAKAEAGAHQAGAHACALQADAKAAAMQAAAbgOANQgNAOgbAAQgPAAgKgEgAgQgYQgFAJAAAQIAAANIADALQADAEAEADQADADAHAAQAMAAAGgKQAFgIAAgRIAAgNQgCgGgCgEQgCgFgEgDQgEgDgGAAQgNAAgFAKg");
	this.shape.setTransform(38.2,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AguA0IAAhnIA2AAQAQAAAJAGQAKAGAAAOQAAAJgFAFQgFAGgIADQAJACAGAFQAHAGAAALQAAAIgDAFQgDAGgFAEQgEADgHACQgGACgHAAgAgRAfIAUAAQAOAAAAgMQAAgFgEgEQgDgDgHAAIgUAAgAgRgKIAUAAQAGAAADgEQACgDAAgEQAAgEgCgDQgDgDgFAAIgVAAg");
	this.shape_1.setTransform(26.7,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgNA0IAAhRIggAAIAAgWIBbAAIAAAWIggAAIAABRg");
	this.shape_2.setTransform(16,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgiApQgMgNAAgbQAAgbAPgOQAOgOAaAAQAMAAAKAEQALAEAFAGIgRARQgEgGgGgCQgEgCgHAAQgLAAgIAJQgGAHAAASQAAAQAGAIQAFAJANAAQAJAAAHgCQAHgCAHgEIAGATQgGAEgKADQgKADgNAAQgbAAgMgOg");
	this.shape_3.setTransform(6,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgkApQgMgOAAgbQAAg2AzAAQAOAAAJAEQAJAEAFAHQAGAHABAKQACAJAAALIAAAIIhCAAQAAAMAEAGQAGAJAPAAQAMAAAIgCIAOgGIAFASIgIAFIgKADIgNADIgNABQgbAAgMgOgAgHggQgFACgCAEQgCAEgBAHIAAAEIAjAAQAAgLgDgGQgEgGgJAAQgFAAgEACg");
	this.shape_4.setTransform(-5.3,2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAPA0IAAglQgGADgHAAIgKABQgRAAgJgIQgKgIAAgPIAAgnIAeAAIAAAiQAAAJADAEQAEAEAHAAIAIAAIAHgDIAAgwIAeAAIAABng");
	this.shape_5.setTransform(-16.8,2.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AghA0QgHgCgEgFQgEgFgBgGQgBgGAAgHQAAgKADgHQAEgEAGgEQAGgEAJgCQAJgBAKAAIAGAAIAIAAIAAgEQAAgIgFgGQgFgEgJAAQgJAAgIACQgIACgHAFIgGgTQAJgEAMgDQAMgEANAAQAKAAAJADQAIACAFAFQAFAFACAIQACAJAAANIAAAeQAAAGACADQADADAFgBIAAAUIgLACQgJAAgGgDQgGgDgEgGQgFAGgJADQgHAEgIAAQgLAAgIgDgAgPALQgEADAAAHQAAAGADAEQACADAHAAIAIgBQAFgBAFgEIAAgVIgIAAIgFgBQgKAAgDAFg");
	this.shape_6.setTransform(-27.6,2.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AASA0IgggqIgHAAIAAAqIgdAAIAAhnIAdAAIAAApIAHAAIAfgpIAgAAIgpAzIArA0g");
	this.shape_7.setTransform(-38.2,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-15.3,93.1,30.7);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgkApQgMgOAAgbQAAg2AzAAQAOAAAJAEQAJAEAFAHQAGAHABAKQACAJAAALIAAAIIhCAAQAAAMAEAGQAGAJAPAAQAMAAAIgCIAOgGIAFASIgIAFIgKADIgNADIgNABQgbAAgMgOgAgHggQgFACgCAEQgCAEgBAHIAAAEIAjAAQAAgLgDgGQgEgGgJAAQgFAAgEACg");
	this.shape.setTransform(74.6,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgZAzQgLgDgFgIQgGgHgDgLQgCgKAAgMQAAgbANgNQAOgOAaAAQAPAAALAEQAJAEAGAHQAGAHACALQADAKAAAMQAAAbgOANQgNAOgbAAQgPAAgJgEgAgQgYQgFAJgBAQIABANIAEALQACAEAEADQAEADAGAAQANAAAFgKQAFgIAAgRIgBgNQAAgGgDgEQgCgFgEgDQgEgDgHAAQgMAAgFAKg");
	this.shape_1.setTransform(62.8,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAQA0IAAgqIgfAAIAAAqIgeAAIAAhnIAeAAIAAApIAfAAIAAgpIAeAAIAABng");
	this.shape_2.setTransform(50.8,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAQA0IAAgqIgfAAIAAAqIgeAAIAAhnIAeAAIAAApIAfAAIAAgpIAeAAIAABng");
	this.shape_3.setTransform(39.1,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgaAzQgKgDgFgIQgGgHgDgLQgCgKAAgMQAAgbAOgNQANgOAaAAQAPAAAKAEQAKAEAGAHQAGAHACALQADAKAAAMQAAAbgOANQgNAOgbAAQgPAAgKgEgAgQgYQgGAJABAQIABANIACALQADAEAEADQADADAHAAQAMAAAGgKQAFgIAAgRIAAgNQgCgGgCgEQgCgFgEgDQgEgDgHAAQgMAAgFAKg");
	this.shape_4.setTransform(27.1,2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAVA0IAAhQIgBAAIgbBQIgqAAIAAhnIAcAAIAABQIACAAIAbhQIAqAAIAABng");
	this.shape_5.setTransform(14.8,2.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AAbBDIAAgdIhPAAIAAhoIAeAAIAABSIAeAAIAAhSIAeAAIAABSIAPAAIAAAzg");
	this.shape_6.setTransform(2.8,4.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAAA0QgHgEgGgFQgGgGgDgIQgDgJAAgKIgQAAIAAAqIgeAAIAAhnIAeAAIAAAqIAQAAQAEgtAtAAQAOAAAJAEQAJAEAGAHQAFAHADALQACAKAAAMQAAA2g0AAQgMAAgIgDgAAGgZQgEAJAAARIAAAOIADAKQADAFADACQADADAGAAQANAAAFgJQAFgJAAgRIgBgNIgDgLQgCgFgEgCQgDgDgGAAQgNAAgFAJg");
	this.shape_7.setTransform(-11.8,2.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AguA0IgGgBIABgXIADABIADAAIAFgBQADgBABgDQACgDABgFIACgNIABgLIABgQIABgQIAAgMIBRAAIAABoIgeAAIAAhSIgYAAIgCARIgCAUQgCAYgIALQgIALgPAAIgIgBg");
	this.shape_8.setTransform(-26.9,2.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgaAzQgJgDgGgIQgGgHgCgLQgDgKAAgMQAAgbAOgNQANgOAbAAQAPAAAJAEQAKAEAGAHQAGAHACALQADAKAAAMQAAAbgOANQgNAOgbAAQgPAAgKgEgAgQgYQgGAJABAQIABANIACALQADAEAEADQAEADAGAAQAMAAAGgKQAFgIAAgRIAAgNQgBgGgDgEQgCgFgEgDQgEgDgGAAQgNAAgFAKg");
	this.shape_9.setTransform(-38.4,2.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AguA0IAAhnIA2AAQAQAAAJAGQAKAGAAAOQAAAJgFAFQgFAGgIADQAJACAGAFQAHAGAAALQAAAIgDAFQgDAGgFAEQgEADgHACQgGACgHAAgAgRAfIAUAAQAOAAAAgMQAAgFgEgEQgDgDgHAAIgUAAgAgRgKIAUAAQAGAAADgEQACgDAAgEQAAgEgCgDQgDgDgFAAIgVAAg");
	this.shape_10.setTransform(-49.9,2.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgkApQgMgOAAgbQAAg2AzAAQAOAAAJAEQAJAEAFAHQAGAHABAKQACAJAAALIAAAIIhCAAQAAAMAEAGQAGAJAPAAQAMAAAIgCIAOgGIAFASIgIAFIgKADIgNADIgNABQgbAAgMgOgAgHggQgFACgCAEQgCAEgBAHIAAAEIAjAAQAAgLgDgGQgEgGgJAAQgFAAgEACg");
	this.shape_11.setTransform(-61.6,2.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("Ag2BLIAAiVIA3AAQAagBAOAMQAOAMAAAYQAAALgDAJQgFAIgHAHQgGAFgJAEQgJAEgMgBIgcAAIAAA3gAgYgBIAYAAIAIgBQAFgCADgDIAFgJQACgFABgGQgBgIgCgDQgCgFgDgDIgIgEIgIgBIgYAAg");
	this.shape_12.setTransform(-73.4,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.6,-15.3,165.2,30.7);


(lib.Symbol3copy2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pic3();
	this.instance.setTransform(-485,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#141707"],[0,1],-443.8,0,443.8,0).s().p("EhFUAUuMAAAgpbMCKpAAAMAAAApbg");
	this.shape.setTransform(-905.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#141707"],[0,1],443.8,0,-443.8,0).s().p("EhFUAUuMAAAgpbMCKpAAAMAAAApbg");
	this.shape_1.setTransform(908.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1349,-132.6,2700.9,265.3);


(lib.oledLogo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.oledLogo();
	this.instance.setTransform(-146,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146,-20,293,40);


(lib.link = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuDXcMAAAgu3IcHAAMAAAAu3g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol8_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAtIAAhZIA5AAIAAAOIgmAAIAAAXIAlAAIAAAMIglAAIAAAaIAoAAIAAAOg");
	this.shape_6.setTransform(45.6,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag0AtIAAhZIASAAIAABLIAbAAIAAhLIAQAAIAABLIAaAAIAAhLIASAAIAABZg");
	this.shape_7.setTransform(34.9,0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AghAtIAAhZIASAAIAAAhIAQAAQAQAAAIAHQAJAFAAAPQAAAPgJAHQgIAHgQAAgAgPAfIAPAAIAGAAIAEgDQADgCABgCQABgDAAgFQAAgFgBgCQgBgDgDgCIgEgCIgGgBIgPAAg");
	this.shape_8.setTransform(24.5,0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgjAtIgDgBIABgPIACAAIABAAQAGAAADgGQACgHABgNIACgKIAAgOIABgNIAAgKIA6AAIAABZIgSAAIAAhLIgXAAIgBAHIgBAKIAAAMIgBAKQgBAKgCAGQgBAHgEAFQgDAEgDACQgFACgGAAIgFAAg");
	this.shape_9.setTransform(14.9,0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTArQgHgDgFgHQgFgFgCgKQgCgIAAgKQAAgWALgMQAKgMAUAAQALAAAHADQAIAEAFAGQAFAGACAJQACAJAAAJQAAAXgLALQgKANgVAAQgLAAgHgEgAgJgdQgEACgDAEQgDAEgBAHIgBAMIABANQAAAGADAEQADAEAEADQAEACAFAAQAFAAAFgCQAFgCACgEQADgFACgGQABgHAAgGIgBgMQgBgGgDgEQgCgEgEgDQgEgDgGAAQgFAAgFADg");
	this.shape_10.setTransform(6.1,0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiAtIAAhZIA9AAIAAAOIgqAAIAAAUIATAAQAOAAAIAIQAJAFAAANQAAAQgJAGQgIAHgQAAgAgPAfIAQAAIAFAAIAEgDIAEgEQACgDAAgFQAAgEgCgCIgEgFIgEgBIgFgBIgQAAg");
	this.shape_11.setTransform(-2.8,0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AghAtIAAhZIATAAIAAAhIAQAAQAPAAAIAHQAJAFAAAPQAAAPgJAHQgIAHgPAAgAgOAfIAPAAIAEAAIAFgDQACgCABgCQACgDAAgFQAAgFgCgCQgBgDgCgCIgFgCIgEgBIgPAAg");
	this.shape_12.setTransform(-14.9,0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIAtIAAhLIgaAAIAAgOIBGAAIAAAOIgbAAIAABLg");
	this.shape_13.setTransform(-21.9,0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAYAtIgIgXIggAAIgHAXIgUAAIAhhZIAXAAIAfBZgAgLAHIAXAAIgMglIAAAAg");
	this.shape_14.setTransform(-29.4,0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AASAtIAAgnIgjAAIAAAnIgTAAIAAhZIATAAIAAAmIAjAAIAAgmIATAAIAABZg");
	this.shape_15.setTransform(-38.9,0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSAsQgJgBgHgEIAFgOIANAFQAHACAIAAIAFgBQADgBADgCIAEgEQABgDAAgEQAAgHgFgDQgGgDgHAAIgLAAIAAgMIAHAAIAHAAIAGgCQADgBACgCQADgDAAgEQAAgGgFgDQgEgCgFAAQgHAAgGACQgFADgEAEIgKgLQAFgGAJgEQAJgDAJAAQAQAAAIAHQAJAFAAAMQAAAGgFAGQgEAFgGADQAHACAFAEQAFAFAAAJQAAAIgDAFQgDAGgFADQgGAEgHABQgHACgGAAQgHgBgJgCg");
	this.shape_16.setTransform(-47.8,0.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgXAtIgHgCIACgOIAGABIAEABQAGAAADgDQADgCABgEIgihCIAVAAIATAuIACAAIASguIATAAIgeBDIgFAKQgCAEgDADQgCADgEABIgKABIgHAAg");
	this.shape_17.setTransform(-55.8,0.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgXgwIAvAwIgvAxg");
	this.shape_18.setTransform(57.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// Layer 3
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A50034").s().p("AqSCQQgoABgBgoIAAjRQABgoAoABIUlAAQAogBABAoIAADRQgBAogogBg");

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-14.5,140,29);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.blackBlk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.oled = new lib.oledLogo_1();
	this.oled.setTransform(-35,-37,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.oled).wait(1));

	// Layer 1 copy 3
	this.t2 = new lib.Symbol17();
	this.t2.setTransform(568.1,-46.9,1.56,1.56);

	this.t1 = new lib.Symbol16();
	this.t1.setTransform(568.1,-77.1,1.56,1.56);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.8,-96.8,893.6,75.9);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy 3
	this.t2 = new lib.Symbol11();
	this.t2.setTransform(0.1,12.4);

	this.t1 = new lib.Symbol10();
	this.t1.setTransform(0.1,-12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.4,-27.7,111,55.4);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy 3
	this.t2 = new lib.Symbol8();
	this.t2.setTransform(-58.1,12.4);

	this.t1 = new lib.Symbol7();
	this.t1.setTransform(-43.5,-12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.1,-27.7,103.2,55.4);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy 3
	this.t3 = new lib.Symbol6();
	this.t3.setTransform(47.1,12.4);

	this.t2 = new lib.Symbol5();
	this.t2.setTransform(-48.6,12.4);

	this.t1 = new lib.Symbol4();
	this.t1.setTransform(-12.5,-12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.1,-27.7,190.3,55.4);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D1011").s().p("AgJAZIAAgxIATAAIAAAxg");
	this.shape.setTransform(86.8,168.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D1011").s().p("AgWAFIAAgJIAtAAIAAAJg");
	this.shape_1.setTransform(71.3,186.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E6163").s().p("AgWAFIAAgJIAtAAIAAAJg");
	this.shape_2.setTransform(71.3,185.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D1011").s().p("AgWAFIAAgJIAtAAIAAAJg");
	this.shape_3.setTransform(71.3,184.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5E6163").s().p("AgWAFIAAgJIAtAAIAAAJg");
	this.shape_4.setTransform(71.3,183.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D1011").s().p("AgWAFIAAgJIAtAAIAAAJg");
	this.shape_5.setTransform(71.3,182.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5E6163").s().p("AgWAFIAAgJIAtAAIAAAJg");
	this.shape_6.setTransform(71.3,181.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D1011").s().p("AgWAFIAAgJIAtAAIAAAJg");
	this.shape_7.setTransform(71.3,180.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5E6163").s().p("AgWAFIAAgJIAtAAIAAAJg");
	this.shape_8.setTransform(71.3,179.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D1011").s().p("AgWAFIAAgJIAtAAIAAAJg");
	this.shape_9.setTransform(71.3,178.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5E6163").s().p("AgWAFIAAgJIAtAAIAAAJg");
	this.shape_10.setTransform(71.3,177.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D1011").s().p("AgWAFIAAgJIAtAAIAAAJg");
	this.shape_11.setTransform(71.3,176.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#505F5F").s().p("AgIP4IAA/vIASAAIAAfvg");
	this.shape_12.setTransform(70.5,-16.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1B1C1D").s().p("AgIIHIAAwNIASAAIAAQNg");
	this.shape_13.setTransform(70.5,136.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	// Layer 3
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2D2729").s().p("Ag+oGIB9A4IAAPAIh9AVg");
	this.shape_14.setTransform(77.7,136.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	// Layer 4
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#171515").s().p("AgUhrIApAMIAADFIgpAGg");
	this.shape_15.setTransform(84,176.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

	// Layer 5
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#F3F4F3","#A5A6A5","#878A89","#878A89"],[0,1,1,1],13.2,0,-13.1,0).s().p("AgwgUICzgpIAAA9IkFA+g");
	this.shape_16.setTransform(56.1,183.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#C3C6C5","#B7BAB9","#A3A6A5","#868988","#5C5F5F"],[0,0.255,0.467,0.769,1],-8.5,0,8.6,0).s().p("AhUAAIAAg9IB0ApIA1BSg");
	this.shape_17.setTransform(94.7,183.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	// Layer 6
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#FFFFFF","#CDCDCD"],[0,1],13.4,-3.1,-12.9,3.2).s().p("AiCAZIEFg9IAAAMIkFA9g");
	this.shape_18.setTransform(56.1,187.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#878787","#3A3A3A"],[0,1],-8.7,-3.1,8.4,3.2).s().p("AhUgYIAAgMICpA9IAAAMg");
	this.shape_19.setTransform(94.7,187.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18}]}).wait(1));

	// Layer 8
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.357)"],[0,1],-58.8,-1.9,67.1,4.8).s().p("AruAVICEhfIVZA4IhSBdg");
	this.shape_20.setTransform(-24,183.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1));

	// Layer 9
	this.instance = new lib.Symbol22();
	this.instance.setTransform(72.3,186.3,1.676,0.382,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 10
	this.instance_1 = new lib.Symbol23();
	this.instance_1.setTransform(74,191,1.544,0.502);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-309,-118.4,766,433.8);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aw6JqIAAy/IM3gUIIBAAIM9AAIAATTg");
	mask.setTransform(0.9,-5.1);

	// tv
	this.tv = new lib.Symbol18();
	this.tv.setTransform(0.9,-5.1);

	this.tv.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.tv).wait(1));

	// Layer 1
	this.instance = new lib.pic4TV();
	this.instance.setTransform(-111,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111,-69,223,139);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlmPAIjHgwIvEAAIAA9PMAvjAAAIAAdPIu3AAIjjAwg");
	mask.setTransform(57.6,2.9);

	// Layer 2
	this.mc = new lib.Symbol3copy2();

	this.mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.6,-93.2,304.4,192.1);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol12();
	this.mc.setTransform(1.4,-1);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1347.6,-133.6,2700.9,265.3);


(lib.Symbol3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.a2 = new lib.Symbol111();
	this.a2.setTransform(182.8,-80,1,1,0,0,180);

	this.a1 = new lib.Symbol111();
	this.a1.setTransform(179.8,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.a1},{t:this.a2}]}).wait(1));

	// Layer 1
	this.instance = new lib.Symbol21();
	this.instance.setTransform(139,-21,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 6
	this.instance_1 = new lib.Symbol24();
	this.instance_1.setTransform(559.2,0,1.11,1,0,0,180);

	this.instance_2 = new lib.Symbol24();
	this.instance_2.setTransform(-559.2,0,1.11,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Layer 5
	this.instance_3 = new lib.Symbol23();
	this.instance_3.setTransform(-79.8,-134.4,2.452,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.157)","rgba(255,255,255,0)"],[0,1],-0.1,85.6,-0.1,-85.4).s().p("Ei4wAOkIAA9HMFxhAAAIAAdHg");
	this.shape.setTransform(-11.1,-37.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.537)","rgba(255,255,255,0)"],[0,1],-0.1,-21.7,-0.1,21.8).s().p("Ei4wADtIAAnZMFxhAAAIAAHZg");
	this.shape_1.setTransform(-11.1,80.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.instance_4 = new lib.Symbol20();
	this.instance_4.setTransform(-868,0);

	this.instance_5 = new lib.Symbol20();
	this.instance_5.setTransform(-578,0,1,1,0,180,0);

	this.instance_6 = new lib.Symbol20();
	this.instance_6.setTransform(-288,0,1,1,0,180,0);

	this.instance_7 = new lib.Symbol20();

	this.instance_8 = new lib.Symbol20();
	this.instance_8.setTransform(295,0,1,1,0,180,0);

	this.instance_9 = new lib.Symbol20();
	this.instance_9.setTransform(584,0);

	this.instance_10 = new lib.Symbol20();
	this.instance_10.setTransform(870,0,1,1,0,180,0);

	this.instance_11 = new lib.Symbol20();
	this.instance_11.setTransform(1150,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1193.6,-332.9,2537.7,501.2);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyyKpIAA06MAllgDJIAAa1g");
	mask.setTransform(155.3,-4.5);

	// Layer 1 copy
	this.tv = new lib.Symbol19();
	this.tv.setTransform(144.1,-3.7,1,1,0,0,0,143.6,-3.7);

	this.tv.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.tv).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(198,199,196,0)","#C6C7C4","#ACADA9"],[0,0.043,1],-388,0,387.9,0).s().p("Eg8mATiMAAAgnDMB5NAAAMAAAAnDg");
	this.shape.setTransform(676.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.pic1();
	this.instance.setTransform(-336,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E5E5E5","#ECECEC"],[0,1],-308,0,467.9,0).s().p("EhJGATiMAAAgnDMCSNAAAMAAAAnDg");
	this.shape_1.setTransform(-803.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1271.2,-125,2335.2,250);


(lib.sprite36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gr
	this.gr = new lib.Symbol35();
	this.gr.setTransform(17.6,2.5);

	this.timeline.addTween(cjs.Tween.get(this.gr).wait(1));

	// wt
	this.wt = new lib.Symbol35copy();
	this.wt.setTransform(17.6,2.5);

	this.timeline.addTween(cjs.Tween.get(this.wt).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqAEAQich4hcigQA9BlBZBYQCGCHCuBHQCtBIC9AAQC3AACqhFQCkhCCCh6QCBh6BNidQBPikAMi2IABgPIAMAAQgKDFhRCsQhOCiiFB8QiDB5ilBCQinBDivAAQlKAAkDjHg");
	this.shape.setTransform(-18.2,3,0.108,0.108);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Al0AwIAAhfILpAAQgRAHhjAHQjFANmVAAIAABEg");
	this.shape_1.setTransform(-11.6,-2.5,0.108,0.108);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwoiIBhAAIAAAeIhCAAQAAIwgQE0QgHCZgIAqg");
	this.shape_2.setTransform(-18.9,-2.5,0.108,0.108);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhBAAIg6gJID3AAIAAATQhvAAhOgKg");
	this.shape_3.setTransform(-17,2.5,0.108,0.108);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjwNzQiUiUhPi/QhPi/AAjRQAAjTBSjCQBQi8CQiRQCRiRC6hPQDChTDUAAIAyABQjuAKjKBaQi+BWiNCWQiKCThKC/QhKDBAADVQAADLBLC7QBKC5CMCTIgTgTg");
	this.shape_4.setTransform(-24.3,-4,0.108,0.108);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah0BSQgRgfABgjQgBg8AtgsQAsgsA7AAQAkAAAgAQQAeAQAVAbQgpgggzAAQg7AAgsAsQgtAsABA8QAAAxAeApQgagVgPgeg");
	this.shape_5.setTransform(-23.4,-7,0.108,0.108);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFFFFF","#FFFFFF","#FBFCFC","#EEF2F4","#DAE2E6","#D0DADF"],[0,0.349,0.537,0.729,0.925,1],-6.2,-5.4,0,-6.2,-5.4,23.3).s().p("AhoBqQgtgsABg+QgBg8AtgsQAsgsA8AAQA+AAArAsQAsAsAAA8QAAA+gsAsQgrArg+AAQg8AAgsgrg");
	this.shape_6.setTransform(-23.2,-6.8,0.108,0.108);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFFFFF","#FFFFFF","#FBFCFC","#EEF2F3","#DAE1E5","#C0CCD2"],[0,0.349,0.51,0.678,0.847,1],-42.1,-44.2,0,-42.1,-44.2,160).s().p("AmPPHQi/hQiUiUQiUiUhPi/QhPi/AAjRQAAjRBRjCQBOi6CPiRQCPiQC6hRQC/hTDSgDIA+ABIAABiIgyAAQi8AAitBHQitBIiHCGQiGCGhICtQhHCtAAC9QAAC+BHCtQBICtCGCGQCHCHCtBHQCtBIC8AAQC4AACqhFQClhCCBh6QCCh6BMifQBPikANi2IAAgPIqHAAIAAhfILqAAIAAAuQAADRhPC/QhPC/iUCUQiUCVi/BPQi/BPjRAAQjQAAi/hPgAgwIjIAAxFIBiAAIAAPjID4AAIAABig");
	this.shape_7.setTransform(-18.9,-2.5,0.108,0.108);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#B3BBC1","#A6AEB4","#636B70","#3A4246","#2A3236"],[0,0.082,0.522,0.839,1],-1.2,0,1.2,0).s().p("AgKAmIAAhLIAVgYIAAB7g");
	this.shape_8.setTransform(-18.4,-13.3,0.108,0.108);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B4BDC3").s().p("AgLg8IAXAZIAABHIgXAZg");
	this.shape_9.setTransform(-15.7,-2.4,0.108,0.108);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#B4BDC3","#485159"],[0,1],95.2,0,-95.2,0).s().p("AgLO/Qi7gCithJQirhIiHiGQiHiIhJivQhIivAAjAQAAi/BIivQBJiwCHiHQCHiFCqhJQCrhIC8gDIAzABIAZAYIg/gBQi5AAirBHQiqBHiGCEQiDCEhHCrQhHCrAAC6QAAC6BHCrQBHCrCDCFQCFCECrBGQCrBIC5gBQC1AACmhDQCihBCBh4QCAh4BMidQBPiiAMi1IAZgYIgBAbQgNC3hPClQhMCgiCB7QiCB6ikBFQiqBFi3ADg");
	this.shape_10.setTransform(-18.9,-2.5,0.108,0.108);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#B4BDC3","#3E454D"],[0,1],-84,-65.2,66,84.8).s().p("AmVPTQjBhQiWiWQiViXhQjBQhQjBAAjUQAAjWBTjEQBQi/CTiTQCSiSC/hQQDEhUDWAAIA+ABIgXAXIgnAAQjRAAjABSQi6BPiPCPQiPCPhPC6QhRDAAADRQAADPBOC8QBOC9CTCTQCSCTC9BPQC9BNDOAAQDPAAC9hNQC9hPCTiTQCSiTBOi9QBOi8AAjPIAAgjIAYgZIAAA8QAADUhQDBQhPDBiWCXQiWCWjCBQQjBBQjUAAQjTAAjChQg");
	this.shape_11.setTransform(-18.9,-2.5,0.108,0.108);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8F9CA4").s().p("AmBgLIMDgBIgYAYIrTABg");
	this.shape_12.setTransform(-11.6,-3,0.108,0.108);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#505C61").s().p("AlOAMIAYgXIKFABIgYAWg");
	this.shape_13.setTransform(-12.2,-1.9,0.108,0.108);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#ABBAC2","#262A30"],[0,1],-11.4,-11.4,11.5,11.5).s().p("AhyBzQgwgwAAhDQAAhBAwgwQAwgwBCAAQBDAAAwAwQAwAwAABBQAABDgwAwQgwAvhDAAQhCAAgwgvgAhhhgQgpAoAAA4QAAA5ApApQApAoA4AAQA5AAAogoQApgpAAg5QAAg4gpgoQgogpg5AAQg4AAgpApg");
	this.shape_14.setTransform(-23.2,-6.8,0.108,0.108);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B4BDC3").s().p("AgLowIAWAYIABQwIgXAYg");
	this.shape_15.setTransform(-19.5,-2.5,0.108,0.108);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#B3BBC1","#A6AEB4","#636B70","#3A4246","#2A3236"],[0,0.082,0.522,0.839,1],-1.2,0,1.2,0).s().p("AgLAkIAAhJIAXgXIAAB5g");
	this.shape_16.setTransform(-15.7,2.9,0.108,0.108);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#B4BDC3","#AEB7BD","#6C737A","#434950","#333940"],[0,0.039,0.498,0.831,1],-1.3,0,1.4,0).s().p("AgNnmIAagXIAAPlIgZAWg");
	this.shape_17.setTransform(-18.3,-3,0.108,0.108);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8D9AA1").s().p("Ag/gKIB/AAIgcAVIhLAAg");
	this.shape_18.setTransform(-18.9,-8.4,0.108,0.108);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8699A3").s().p("AiIALIAegVIDzAAIgZAVg");
	this.shape_19.setTransform(-17,2.4,0.108,0.108);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#626D77").s().p("Ai6AMIAZgWIFDgBIAZAXg");
	this.shape_20.setTransform(-17.6,3.5,0.108,0.108);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#CD425C","#BE3351","#AA1F43","#9B1039","#930833","#900531"],[0,0.09,0.251,0.431,0.647,1],-85.6,-65.2,65.6,86).s().p("AmXPjQjDhOiViUQiXiWhRjCQhRjBAAjUQAAjXBOjGQBMjBCMiVQCNiWC5hSQDAhWDYAAIAagJIAxgHIAXAcIACADIABAIIAABmQAAAIgHAAIg4ABQmQAJkOEKQiECDhGCuQhECrAAC8QAAC7BHCrQBHCqCFCFQCFCECsBHQCsBHC6AAQC2AACohEQCjhBCBh4QCBh4BNidQBPiiAMi0IqHAAIgFgBIgBgCIgUgZIAAh6IMGgBIAZAWIAAA7QAADVhRDBQhQDBiXCWQiWCWjEBPQjCBPjVAAQjYAAi/hLgAg+I1IgYgRIAfgSIAAwdIgIgNIAIgCIAAgCIAFAAIBcggIAQAdIACACIABAGIgBPAIDjAAIASAcQADAEAAAIIAABhQAAAHgHABIlaAAIgBAAQgJAAgHgFgAoMkQQgxgxAAhFQAAhFAxgxQAygxBFAAQBGAAAxAxQAxAxAABFQAABFgxAxQgxAxhGAAQhFAAgygxg");
	this.shape_21.setTransform(-18.7,-2.3,0.108,0.108);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#F38895","#EB7588","#D84869","#CA2752","#C21344","#BF0C3F","#BF0C3F"],[0,0.086,0.314,0.518,0.686,0.8,1],-32.9,-90.5,33,90.6).s().p("Am2O8Qi3hAiHiHQiHiHhAi3Qg9ixANjEQANjDBVi6QBYjBCaiaQCoioDUhZQDNhXDSAAQCzAACeA+QCkBBB8B7QCHCHBAC3QA9CxgNDEQgNDDhVC7QhZDBiaCaQiaCajBBYQi6BWjCANQgiACgiAAQigAAiSgzg");
	this.shape_22.setTransform(-20.9,-4.4,0.108,0.108);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#BF0C3F","#BF0C3F","#BD0B3E","#B6093A","#A90534","#99002C"],[0,0.498,0.753,0.859,0.937,1],-4.6,-3.7,0,-4.6,-3.7,130.1).s().p("AnlR/QjhhfisitQiuithejgQhijogBj+QABj9BijoQBejgCuitQCsitDhhfQDohiD9AAQD9AADnBhQDfBeCtCsQCtCrBgDfQBjDmACD9IAAARQgCD9hjDmQhgDfitCsQitCrjfBeQjnBhj9AAQj9AAjohig");
	this.shape_23.setTransform(-18.9,-2.5,0.108,0.108);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.4,-16,67.1,32.4);


(lib.pic4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.tv = new lib.Symbol14();

	this.timeline.addTween(cjs.Tween.get(this.tv).wait(1));

	// Layer 1 copy
	this.glow = new lib.Symbol15();
	this.glow.setTransform(0,0,1,0.502);

	this.timeline.addTween(cjs.Tween.get(this.glow).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-245,-123,490,246.1);


(lib.pic3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.tv = new lib.Symbol9();
	this.tv.setTransform(-1.3,1);

	this.timeline.addTween(cjs.Tween.get(this.tv).wait(1));

	// Layer 1
	this.mc = new lib.Symbol3copy2();

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1349,-132.6,2700.9,265.3);


(lib.pic2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol3copy();

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1193.6,-332.9,2537.7,501.2);


(lib.pic1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol3();
	this.mc.setTransform(-7.5,50.1,1,1,0,0,0,-7.5,50.1);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1271.2,-125,2335.2,250);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var r = this;
		var count = 1;
		var repeat = 2;
		var time2 = 3.0;
		var time3 = time2+5.0;
		var time4 = time3+3.0;
		
		var tl = new TimelineLite();
		tl.fromTo(r.blk, 1.0, {alpha:1}, {alpha:0, ease:Power0.easeNone})
		  .from(r.logo_lg, 1.0, {x:"-=250", alpha:0, ease:Expo.easeOut}, 0.5)
		  .from(r.p1, 1.4, {scaleX:3.0, scaleY:3.0, ease:Expo.easeOut}, 0.0)
		  .from(r.p1.mc.tv, 3.4, {scaleX:3.0, scaleY:3.0, ease:Expo.easeOut}, 0.0)
		  .from(r.p1.mc, 4.0, {scaleX:1.1, scaleY:1.1, ease:Power0.easeNone}, 0.0)
		  .staggerFrom([r.t1.t1, r.t1.t2, r.t1.t3], 0.9, {x:"+=250", alpha:0, ease:Expo.easeOut}, 0.1, 0.50)
		  
		  //2
		  .from(r.p2, 1.4, {scaleX:3.0, scaleY:3.0, alpha:0, ease:Expo.easeOut}, time2)
		  .from(r.p2.mc, 5.0, {x:"+=20", ease:Power0.easeNone}, time2)
		  .staggerFrom([r.t2.t1, r.t2.t2], 1.3, {y:"+=250", alpha:0, ease:Expo.easeOut}, 0.1, time2+0.9)
		  .from(r.p2.mc.a1, 0.8, {x:"-=80", alpha:0, ease:Expo.easeOut}, time2+1.3)
		  .from(r.p2.mc.a2, 1.2, {x:"+=80", alpha:0, ease:Expo.easeOut}, time2+1.3)
		  .staggerTo([r.p2.mc.a1, r.p2.mc.a2], 2.0, {y:"+=100", ease:Expo.easeInOut}, 0.0, time2+2.0)
		  .staggerTo([r.p2.mc.a1, r.p2.mc.a2], 0.6, {scaleX:0.0, scaleY:0.0, ease:Expo.easeIn}, 0.0, time2+4.0)
		  
		  //3
		  .to(r.logo_lg.gr, 0.4, {alpha:0, ease:Power0.easeNone}, time3)
		  .from(r.p3, 1.4, {scaleX:3.0, scaleY:3.0, alpha:0, ease:Expo.easeOut}, time3)
		  .from(r.p3.tv, 1.8, {scaleX:1.5, scaleY:1.5, alpha:0, ease:Expo.easeOut}, time3+0.0)
		  .from(r.p3.tv.mc, 5.0, {scaleX:1.1, scaleY:1.1, ease:Power0.easeNone}, time3)
		  .staggerFrom([r.t3.t1, r.t3.t2], 1.1, {y:"+=10", alpha:0, ease:Expo.easeOut}, 0.1, time3+0.9)
		  
		  //packshot
		  .from(r.blk_black, 0.6, {alpha:0, ease:Power0.easeNone}, time4)
		  .from(r.p4.tv, 1.4, {scaleX:2.5, scaleY:2.5, alpha:0, ease:Expo.easeOut}, time4+0.0)
		  //.from(r.p4.tv.tv, 0.5, {alpha:0, ease:Power0.easeNone}, time4+0.0)
		  .from(r.p4.tv.tv, 2.0, {scaleX:3.5, scaleY:3.5, ease:Expo.easeOut}, time4+0.0)
		  .from(r.p4.glow, 1.0, {alpha:0, ease:Power0.easeNone}, time4+0.5)
		  .staggerFrom([r.t4.oled, r.t4.t1, r.t4.t2], 1.1, {y:"+=50", alpha:0, ease:Expo.easeOut}, 0.1, time4+0.9)
		  .from(r.btn, 0.9, {scaleX:0.0, scaleY:0.0, ease:Elastic.easeOut.config(1.5,0.8)/*, onComplete:btnGlow*/}, time4+1.4)
		  
		  
		  .call(replay)
		  .to(r.blk, 0.6, {alpha:1, ease:Power0.easeNone, onComplete:restart}, 15)
		  ;
		
		
		  
		
		function replay() {
		  if (count == repeat){
		      tl.pause();
		  } else {
		  if (count != repeat) {
			  count++;
			  tl.play();
		  }
		  }
		}
		
		
		function restart() {
			tl.play(0);
		}
		
		TweenMax.to(r.blk, 29.8, {x:0, onComplete:check})
		function check() {
			TweenMax.killAll();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// blk
	this.blk = new lib.blk();
	this.blk.setTransform(0,0,8.333,0.625);

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// logo_lg
	this.logo_lg = new lib.sprite36();
	this.logo_lg.setTransform(-830.7,-18.6,4,4);

	this.timeline.addTween(cjs.Tween.get(this.logo_lg).wait(1));

	// btn
	this.btn = new lib.Symbol8_1();
	this.btn.setTransform(550.8,62.6,2.3,2.3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// t4
	this.t4 = new lib.t4();
	this.t4.setTransform(-362.1,61.7,1.6,1.6);

	this.timeline.addTween(cjs.Tween.get(this.t4).wait(1));

	// p4
	this.p4 = new lib.pic4();
	this.p4.setTransform(0,0.1,1.6,1.6);

	this.timeline.addTween(cjs.Tween.get(this.p4).wait(1));

	// blk_black
	this.blk_black = new lib.blackBlk();
	this.blk_black.setTransform(0,0,6.667,0.417);

	this.timeline.addTween(cjs.Tween.get(this.blk_black).wait(1));

	// t3
	this.t3 = new lib.t3();
	this.t3.setTransform(-339,3.8,2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// p3
	this.p3 = new lib.pic3_1();
	this.p3.setTransform(153,0,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.p3).wait(1));

	// t2
	this.t2 = new lib.t2();
	this.t2.setTransform(-140.2,2.6,2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// p2
	this.p2 = new lib.pic2();
	this.p2.setTransform(-32.6,140.4,1.3,1.3,0,0,0,3.8,111.2);

	this.timeline.addTween(cjs.Tween.get(this.p2).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.setTransform(-210.9,2.6,2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// p1
	this.p1 = new lib.pic1_1();
	this.p1.setTransform(326.2,57.4,1.2,1.2,0,0,0,-6.3,50.1);

	this.timeline.addTween(cjs.Tween.get(this.p1).wait(1));

	// bg_pattern
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EicOAPnIAA/NME4dAAAIAAfNg");
	this.shape.setTransform(0,0,1,1.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1589.3,-436.9,3364.6,651.6);


// stage content:
(lib.lg_tv_728x90 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("./ext_click/?redirect_uri="+encodeURIComponent("http://www.lg.com/ru/lgoled/main.jsp?utm_source=kupi.tut.by&utm_medium=banner100%D1%85200&utm_campaign=ltv"), "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// link
	this.btn = new lib.link();
	this.btn.setTransform(364,45,4.044,0.3);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.link(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg43AHBIAAuBMBxvAAAIAAOBg");
	mask.setTransform(364,45);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.498)").ss(2,1,1).p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	this.shape.setTransform(364,45);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// movie
	this.rolik = new lib.content();
	this.rolik.setTransform(364,45,0.37,0.37);

	this.rolik.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.rolik).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,45,728,90);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;