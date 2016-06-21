/**
 * Created by Irina on 18.06.2016.
 * 
 * This file holds functionality that is shared
 * by all views of the site
 */

/**
 * Führt alle js Dateien aus, sobald der DOM geladen ist und setzt Storage Variabeln
 */
$("document").ready(function() {
    // load all scripts
    $.getScript("js/nav.js", function(){});
    $.getScript("js/home.js", function(){});
    $.getScript("js/dienstleistungen.js", function(){});
    $.getScript("js/kontakt.js", function(){});
    $.getScript("js/produkte.js", function(){});
    $.getScript("js/renoTech.js", function(){});
});