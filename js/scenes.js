function TitleScene(core)
{
	console.log("bbbbb");
	var title_scene = new Scene();
	var doujou = new Sprite(1920 , DISP_H);
	doujou.image = core.assets["img/doujou.jpg"];
	doujou.x = -960+300;
	doujou.y = 0;
	title_scene.addChild(doujou);

	var soba_scale = 0.5;
	var soba = new Sprite(400,400);
	soba.image = core.assets["img/soba.png"];
	soba.x = -50;
	soba.y = 400;
	soba.scaleX = soba_scale;
	soba.scaleY = soba_scale;
	title_scene.addChild(soba);

	var ojisan = new Sprite(264,263);
	ojisan.image = core.assets["img/ojisan.png"];
	ojisan.x = 300;
	ojisan.y = 400;
	ojisan.on('touchstart',function()
	{
		core.replaceScene(CookScene());
	});
	title_scene.addChild(ojisan);

	var label = new Label();
	label.x = 150;
	label.y = 100;
	label.width = 400;
	label.font ='64px "Arial"';
	label.text = "そばおじさん";
	title_scene.addChild(label);

	return title_scene;
}

function CookScene(core)
{
	var cook_scene = Scene();

	var doujou = new Sprite(1920 , DISP_H);
	doujou.image = core.assets["img/doujou.jpg"];
	doujou.x = -960+300;
	doujou.y = 0;
	cook_scene.addChild(doujou);
	
	return cook_scene;
}
