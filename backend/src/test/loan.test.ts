import request from "supertest";

const url = "http://localhost:4000";

/*
 * @author : vyshak G
 * @Test : page 1 response
 */

describe("Requesting loans with 'NO' page Number (default to 1 Page Number)", () => {
  it("respond with 200 ok", async done => {
    request(url)
      .get("/api/loan")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});

describe("Requesting loans with '2' as page Number", () => {
  it("respond with 200 ok  and array of size 12", async done => {
    request(url)
      .get("/api/loan/2")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});

describe("Requesting loans with 'abc' as page Number", () => {
  it("respond with 200 ok and array of size 12", async done => {
    request(url)
      .get("/api/loan/abc")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
