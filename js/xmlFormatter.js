var editor;

var sampleData = {};
$(document).ready(function() {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/eclipse");
    editor.getSession().setMode("ace/mode/xml");
    editor.$blockScrolling = Infinity
    editor.setShowPrintMargin(false);
    editor.setOptions({
      fontSize: "12pt"
    });


    // Hiding the gutter for testing a new layout to the site
    editor.renderer.setShowGutter(false);


    sampleData[1] = "<?xml version=\"1.0\"?><catalog><book id=\"bk101\"><author>Gambardella, Matthew</author><title>XML Developer\'s Guide</title><genre>Computer</genre><price>44.95</price><publish_date>2000-10-01</publish_date><description>An in-depth look at creating applicationswith XML.</description></book><book id=\"bk102\"><author>Ralls, Kim</author><title>Midnight Rain</title><genre>Fantasy</genre><price>5.95</price><publish_date>2000-12-16</publish_date><description>A former architect battles corporate zombies,an evil sorceress, and her own childhood to become queenof the world.</description></book><book id=\"bk103\"><author>Corets, Eva</author><title>Maeve Ascendant</title><genre>Fantasy</genre><price>5.95</price><publish_date>2000-11-17</publish_date><description>After the collapse of a nanotechnologysociety in England, the young survivors lay thefoundation for a new society.</description></book></catalog>";
});

function beautify() {
    editor.setValue(vkbeautify.xml(editor.getValue(), 4));
}

function minify() {
    editor.setValue(vkbeautify.xmlmin(editor.getValue(), true));
}

function findAlloccurrences() {
    var criteria = $("#regexFindAllRegExp").prop('checked') ? new RegExp($('#findAllCriteria').val()) : $('#findAllCriteria').val();
    $('#findAllCount').html(editor.findAll($('#findAllCriteria').val(), {
        regExp: $("#regexFindAllRegExp").prop('checked'),
        caseSensitive: $("#regexFindAllCase").prop('checked')
    }));
}

$('#regexFindAllRegExp').click(function() {
    $("#regexFindAllRegExp").prop('checked') ? $('.regexIndicator').show() : $('.regexIndicator').hide();
});

function loadSample(sample) {
    editor.setValue(sampleData[sample]);
    beautify();
}