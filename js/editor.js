window.onload = function() {
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/textmate");
    var JavaScriptMode = require("ace/mode/javascript").Mode;
    editor.getSession().setMode(new JavaScriptMode());

    var canon = require("pilot/canon");

    canon.addCommand({
      name: "save",
      bindKey: {
        win: "Ctrl-S",
        mac: "Command-S",
        sender: "editor"
      },
      exec: function() {
        var addToGraph = editor.getSession().getValue();
        var graph = new PP.Graphiti(addToGraph);
        var url = "<img src='"+graph.buildURL()+"'>";
        console.log(url);
        $("#graphs").html(url);
      }
    });
}
