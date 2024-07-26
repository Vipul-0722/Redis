const express = require("express")
const axios = require("axios").default
const client = require("./client")
const app = express()

app.get("/", async (req, res) => {
  const cacheValue = await client.get("todos")
  if (cacheValue) res.json(JSON.parse(cacheValue)) // took 100-150 ms

  const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos")

  await client.set("todos", JSON.stringify(data))
  client.expire("todos", 30)

  return res.json(data) // it took 800-1600 ms to give response
})

app.listen(3000, () => {
  console.log("connected on 3000")
})

