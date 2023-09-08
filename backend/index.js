import express from "express";
import { Server } from "socket.io";
import cors from "cors";
import connect from "./connect.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth/auth.routes.js";

const PORT = 5000;
const app = express();

app.use(
  cors({
    credentials: true,
    secure: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json("Hello World");
});

app.use("/api/auth", authRoutes);

const server = app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});

// socket.io
const io = new Server(server, {
  secure: true,
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

const users = [];
io.on("connection", (socket) => {
  socket.on(
    "online",
    (user) => {
      console.log(user);
      users.push(user);
      console.log(users);
    },
    socket.broadcast.emit("onlinef", users)
  );

  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});
