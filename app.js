var editor = CodeMirror.fromTextArea(document.getElementById("input"), {
    lineNumbers: true,
    styleActiveLine: true,
    theme: "dracula"
});

editor.setSize("50%", "100%")

editor.on("change", function () {
    document.getElementById("output").innerHTML = interpreter(editor.getValue())
});