const fs = require("fs");
const path = require("path");

const fastify = require("fastify")({
  logger: true,
});

fastify.register(require("fastify-multipart"));

fastify.get("/", (_request, reply) => {
  const template = path.resolve(__dirname, "./index.html");

  reply
    .header("content-type", "text/html")
    .send(fs.readFileSync(template, "utf8"));
});

fastify.post("/api/media", async (request, reply) => {
  try {
    const { fields } = await request.file();
    const buf = await fields.mediafile.toBuffer();

    reply.code(200).send(buf);
  } catch (_err) {
    reply.code(400).send("Invalid request body");
  }
});

fastify.listen(8000, (err, address) => {
  if (err) throw err;
  console.log(`Server is now listening on ${address}`);
});
