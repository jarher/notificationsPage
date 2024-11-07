const fs = require("fs");
const path = require("path");

describe("Verify if json file exists", () => {
  const filePath = path.join(__dirname, "./data.json");
  const fileExists = fs.existsSync(filePath);
  it("must be verified if json file exists", () => {
    expect(fileExists).toBe(true);
  });
  it("must be verified if groupJoined property in first object is undefined", () => {
    expect(fileExists[0]?.groupJoined).toBe(undefined);
  });
});
