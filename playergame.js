// creating players and their attributes
$(document).ready(function() {

	var player1 = {

		hps:115,
		ap: 7,
		cap: 15
		
	};

	var player2 = {

		hps: 170,
		ap: 10,
		cap: 8
		
	};

	var player3 = {

		hps: 190,
		ap: 17,
		cap: 20

	};

	var player4 = {

		hps: 135,
		ap: 14,
		cap: 8

	};


	var playersArray = [player1, player2, player3, player4];




	$( "#one" ).data( "player-name", 1 );
	$( "#two" ).data( "player-name", 2 );
	$( "#three" ).data( "player-name", 3 );
	$( "#four" ).data( "player-name", 4 );

	// // attaching the object data to the div
	var po = $( "#one" ).data( "player-Name", 1 );
	var pt = $( "#two" ).data( "player2", { hps: 170, ap: 10, cap: 8 } );
	var pth = $( "#three" ).data( "player3", { hps: 190, ap: 17, cap: 20 } );
	var pf = $( "four" ).data( "player4", { hps: 135, ap: 14, cap:6 } );

	// setting variables
	var z = 0;
	var main;
	var enemy;

	// placing the health points on the DOM
	var o = $( '#one' ).text( "115" );
	var t = $( '#two' ).text( "170" );
	var th = $( '#three' ).text( "190" );
	var f = $( '#four' ).text( "135" );

	var userCharacter;
	var currentEnemyCharacter;

	var hasUserPicked = false;
		
	// setting the main and enemy players
	$(".playing").click(function() {
		$this = $(this);
		var playerNameAttributeNumber = $this.data("player-name");
		var selectedCharacter = playersArray[playerNameAttributeNumber - 1];

		if(!hasUserPicked) {
			userCharacter = selectedCharacter;
			console.log(userCharacter);
			$("#main").append($(this));

			hasUserPicked = true;
		} else {
			currentEnemyCharacter = selectedCharacter;
			$("#enemy").append($(this));
			console.log("User has already picked!!!!")
		}
		

	});

	// $(".playing").click(function() {
	// 	if ( main = -1 ) {

	// 		$("#enemy").append($(this));
	// 		enemy = this.data;
	// 	}
	// });

	// $( "#one" ).click(function() {
	//   	if ( main ) {

	//   		$("#main").append($("#one"));
	//   		main == po.data();

	//   	}
	//   	else {
	//   		$("#enemy").append($("#one"));
	//   		enemy == po.data();
	//   	}
		
	// });

	// $( "#two" ).click(function() {
	  
	//   	if ( !$("#main").append(playmates[i])) {

	//   		$("#main").append($("#two"));
	//   		main == pt.data();
	  		

	//   	}

	//   	else {

	  		

	//   		$("#enemy").append($("#two"));
	//   		enemy == pt.data();

	//   	}

	// });

	// $( "#three" ).click(function() {
	  
	//   	if ( !$("#main").append(playmates[i])) {

	//   		$("#main").append($("#three"));
	//   		main == pth.data();
	  		
	//   	}

	//   	else {

	  		

	//   		$("#enemy").append($("#three"));
	//   		enemy == pth.data();

	// 	}	

	// });

	// $( "#four" ).click(function() {

	// 	if ( !$("#main").append(playmates[i])) {

	// 		$("#main").append($("#four"));
	// 		main == pf.data();
	// 	}

	// 	else {
	// 		$("#enemy").append($("#four"));
	// 		enemy == pf.data();
	// 	}
	// });

});
// function to make attack function into a number
function attack () {

	//current enemy loses hp points equal to user character's attack
	//user character loses hp eq


	var z = 0;
	var A = parseInt( (main.ap + (main.ap * z++)) );

}

// how the game works
// function game() {

// 	parseInt( (main.ap + (main.ap * z++)) );
// 	var c = event.click;
		
// 		$("#attackbutton").click(function() {

// 			enemy.hps -= attack;

// 		});

// 		$("#attackbutton").click(function() {
// 			trigger( c = $("#attackbutton")) {


// 		}



// 		// setting the 
// 		if (enemy.hps === 0) {




// 		}
	
	
// });




		



	

	





