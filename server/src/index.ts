import { Hono } from "hono";
import { cors } from "hono/cors";
import type { ApiResponse } from "shared/dist";

export const app = new Hono()

.use(cors())

.get("/", (c) => {
	return c.text("Hello Hono!");
})

.get("/hello", async (c) => {
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