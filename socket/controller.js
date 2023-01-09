export const socketController = (socket) => {
  console.log("Client connect", socket.id);

  socket.on("disconnect", () => {
    console.log("Client disconnect");
  });

  socket.on("send-msg", (payload, callback) => {
    const id = "123abc";
    callback(id);
    socket.broadcast.emit("send-msg", payload);
  });
};
