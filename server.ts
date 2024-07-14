import { createServer, IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url'; // For parsing incoming URLs

// Import Next.js server and configure (replace with your app directory)
import { NextApiRequest, NextApiResponse } from 'next';
import next from 'next';
import { NextUrlWithParsedQuery } from 'next/dist/server/request-meta';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req: IncomingMessage, res: ServerResponse) => {
    // Parse the incoming URL
    const parsedUrl = parse(req.url!, true); // Use `!` for non-null assertion

    // Handle Next.js requests
    const { pathname, query } = parsedUrl;
    if (pathname && !pathname.startsWith('/_next')) {
        handle(req, res, (pathname, query) as NextUrlWithParsedQuery); // Type assertion
    } else {
      // Handle custom server logic here (optional)
      // ...

      // Fallback to default handling if nothing is matched
      res.statusCode = 404;
      res.end('Not Found');
    }
  }).listen(3000, (err: Error) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
