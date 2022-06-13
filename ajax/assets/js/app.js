$(function () {
  // ecriture d'une procedure ajax
  // mise en place des options
  // commencez par taper:
  //       $.ajax({});

  $.ajax({
    // url de la requete
    url: "https://jsonplaceholder.typicode.com/users",

    // méthode à utiliser: GET, POST,PUT
    method: "GET",

    // type des données attendues
    dataType: "json",
    /*  
            Cet élément de configuration indique le type de données retourné par le code serveur. Attention : 
            c'est ce que jQuery.ajax() recevra du code serveur et non ce que jQuery.ajax() lui enverra.

            On retrouvera généralement un des types suivants : json, xml, html, jsonp, text ou script. Dans la cas où 
            la fonction serveur retourne autre chose comme un booléen, par exemple, il est préférable de modifier la 
            fonction serveur pour qu'elle convertisse sa valeur de retour au format JSON.

            Afin de vous assurer d'attendre le bon type, il faut vérifier la valeur de retour du code serveur.

            Si vous ne spécifiez pas le type attendu, jQuery tentera de deviner le type en lisant le type MIME des 
            données reçues. 

            Par contre, si vous spécifiez un type attendu qui ne correspond pas à ce que le code serveur retourne, 
            la valeur retournée sera mal encodée. 

            On retrouvera généralement un des types suivants : 
            json, 
            xml, 
            html, 
            jsonp, 
            text, 
            script
        */

    // Les données à envoyer avec la requete
    // ici nous n'envoyons pas de données en direction du server interrogé.
    data: {},
    /*
            Il s'agit des données que jQuery.ajax() envoie au code serveur. Le format doit respecter 
            ce qui est attendu par le code serveur.

            Notez que dans le cas d'une requête GET, jQuery se chargera d'encoder les données dans l'URL.

            PlainObject (objet litteral):

            En JavaScript, le type PlainObject est très utile pour passer les valeurs à la configuration data.
            Il est composé d'une série de paires clé:valeur, le tout entouré d'accolades.
            Si plus d'une paire est nécessaire, on séparera chaque paire par une virgule.

            Exemples avec des variables :
            data: {produit_id : produit_id} 
            data: {produit_id : produit_id, description : description} 

            Exemple avec des valeurs codées en dur :
            data: {produit_id : 3} 
            data: {produit_id : 3, description : 'lorem ipsum'} 

            Appels AJAX ne nécessitant l'envoi d'aucune donnée
            Dans le cas où le code serveur n'attend aucun paramètre, il peut arriver qu'on ait tout de même besoin de préciser un élément data: avec des accolades vides.

            Ex : data: "{ }"
        */

    // callback exécutée juste avant l'envoi de la requête
    beforeSend: function (xhr, settings) {
      console.group("Envoi Ajax 1 : ");
      console.log("Callback beforeSend() - Objet jqXHR : ", xhr);
      console.log("Callback beforeSend() - Objet settings : ", settings);
      console.groupEnd();
    },
    /*
            beforeSend: callback(xhr, settings){
                objet redefinissant une prop de l'objet jqXHR (headers personnalisé, etc...) 
                exemple:
                xhr.setRequestHeader('x-my-custom-header', 'some value');
                xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
            },
        */

    // callback exécutée en cas de reussite de la requête
    // est aujourd'hui de plus en plus remplacé par l'utilisation de la
    // fonction chaînée .done()
    success: function (response, status, xhr) {
      console.group("Envoi Ajax 1 : ");
      console.log("Callback success() - Réponse du server : ", response);
      console.log("Callback success() - Etat de le reqête : ", status);
      console.log("Callback success() - Objet jqXHR : ", xhr);
      console.log(
        "Callback success() - response headers : ",
        xhr.getAllResponseHeaders()
      );
      console.groupEnd();
    },
    /*
        success: callback(Anything data, String textStatus, jqXHR jqXHR) {
            La callbac reçoit en argument les objets suivants:
            -data-> données reçu du serveur automatiquement formatté en fonction du dataType
            -textStatus-> état de la requête (chaine de caractère)
            -xhr-> objet jqXHR retourné par la méthode ajax()

            Le json recu est vérifiable dans la prop xhr.responseText

            //... instructions en cas de reussite de la requête
        }
        */

    // callback exécutée en cas d'échec de la requete
    // est aujourd'hui de plus en plus remplacé par l'utilisation de la
    // fonction chaînée .fail()
    error: function (xhr, status, errorText) {
      console.group("Envoi Ajax 1 : ");
      console.log("Callback error() - objet jqXHR : ", xhr);
      console.log("Callback error() - état de le reqête : ", status);
      console.log("Callback error() - erreur : ", errorText);
      console.log("Callback error() - code erreur : ", xhr.status);
      console.log(
        "Callback error() - response headers : ",
        xhr.getAllResponseHeaders()
      );
      console.groupEnd();
    },
    /*
        error: callback(jqXHR jqXHR, String textStatus, String errorThrown) est 
            executé en cas d'échec de la requête. La callback recoit en argument
            -l'objet jqXHR
            -une chaine de caractere indiquant le statut de la requête
            -une chaine de caractere contenant la portion textuelle de l'erreur
            Cette dernière peut ne pas être présente. Le code erreur retourné
            par le server est disponible dans la propriété status de l'objet jqXHR.

        */

    // callback exécutée dans tous les cas,
    // est aujourd'hui de plus en plus remplacé par l'utilisation de la
    // fonction chaînée .always()
    complete: function (xhr, status) {
      console.group("Envoi Ajax 1 : ");
      console.log("Callback Complete() - objet jqXHR: ", xhr);
      console.log("Callback Complete() - status: ", status);
      console.groupEnd();
    },

    /*
        complete: callback( jqXHR jqXHR, String textStatus) exécutée dans tous les cas que 
            la requête reussisse ou échoue. cette callback recoit en argument
            -l'objet jqXHR
            -une chaine de caractère indiquant le statut de la requête.

        */

    // si vous omettez des options, leur valeur par défaut sera prise en compte
    // le options possibles sont:

    /*  
            async: booleen - true par defaut,
            permet d'executer l'ajax de manière synchrone ou asynchrone
        */

    /*
            cache: booleen - true par defaut sauf pour un dataType script ou jsonp,
        */

    /*
            accepts: objet litteral; {} en-tête de requête - depends du dataType,
                exemple:
                accepts: {
                    mycustomtype: 'application/x-some-custom-type',
                },
        */

    /*
            contentType: type des données envoyées au server, 'application/x-www-form-urlencoded; charset=UTF-8' par defaut,

                On spécifie le format des données envoyées par jQuery.ajax() au code serveur à l'aide de l'élément contentType: 
                (ex : contentType: "application/json; charset=UTF-8" : ceci indique que le code serveur recevra des données JSON 
                encodées en UTF-8). Ces données sont transférées au code serveur à l'aide de l'élément data:.

                Il existe de nombreux encodages disponibles. En voici quelques exemples :

                application/x-www-form-urlencoded (valeur par défaut),
                    C'est cette valeur que vous devez utiliser pour effectuer un appel AJAX de type POST en PHP et ce, 
                    même si les données envoyées au serveur sont au format JSON.

                application/json,
                application/atom+xml,
                text/css,
                text/javascript,
                image/jpeg,
                application/pdf,
                application/rss+xml; charset=ISO-8859-1,
                text/plain,
                text/xml,
        */

    /*
            context: permet de definir le context (la valeur du 'this' interne de toutes les callbacks),
        */

    /*
            converter: objet contenant tous les convertisseurs de type, 
                par defaut: {"* text": window.String, "text html": true, "text json": jQuery.parseJSON, "text xml": jQuery.parseXML},
        */

    /*
            crossDomain: boolean  - true par defaut - regler à false pour same-domain, ou true pour cross-domain,
        */

    /*
            dataFilter: permet de definir une fonction de nettoyage des données reçues,
        */

    /*
            global: booleen. default: true - si réglé à false, les gestionnaires ajax globaux comme ajaxStart et 
                ajaxStop ne se déclencheront pas,
        */

    /*
            headers: objet litteral {} contenant des en têtes de requetes personnalisée en format {"clef":"valeur", ...},
        */

    /*
            ifModified: booleen - false par defaut - la requete ne reussit que si la réponse a changé
                depuis la dernière requête,
        */

    /*
            isLocal: booleen - si true alors l'ajax pourra utiliser le fileSystem, sinon, uniquement le HTTP,
        */

    /*
            jsonp: booleen ou string.
                booleen - si reglé a false, ajax n'utilisera pas l'appel à une callback dans l'url
                string - definit le nom du paramètre d'url permettant d'appeller la callback spécifiée
                dans l'option suivante (jsonpCallback),
        
        */

    /*
            jsonpCallback: function() ou string contient la definition oou le nom de la callback à appeler
                dans une requête jsonp,
        */

    /*
            mimeType: string - mime type permettant d'overrider le mime type de l'objet jqXHR,
        
        */

    /*
            password: permet de definir le mot de passe demandé par le serveur interrogé dans le cadre d'une
                autotisation basique HTTP,
        */

    /*
            username: permet de definir l'identifiant demandé par le serveur interrogé dans le cadre d'une
                autotisation basique HTTP,
        */

    /*
            processdata: booleen -  true par defaut - autorise ou interdit le traitement automatique des données
                envoyées vers le server et contenu dans l'objet contenu dans l'option data en fonction de l'option 
                content-type,
        */

    /*
            scriptAttrs: objet litteral: permet d'ajouter des attributs utilisé lors d'une requete de type 'script'
                ou 'jsonp'. Par exemple cette option peut être utilisée pour définir des attribut 'nonce', 'integity'
                ou 'crossorigin' pour satisfaire aux regles de sécurisation de contenu,
        */

    /*
            scriptCharset: string - ne s'applique que dans le cas d'un transport de script si le charset local
                n'est pas le même que le charset du script récupéré.
        */

    /*
            statusCode: objet litteral - permet de definir les instructions à executer en fonction du code
                retourné par le server distant. Cela peut cependant être pris en charge dans les méthodes
                error() ou .fail(), ou encore success ou .done().
                Par exemple le code suivant permet de definir un gestionnaire au cas ou le code de retour
                est le code 404:

                statusCode: {
                    404: function() {
                    alert( "page not found" );
                }
        */

    /*
            timeout: booleen - number - 0 par defaut c'est a dire qu'il n'y a pas de timeout. sinon, le
                nombre doit exprimer en millisecondes la durée au dela de laquelle l'ajax mettra fin à 
                la connection et renverra une erreur.
        */

    /*
            traditional: booleen - si true, alors permet une serialization traditionnelle des paramètres
                plutot que la méthode moderne
        */

    /*
            type: alias de l'otion 'method'. ne devrait être utilisé que pour des versions de jQuery 
                antérieures à la 1.9.0
        */

    /*
            xhr: callback() permettant de definir son propre objet XMLHttpRequest que jquery va utiliser pour
                l'appel ajax
        */

    /*
            xhrFields: objet litteral permettant de customizer les propriétés de l'objet XHR. par exemple:
                url: a_cross_domain_url,
                xhrFields: {
                    withCredentials: true
                }
        */
  });

  // Envoi ajax 2
  // utilisation des méthodes chaînées

  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
    data: {},
    dataType: "json",
    beforeSend: function (xhr, settings) {
      console.group("Envoi Ajax 2 : ");
      console.log("Callback beforeSend() - Objet jqXHR : ", xhr);
      console.log("Callback beforeSend() - Objet settings : ", settings);
      console.groupEnd();
    },
  })
    .done(function (response, status, xhr) {
      console.group("Envoi Ajax 2 : ");
      console.log("Méthode .done() - Réponse du server : ", response);
      console.log("Méthode .done() - Etat de le reqête : ", status);
      console.log("Méthode .done() - Objet jqXHR : ", xhr);
      console.log(
        "Méthode .done() - response headers : ",
        xhr.getAllResponseHeaders()
      );
      console.groupEnd();
    })
    .fail(function (xhr, status, errorText) {
      console.group("Envoi Ajax 2 : ");
      console.log("Méthode .fail() - objet jqXHR : ", xhr);
      console.log("Méthode .fail() - état de le reqête : ", status);
      console.log("Méthode .fail() - erreur : ", errorText);
      console.log("Méthode .fail() - code erreur : ", xhr.status);
      console.log(
        "Méthode .fail() - response headers : ",
        xhr.getAllResponseHeaders()
      );
      console.groupEnd();
    })
    .always(function (xhr, status) {
      console.group("Envoi Ajax 2 : ");
      console.log("Méthode .always() - objet jqXHR: ", xhr);
      console.log("Méthode .always() - status: ", status);
      console.groupEnd();
    });

  // Envoi ajax 3
  // utilisation des méthodes abrégées:
  $.get("https://jsonplaceholder.typicode.com/users", function (response) {
    console.group("Envoi Ajax 3 : ");
    console.log("response :", response);
    console.groupEnd();
  });

  // Envoi ajax 4
  // la methode .load()
  // $("#res").load("https://jsonplaceholder.typicode.com/");

  // serialisation des données de formulaire
  //Lors du clic sur le bouton...
  $("button").click(function () {
    /*Transforme les données du formulaire en chaine de requête de la forme
        prenom=Jean-Christophe&mail=jc.rangon.formateur%40gmail.com*/
    let chaine = $("form").serialize();

    /*Transforme les données du formulaire en un tableau d'objets de la forme 
        [
        {
            name : "prenom",
            value : "Jean-Christophe"
            },
            {
            name : "mail",
            value : "jc.rangon.formateur@gmail.com"
            }
        ]*/
    let tb = $("form").serializeArray();

    //Affiche les résultats dans la console
    console.group("Serialization des données de formulaire");
    console.log("Chaine :", chaine);
    console.log("Tableau : ", tb);
    console.groupEnd();
  });

  $(document).ajaxStop(function () {
    alert("Tous les ajax sont terminés");
  });
});

$(function () {
  // ecriture d'une procedure ajax
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/",
    method: "GET",
    dataType: "jsons",
    data: {},

    beforeSend: function (xhr, settings) {
      console.group("Envoie Ajax 1:");
      console.log("Callback beforeSend() -object jqXHR:", xhr);
      console.log(("Callback beforeSend() -object setting:", setting));
      console.groupEnd();
    },

    error: function (xhr, status, errorText) {},
  });
});
