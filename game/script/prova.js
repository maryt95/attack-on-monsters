function init () {
	
}

function attacca_goblin() {

	var numero_random = Math.floor((Math.random() * 4) + 1);
	var str = "HP_personaggio"+numero_random;
	var personaggio_attaccato = document.getElementById(str).innerHTML;
	var integer = parseInt(personaggio_attaccato);

	var numero_hp_danno = Math.floor((Math.random() * 10));

	if (integer>=numero_hp_danno){
	  	document.getElementById(str).innerHTML = integer-numero_hp_danno;}
	}
	

function attacca_personaggio() {

	var numero_random = Math.floor((Math.random() * 4) + 1);
	var str = "HP_goblin"+numero_random;
	var goblin_attaccato = document.getElementById(str).innerHTML;
	var integer = parseInt(goblin_attaccato);

	var numero_hp_danno = Math.floor((Math.random() * 10));

	if (integer>=numero_hp_danno){
	  	document.getElementById("HP_goblin"+numero_random).innerHTML = integer-numero_hp_danno;}
	}



function magia_goblin() {

    var numero_random = Math.floor((Math.random() * 4) + 1);
    var vittima = "HP_personaggio"+numero_random;
	var attaccante = "MP_goblin"+numero_random;

	var personaggio_attaccato = document.getElementById(vittima).innerHTML;
	var mp_goblin_attaccante = document.getElementById(attaccante).innerHTML;

	var integer_hp = parseInt(personaggio_attaccato);
	var integer_mp = parseInt(mp_goblin_attaccante);

	var numero_mp_necessari_per_attaccare = Math.floor(Math.random() * 5);
	var numero_hp_danno = Math.floor(Math.random() * 15);

	//console.log(vittima);
	//console.log(attaccante);
	//console.log("personaggio attaccato "+personaggio_attaccato);
	//console.log("mp_goblin_attaccante "+mp_goblin_attaccante);
	//console.log("integer_hp "+integer_hp);
	//console.log("integer_mp "+integer_mp);
	//console.log("numero_mp_necessari_per_attaccare "+numero_mp_necessari_per_attaccare);
	//console.log("numero_hp_danno "+numero_hp_danno);

	if (integer_mp>=numero_mp_necessari_per_attaccare) {
		// se ho abbastanza mp
	  	document.getElementById(attaccante).innerHTML = integer_mp-numero_mp_necessari_per_attaccare; // scalo gli mp per attacco
		if (integer_hp>=numero_hp_danno) {
		 	// se il PG ATTACCATO NON è morto
		 	document.getElementById(vittima).innerHTML = integer_hp-numero_hp_danno; // scalo gli hp di danno
			}
		}
	}


function magia_personaggio() {

  	var numero_random = Math.floor((Math.random() * 4) + 1);
    var vittima = "HP_goblin"+numero_random;
	var attaccante = "MP_personaggio"+numero_random;

	var goblin_attaccato = document.getElementById(vittima).innerHTML;
	var mp_personaggio_attaccante = document.getElementById(attaccante).innerHTML;

	var integer_hp = parseInt(goblin_attaccato);
	var integer_mp = parseInt(mp_personaggio_attaccante);

	var numero_mp_necessari_per_attaccare = Math.floor((Math.random() * 5))
	var numero_hp_danno = Math.floor((Math.random() * 15));

	if (integer_mp>=numero_mp_necessari_per_attaccare) {
	  	document.getElementById(attaccante).innerHTML = integer_mp-numero_mp_necessari_per_attaccare; // scalo gli mp per attacco
		}
	 if (integer_hp>10) {
	 	document.getElementById(vittima).innerHTML = integer_hp-numero_hp_danno; // scalo gli hp di danno
		}
	}