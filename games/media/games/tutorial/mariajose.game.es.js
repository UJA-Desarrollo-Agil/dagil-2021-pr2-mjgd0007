        // ---------------------------------------------------------------------------
        // Edit this file to define your game. It should have at least four
        // sets of content: undum.game.situations, undum.game.start,
        // undum.game.qualities, and undum.game.init.
        // ---------------------------------------------------------------------------

        /* A unique id for your game. This is never displayed. I use a UUID,
         * but you can use anything that is guaranteed unique (a URL you own,
         * or a variation on your email address, for example). */
        undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

        /* A string indicating what version of the game this is. Versions are
         * used to control saved-games. If you change the content of a game,
         * the saved games are unlikely to work. Changing this version number
         * prevents Undum from trying to load the saved-game and crashing. */
        undum.game.version = "1.0";

        /* A variable that changes the fade out speed of the option text on
         * a mobile. */
        undum.game.mobileHide = 2000

        /* A variable that changes the options fade out speed. */
        undum.game.fadeSpeed = 1500

        /* A variable that changes the slide up speed after clicking on an
         * option. */
        undum.game.slideUpSpeed = 500

        /* The situations that the game can be in. Each has a unique ID. */
        undum.game.situations = {
            inicio: new undum.SimpleSituation(
                "<h1>Casa de campo, mediodía</h1>\
                <center><img src='media/games/tutorial/casa.jpg'></center>\
                <p>Julio, fin de exámenes, comienza el verano. Mis amigos y yo nos reunimos \
                en mi casa de campo para celebrar que por fin hemos acabado los exámenes \
                de recuperación y que ya podemos descansar tranquilos durantes unos meses hasta el\
                comienzo del nuevo curso.</p>\
                \
                <p>Nos disponemos a preparar la comida para hacer una barbacoa cuando de repente un \
                amigo se acerca y pregunta:</p>\
                <p class='dialogo'> -¿Dónde están los hielos?</p>\
                \
                <p>En ese momento mi amiga y yo no miramos dicendo:</p> \
                <p class='dialogo'> +Yo: ¡Los tenías que comprar tú!</p>\
                <p class='dialogo'> -Mi amiga: ¡NO los tenías que comprar tú!</p>\
                <p class='transient'>Después de varios minutos discutiendo sobre quien debería haberlos comprado, acepto que debería haberlos comprado yo, así que\
                puedo <a href='bajarahora'>bajar en este mismo momento</a> rápidamente a comprarlos o\
                <a href='bajardespues'>bajar más tarde.</a></p>"

            ),

            bajarahora: new undum.SimpleSituation(
              "<p>Y tiene razón, ha sido culpa mía, con la emoción de la fiesta se me han olvidado comprar los hielos... \
              así que bajo ahora mismo y así no tengo que bajar luego cuando haga más calor y nos lo estemos pasando bien.</p> \
              <p>Voy a coger el <a href='./dillaves' class='once'>dinero y las llaves de coche</a> y me pongo en camino.</p>",
              {
                actions:{
                  "dillaves": function(character,system, to){
                    system.setQuality("llaves", 1);
                    system.setQuality("dinero", 1);
                    system.write(
                      "<p class='transient'>No se si ir al <a href='./merca' class='once'>Mercadona</a>, que está en las afueras del pueblo y voy a tardar un poco más, \
                      o ir a la <a href='./gaso' class='once'>gasolinera</a> que esta más cerca y tardo menos...</p>"
                    )
                  },
                  "merca":
                      "<p>Después de pensarlo creo que voy a ir al <a href='mercadona'>Mercadona</a>, se que está en las afueras del pueblo, pero allí los hielos están más baratos y, aunque llevo dinero suficiente, el que me sobre \
                      me lo quedo para mi y me invito a algo por las molestias ocasionadas jeje</p>",

                  "gaso":
                  "<p>Después de pensarlo creo que voy a ir a la <a href='gasolinera1'>gasolinera</a> que esta más cerca de donde estamos, aunque los hielos están más caros... pero bueno, tengo dinero suficiente y además \
                  que lo mismo tengo suerte y me regalan algo que siempre estan haciendo sorteos, premiso y regalando cosas con las compras.</p>"
                }
              }
            ),

            bajardespues: new undum.SimpleSituation(
              "<p>Y tiene razón, ha sido mi culpa, con la emoción de la fiesta se me han olvidado comprar los hielos, \
              pero no tengo ganas de bajar ahora ya que estamos haciendo la comida y además no hace tanto calor.</p> \
              <p>Pasan las horas y está apretando el calor... y mis amigos se están enfadando así que lo mejor es \
              que baje a comprar los hielos ya. Corro a coger el <a href='dineroyllaves'>dinero y las llaves del coche.</a></p>",
              {
              enter:function(character, system, to) {
                system.setQuality("calor", 1)
                }
              }
            ),

            dineroyllaves: new undum.SimpleSituation(
              "<p>Voy a ir a la gasolinera directamente, que es la tienda más cercana en donde estamos y que esta abierta a estas horas.</p>\
              <p>Escuchando la radio, el locutor dice que en varios puntos de Andalucía hoy se van a alcanzar unas temperaturas máximas de ¡45 grados! \
              Me voy a dar <a href='gasolinera2'>prisa</a> porque puede que me quede sin hielos.</p>",
              {
                enter:function(character, system, to) {
                  system.setQuality("llaves", 1);
					        system.setQuality("dinero", 1)
				          }
              }
            ),

            mercadona: new undum.SimpleSituation(
            "<h1>En el Mercadona</h1>\
            <center><img src='media/games/tutorial/mercadona.jpg'></center>\
            <p>Acabo de llegar al mercadona, y no me puedo creer la cola de gente que hay comprando... Normal, es la hora en la que sale todo \
            el mundo de trabajar.</p> \
            <p>De nada me ha servido venir aqui, por ahorrarme unos dinerillos de más ahora voy a llegar tarde a casa y mis amigos se van a enfadar porque esta empezando a hacer calor... ¡Todo mal!</p></br> \
            <center><img src='media/games/tutorial/fin.jpg'></center>",
            {
            enter:function(character, system, to) {
              system.setQuality("calor", 1)
              }
            }
            ),

            gasolinera1: new undum.SimpleSituation(
            "<h1>En la gasolinera</h1>\
            <center><img src='media/games/tutorial/gasolinera.jpg'></center>\
            <p>Acabo de llegar a la gasolinera. No hay casi nadie. Entro en la tienda y le pregunto a la dependienta: \
            <p class='dialogo'> -Yo: Hola, ¿tenéis bolsas de hielo? </p> \
            <p class='dialogo'> -Dependienta: ¡Si, nos quedan sólo dos!</p> \
            <p>La dependienta coje las bolsas del congelador y antes de pagárselas me dice:</p> \
            <p class='dialogo'> - Como son las últimas bolsas que me quedan te voy a regalar un flotador gigante para la piscina, que me queda sólo uno y no se que hacer con él jajaja </p> \
            <p>¡Pero que maravilla! Tengo los hielos y además un flotador gigante, ¡mis amigos van a estar super contentos!. Pago a la dependienta y vuelvo para <a href='casa'>casa</a>.</p>",
            {
            exit:function(character, system, to) {
              system.setQuality("hielos", 1);
              system.setQuality("calor", 1)
              }
            }
            ),

            gasolinera2: new undum.SimpleSituation(
            "<h1>En la gasolinera</h1>\
            <center><img src='media/games/tutorial/gasolinera.jpg'></center>\
            <p>Llego a la gasolinera y hay mucha gente en la puerta... Me pongo a hacer cola, tengo la sensación de que no van a quedar hielos. Cuando me toca le pregunto a la dependienta \
            que si le quedan hielos y me dice que no, que los últimos los vendió esta mañana y no le quedan más en el almacen.</p>\
            <p>Debí haber bajado antes cuando tuve la oportunidad, ahora tendré que ir al Mercadona que esta más lejos con toda la calor que hace...</p></br>\
            <center><img src='media/games/tutorial/fin.jpg'></center>"
            ),

            casa: new undum.SimpleSituation(
              "<h1>De vuelta en casa</h1>\
              <center><img src='media/games/tutorial/piscina.jpg'></center> \
              <p>Llego a casa y les doy las buenas noticias: ¡tenemos hielos de sobra y un flotador para divertirnos esta tarde! Todos están super contentos. \
              Al final ha salido bien bajar antes y nos quedamos con una buena moraleja:</p> \
              <p class='dialogo'>No dejes para mañana lo que puedas hacer hoy, porque puede que ganes un flotador gigante para la piscina.</p> \
              <center><img src='media/games/tutorial/sol.jpg'></center>"
            ),

        };

        // ---------------------------------------------------------------------------
        /* The Id of the starting situation. */
        undum.game.start = "inicio";

        // ---------------------------------------------------------------------------
        /* Here we define all the qualities that our characters could
         * possess. We don't have to be exhaustive, but if we miss one out then
         * that quality will never show up in the character bar in the UI. */
         undum.game.qualities = {
     dinero: new undum.OnOffQuality(
         "Dinero", {priority:"0001", group:'objetos', onDisplay:"&#10003;"}
     ),

     llaves: new undum.OnOffQuality(
         "Llaves", {priority:"0002", group:'objetos', onDisplay:"&#10003;"}
     ),

     calor: new undum.YesNoQuality(
         "Calor", {priority:"0003", group:'ambiente', yesDisplay:"Si­", noDisplay:"No"}
     ),

     hielos: new undum.YesNoQuality(
         "Hielos", {priority:"0003", group:'ambiente', yesDisplay:"Si­", noDisplay:"No"}
     )
 };

 // ---------------------------------------------------------------------------
 /* The qualities are displayed in groups in the character bar. This
  * determines the groups, their heading (which can be null for no
  * heading) and ordering. QualityDefinitions without a group appear at
  * the end. It is an error to have a quality definition belong to a
  * non-existent group. */
 undum.game.qualityGroups = {
     objetos: new undum.QualityGroup(null, {priority:"0001"}),
     ambiente: new undum.QualityGroup('Temperatura', {priority:"0002"})
 };

 // ---------------------------------------------------------------------------
 /* This function gets run before the game begins. It is normally used
  * to configure the character at the start of play. */
 undum.game.init = function(character, system) {
     character.qualities.dinero = 0;
     character.qualities.llaves = 0;
     character.qualities.calor = 0;
     character.qualities.hielos = 0;
 };
