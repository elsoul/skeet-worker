import request from "supertest";
import { server } from "../src/index";

afterAll(async () => {
	server.close();
});

describe("Hello world", () => {
	test("GET", (done) => {
		request(server)
			.get("/")
			.then((res) => {
				expect(res.statusCode).toBe(200);
				expect(res.body.status).toBe("Running Skeet Worker Server");
				done();
			})
			.catch((err) => {
				done(err);
			});
	});

	test("GET with param", (done) => {
		const id = 1;
		request(server)
			.get("/")
			.query({ id })
			.then((res) => {
				expect(res.statusCode).toBe(200);
				expect(res.text).toBe(`Hi! ${id}`);
				done();
			})
			.catch((err) => {
				done(err);
			});
	});
});

describe("Worker Endpoint", () => {
	test("POST", (done) => {
		request(server)
			.post("/run")
			.then((res) => {
				expect(res.statusCode).toBe(200);
				expect(res.body.status).toBe("success!");
				done();
			})
			.catch((err) => {
				done(err);
			});
	});
});
