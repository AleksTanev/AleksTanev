YUI.add("moodle-core-event",function(e,t){var n="moodle-core-event";M.core=M.core||{},M.core.event=M.core.event||{FILTER_CONTENT_UPDATED:"filter-content-updated",EDITOR_CONTENT_RESTORED:"editor-content-restored",FORM_SUBMIT_AJAX:"form-submit-ajax"},M.core.globalEvents=M.core.globalEvents||{FORM_ERROR:"form_error",BLOCK_CONTENT_UPDATED:"block_content_updated"};var r={emitFacade:!0,defaultFn:function(e){},preventedFn:function(e){},stoppedFn:function(e){}},i;for(i in M.core.event)M.core.event.hasOwnProperty(i)&&e.getEvent(M.core.event[i])===null&&e.publish(M.core.event[i],r);for(i in M.core.globalEvents)M.core.globalEvents.hasOwnProperty(i)&&e.Global.getEvent(M.core.globalEvents[i])===null&&e.Global.publish(M.core.globalEvents[i],e.merge(r,{broadcast:!0}))},"@VERSION@",{requires:["event-custom"]});
YUI.add("moodle-filter_mathjaxloader-loader",function(e,t){M.filter_mathjaxloader=M.filter_mathjaxloader||{_lang:"",_configured:!1,configure:function(t){var n=document.createElement("script");n.type="text/x-mathjax-config",n[window.opera?"innerHTML":"text"]=t.mathjaxconfig,document.getElementsByTagName("head")[0].appendChild(n),this._lang=t.lang,e.on(M.core.event.FILTER_CONTENT_UPDATED,this.contentUpdated,this)},_setLocale:function(){if(!this._configured){var e=this._lang;typeof window.MathJax!="undefined"&&(window.MathJax.Hub.Queue(function(){window.MathJax.Localization.setLocale(e)}),window.MathJax.Hub.Configured(),this._configured=!0)}},typeset:function(){if(!this._configured){var t=this;e.use("mathjax",function(){t._setLocale(),e.all(".filter_mathjaxloader_equation").each(function(e){typeof window.MathJax!="undefined"&&window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub,e.getDOMNode()])})})}},contentUpdated:function(t){var n=this;e.use("mathjax",function(){if(typeof window.MathJax=="undefined")return;var e=window.MathJax.Hub.processSectionDelay;window.MathJax.Hub.processSectionDelay=0,n._setLocale(),t.nodes.each(function(e){e.all(".filter_mathjaxloader_equation").each(function(e){window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub,e.getDOMNode()])})}),window.MathJax.Hub.processSectionDelay=e})}}},"@VERSION@",{requires:["moodle-core-event"]});
