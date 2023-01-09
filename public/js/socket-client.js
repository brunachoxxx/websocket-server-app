const socket = io();

//html ref
const lblonline = document.querySelector("#lblonline");
const lbloffline = document.querySelector("#lbloffline");
const txtMsg = document.querySelector("#txtMsg");
const btnSend = document.querySelector("#btnSend");

socket.on("connect", () => {
  //console.log("socket connect");

  lblonline.style.display = "";
  lbloffline.style.display = "none";
});

socket.on("disconnect", () => {
  //console.log("socket disconnect");

  lblonline.style.display = "none";
  lbloffline.style.display = "";
});

socket.on("send-msg", (payload) => {
  console.log(payload);
});

btnSend.addEventListener("click", () => {
  const msg = txtMsg.value;
  const payload = {
    msg,
    id: "kjdsahflkjs",
    date: new Date().getTime(),
  };
  socket.emit("send-msg", payload, (id) => {
    console.log("from server", id);
  });
});
