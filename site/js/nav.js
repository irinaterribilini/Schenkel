/**
 * Created by Irina on 18.06.2016.
 */

$("nav ul > li").click(function(event) {
    event.preventDefault();
    var myClass = this;
    var myClassAttr = myClass.className
        .split(" ")
        .map(function(stringElement) { return stringElement.trim()})[0];

    var screens = $("main > section").get();

    pageChange(myClassAttr);
});

/**
 * Wechselt zu einer anderen Seite.
 *
 * @param to Nimmt einen String der Navigation (z.B. Kontakt)
 */
function pageChange(to) {
    if(!$("li."+to).hasClass("active")) {
        // Toggelt Navigations Link Styles
        $("ul.nav > li").removeClass("active");
        $("ul.nav > li."+to).addClass("active");

        // Toggelt sections
        $("section").removeClass("active");
        $("section").addClass("inactive");
        $("section#"+to).removeClass("inactive").addClass("active");
    }
}