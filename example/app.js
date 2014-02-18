// This is a test harness for your module
// You should do something interesting in this harness
// to test out the module and to provide instructions
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white',
	layout: "vertical",
	top: "20dp"
});

var scrollView = Ti.UI.createScrollView({
  contentWidth: 'auto',
  contentHeight: 'auto',
  showVerticalScrollIndicator: true,
  showHorizontalScrollIndicator: true,
  layout: "vertical"
});
win.add(scrollView);

var createSeparator = function() {
   return Ti.UI.createView({
       height: "2dp",
       width: Ti.UI.FILL,
       top: "10dp",
       bottom: "10dp",
       backgroundColor: "orange"
    });
};

// TODO: write your module tests here
var TiTTTAttributedLabel = require('com.codingpie.titttattributedlabel');
Ti.API.info("module is => " + TiTTTAttributedLabel);

var text = "Examples:\n";
text += "Link: http://www.github.com\n";
text += "Phone: 91-0025125 910025125\n";
text += "Address: 1 Infinite Loop, Cupertino, CA 95014";

var label = TiTTTAttributedLabel.createLabel({
   text: text,
   width: Ti.UI.FILL,
   height: Ti.UI.SIZE,
   textCheckingTypes: TiTTTAttributedLabel.CHECKING_TYPE_LINK|TiTTTAttributedLabel.CHECKING_TYPE_ADDRESS|TiTTTAttributedLabel.CHECKING_TYPE_PHONE_NUMBER,
   underlineLinks: false
});

function dumpEvent(e) {
    Ti.API.info("" + e.type + " event: " + JSON.stringify(e, null, 2));
}

label.addEventListener("link", dumpEvent);
label.addEventListener("phone", dumpEvent);
label.addEventListener("address", dumpEvent);

scrollView.add(label);
scrollView.add(createSeparator());

win.open();

