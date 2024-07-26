const client = require("./client")

async function init() {
  await client.lpush("messag", 1)
  await client.lpush("messag", 2)
  await client.lpush("messag", 3)
  await client.lpush("messag", 4)
  await client.lpush("messag", 5)

  const result = await client.rpop("messag")
  console.log("result->", result)
}

init()

