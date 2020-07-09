import express from 'express';
import favicon from 'express-favicon';
import path from 'path';
const port = process.env.PORT || 8080;
const app = express();
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (_req: any, res: { send: (arg0: string) => any; }) {
 return res.send('pong');
});
app.get('/*', function (_req: any, res: { sendFile: (arg0: string) => void; }) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);