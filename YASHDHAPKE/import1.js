fun= require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  if (req.url === "/students") {
    res.write("<html");
    res.write("<head><title>Students</title></head");
    res.write("<body><h1>Student</h1>");
    res.write("<ul><li>alekh</li><li>ayush</li><li>atharv</li></ul>");
    res.write("</body></html>");

    return res;
  }
  if (req.url === "/students/address") {
    res.write("<html");
    res.write("<head><title>Students_address</title></head");
    res.write("<body><h1>Student_address</h1>");
    res.write("<ul><li>dhantoli</li><li>katol</li><li>panchwati</li></ul>");
    res.write("</body></html>");

    return res;
  }
  if (req.url == "/") {
    res.write(
      `<input style=" height:6.5%; " type="text"placeholder="username"/><br><input style=" height:6.5%; " type="username" placeholder="password"/><br><button style=" height:6.5%; background-color: lightblue; margin-left:35px;" >submit</button> `
    );
    res.end();}
  
  });

const address = "127.0.0.1";
const port = 59038;
server.listen(port, address, () => { 
  console.log("server is running on http://" + address + ":" + port);
});
