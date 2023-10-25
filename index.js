// selecting element
var h1 = $("h1");
var button = $("button");
var input = $("input");

// manapulating style
h1.addClass("big-title margin-50");
// h1.css("font-size", "5rem");
// h1.css("color", "red");

// manapulating text
h1.text("Bye");
button.text("Don't Click Me.");
button.html("<em>Hey</em>");



// manapulating attributes
$("img").attr("src");
$("a").attr("href", "https://www.yahoo.com");

// adding event listeners
h1.click(function() {
    h1.css("color", "purple");
});
button.click(function() {
    h1.css("color", "purple");
});
input.keypress(function(event) {
    $("h1").text(event.key);
});
h1.on("mouseover", function() {
    h1.css("color", "purple");
})

// adding & removing event
h1.before("<button>New.</button>");
h1.after("<button>New.</button>");
h1.prepend("<button>New.</button>");
h1.append("<button>New.</button>");