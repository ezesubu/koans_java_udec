
var __ = "incomplete";

// ignore this. It simplifies determining array equality
Array.prototype.equalTo = function(compareTo) {
	if (this.length !== compareTo.length) {
		return false;
	}
	for(var i = 0; i < compareTo.length; i++) {
		if (this[i] !== compareTo[i]) {
			return false;
		}
	}
	return true;
};

(function() {

	var lastAssertLogReason, ignoreFurtherFailures = false;
	var zenMessages = [
		"El fuerte superará un obstáculo; el sabio, todo el camino.",
"No temas demorarte, ten miedo a detenerte.",
"La felicidad de un tonto también es tonta.",
"Que hayas tropezado y caído no significa que vayas por el camino equivocado.",
"La cabaña donde te ríes es más reconfortante que el palacio donde te aburres.",
"Siempre mira las cosas desde el lado positivo, si no lo hay, frota los lados oscuros hasta que brillen.",
"Lo que suceda, sucede a tiempo.",
"Aquel que señala tus defectos no siempre es tu enemigo; aquel que habla sobre tus virtudes no siempre es tu amigo.",
"No te preocupes si no sabes algo, preocúpate si no quieres aprender.",
"Los maestros sólo te abren las puertas, el resto del camino lo harás por tu cuenta",
"Por mucho que sople el viento, la montaña no se inclinará ante él.",
"Vive con paz en tu alma. Vendrá el tiempo y las flores florecerán solas.",
"No hay amigos sin defectos; si les buscas defectos, te quedarás sin amigos.",
"La desgracia entra por la puerta que tú le abres.",
"Nadie regresa de sus viajes siendo el mismo que era antes.",
"Aquellos que son capaces de ruborizarse, no pueden tener un corazón negro.",
"Es mejor ser una persona por un día, que ser una sombra por mil días.",
"Tu casa está ahí donde están tus pensamientos.",
"La persona que pudo mover la montaña empezó moviendo unas piedras pequeñas.",
"Si cometes un error, es mejor reír de inmediato.",
"El mejor tiempo para sembrar un árbol fue hace 20 años. El siguiente mejor tiempo es hoy.",
"Lo que determina el estado de felicidad o infelicidad de cada persona no es el evento en si mismo, sino lo que el evento significa para esa persona.",
"Al igual que los padres cuidan de sus hijos, deberías tener en cuenta a todo el universo.",
"El vaso no esta ni medio lleno, ni medio vacío. El vaso es simplemente un vaso y su contenido esta perpetuamente cambiando con tu percepción.",
"Una cosa: tienes que andar y crear el camino andando; no encontrarás un camino ya hecho. No es barato alcanzar la mayor realización de la verdad. Tendrás que crear el camino andando tu solo; el camino no está ya hecho esperándote. Es justo como el cielo: los pájaros vuelan pero no dejan huellas. No los puedes seguir; no hay huellas detrás."
	];

	QUnit.config.reorder = false;

	QUnit.done(function(results) {
		var failures = results.failed;
		var total = results.total;
		if (failures > 0) {
			var failed = $('ol#qunit-tests > li.fail');
			failed.hide();
			$(failed[0]).show();
		}
		if (failures < total) {
			$('h3.welcome_message').hide();
		}
		if (failures > 0) {
			$("#zen-help").show();
		}
		$("body").scrollTop($(document).height());
	});

	QUnit.log(function(result) {
		lastAssertLogReason = result.message;
	});

	QUnit.testDone(function(result) {
		var message;
		if (!ignoreFurtherFailures && result.failed > 0) {
			ignoreFurtherFailures = true;
			message = "" + randomZenMessage() + "\nIntenta concentrarte y meditar sobre: " + result.module + ": " + result.name + " (" + lastAssertLogReason + ")";
			$("#zen-help").html(message.replace(/\n/g, "<br /><br />"));
			console.log(message);
		}
	});

	function randomZenMessage() {
		var randomIndex = Math.floor(Math.random() * zenMessages.length);
		var zenMessage = zenMessages[randomIndex];
		zenMessage = zenMessage.charAt(0).toUpperCase() + zenMessage.substr(1);
		return "" + zenMessage + ".";
	}

})();
