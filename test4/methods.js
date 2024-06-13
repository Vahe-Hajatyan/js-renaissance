const data = [];

function handleCreate(req, res) {
  let body = "";
  req.on("data", (chance) => {
    body += chance.toString();
    data.push(body);
  });
  let item = null;
  req.on("end", () => {
    item = JSON.parse(body);
    data.push(JSON.stringify(item));
  });
  req.statusCode = 201;
  res.end(item);
}
function handleRead(req, res) {
  req.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}
function handleUpdate(req, res,requestUrl) {
const id = requestUrl.pathname.split('/')
let body = ''
req.on('data', (chance) => {
  body += chance.toString();
})
req.on('end', () => {
  const item = JSON.parse(body);
  data[id[2]] = item
})
}
function handleDelete(req, res,requestUrl) {
  console.log(req.body);
}

module.exports = { handleCreate, handleRead, handleUpdate, handleDelete };
