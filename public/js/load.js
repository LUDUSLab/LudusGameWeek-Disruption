var LoadState = { preload: preload, create:create, update:update}

function preload()
{
	game.load.image('loading','assets/images/loading.png');
}

function create()
{
	var bg = game.add.sprite(game.world.centerX,game.world.centerY,'loading');
	bg.anchor.set(0.5);
	_link.requestRoom();
}

function update()
{

	if(true)
		game.state.start('GameState');
}

function start()
{
	//game.state.start('LoadState');
}