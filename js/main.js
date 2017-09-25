var DISP_W = 600;
var DISP_H = 800;
enchant();
window.onload = function()
{
	var core = new Core(DISP_W,DISP_H);
	core.preload("img/soba.png");
	core.preload("img/ojisan.png");
	core.preload("img/doujou.jpg");

	core.onload = function()
	{
		console.log("ccc");
		var title_scene = TitleScene(core);


		core.pushScene(cook_scene);
		core.pushScene(title_scene);
	};
	core.start();
};
