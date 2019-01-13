const { ipcRenderer } = require("electron");

const btn = document.createElement("button");
btn.innerHTML = "发消息";
btn.onclick = function() {
  // console.log(111);
  ipcRenderer.send("close", (new Date()).getTime().toString());
};

document.body.appendChild(btn);
