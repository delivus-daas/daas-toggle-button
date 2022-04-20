import e from"react";var t=function(t){var n=t.onSelect,r=t.items,c=t.selectedIdx;return e.createElement("div",{className:"btn-container"},r.map((function(t,r){return e.createElement("div",{key:"toggle"+r,className:"text "+(r===c?"active":" "),onClick:function(){return function(e){n(e)}(r)}},t)})))};export{t as ToggleButton};
//# sourceMappingURL=index.js.map
