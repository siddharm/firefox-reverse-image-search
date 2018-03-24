// creates item in the context menu
browser.contextMenus.create({
    id: "gi",
    title: "Search Google for image",
    contexts:["image"]
});

// adds listener that checks if the item is clicked
browser.contextMenus.onClicked.addListener(contextMenuAction);

//describes what happens upon clicking
function contextMenuAction(info, tab) {
    const link = "https://www.google.com/searchbyimage?&image_url="+info.srcUrl;
    browser.tabs.create({url: link});
}