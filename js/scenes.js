function TitleScene(core)
{
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
		core.replaceScene(CookScene(core));
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
	
	var ojisan = new Sprite(264,263);
	ojisan.image = core.assets["img/ojisan.png"];
	ojisan.x = 50;
	ojisan.y = 500;
	cook_scene.addChild(ojisan);

	cook_scene.message_count = 0;
	cook_scene.doing_timer = false;
	var message = new Label();
	message.x = 0;
	message.y = 300;
	message.width = 600;
	message.font ='32px "Arial"';
	message.text = "そばおじさん";
	message.on('touchstart',function()
	{
		if(scenario.length == cook_scene.message_count)
		{
			core.replaceScene(TitleScene(core));
			return;
		}
		now_message = scenario[cook_scene.message_count];
		
		if(cook_scene.doing_timer)
			return;
		switch(now_message.type)
		{
			case "text":
				this.text = now_message.text;
				cook_scene.message_count++;
			break;
			
			case "timer":
				cook_scene.doing_timer = true;
				cook_scene.timer_count = now_message.time;
				cook_scene.start_date = new Date();
				this.text = now_message.time;
		}
	});
	message.on("enterframe",function()
	{
		if(cook_scene.doing_timer)
		{
			var now_date = new Date();
			var diff_time = now_date.getTime() - cook_scene.start_date.getTime(); 
			var timer = cook_scene.timer_count - (diff_time/1000);
			if(timer >= 0 )
			{
				this.text = Math.floor(timer);
			}
			else
			{
				cook_scene.doing_timer = false;
				cook_scene.message_count++;
			}
		}
	});
	cook_scene.addChild(message);
	return cook_scene;
}
