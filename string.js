const client = require("./client")

async function init() {
  //  await client.set("msg:1", "hey")
  const result = await client.get("msg:1")
  await client.expire("msg:1", 10) // expire after 10 sec

  console.log("result->", result)
}

init()

