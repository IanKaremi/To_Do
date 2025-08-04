import { Hono } from "hono";
import { cors } from "hono/cors";
import type { ApiResponse } from "shared/dist";
import { SQL, sql } from "bun";



export const app = new Hono()

.use(cors())

const db = new SQL({
	url:"",
	hostname:"",
	port:"",
	database:"",
	username:"",
	password:"",

	max: 5,
	idleTimeout: 30,
	maxLifetime: 0,
	connectionTimeout: 30,

	onconnect(client) {
		console.log("DB Connected.")
	},
	onclose(client) {
		console.log("DB disconnected.")
	},

});

app.get("/", (c) => {
	return c.text("Hello Hono!");
})

app.get("/hello", async (c) => {
	const data: ApiResponse = {
		message: "Hello BHVR!",
		success: true,
	};

	return c.json(data, { status: 200 });
});

app.post("/add", async (c) => {
  const body = await c.req.json();
  console.log("Received task:", body.task); // logs the sent data
  const data: ApiResponse = {
    message: "Task received!",
    success: true,
  };
  return c.json(data, { status: 200 });
});

export default app;