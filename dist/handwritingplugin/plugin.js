!function(){"use strict";tinymce.PluginManager.add("handwriting",function(n,t){n.ui.registry.addButton("handwriting",{text:"handwriting button",onAction:function(){n.windowManager.openUrl({title:"Handwriting",url:"../handwriting/index.html",buttons:[{type:"custom",name:"submitButton",text:"Submit",primary:!0},{type:"cancel",name:"closeButton",text:"Cancel"}],onAction:function(t,n){window.addEventListener("message",function(n){t.close()}),t.sendMessage("submit")}})}})})}();