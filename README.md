This code sets up a basic web server using Express in Node.js and implements rate limiting to prevent potential DDoS (Distributed Denial of Service) attacks. The /Admin route is specifically rate-limited to restrict access to it. Requests to this route are limited to 5 requests per 15 minutes.

The express-rate-limit package is used to implement rate limiting middleware. The windowMs property sets the time window for which to count requests, and the max property sets the maximum number of requests allowed in that window. If the limit is exceeded, the server responds with a "Too many requests" message.

A custom rate limiting middleware function (customRateLimit) is defined to apply the rate limit only to the /Admin route. All other routes are exempt from this rate limit.

The server listens on port 3000, and upon successful startup, it logs a message indicating the port it's listening on.

This setup helps protect the server from being overwhelmed by excessive requests, especially to sensitive routes like /Admin.
