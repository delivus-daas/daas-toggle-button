import React from "react";
var ToggleButton = function (_a) {
    var onSelect = _a.onSelect, items = _a.items;
    function handleClick(idx) {
        onSelect(idx);
    }
    return (React.createElement("div", null, items.map(function (item, idx) { return (React.createElement("div", { key: "toggle" + idx, onClick: function () { return handleClick(idx); } }, item)); })));
};
export default ToggleButton;
//# sourceMappingURL=ToggleButton.js.map