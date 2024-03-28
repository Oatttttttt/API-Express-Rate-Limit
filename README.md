# Express Rate Limiting for Node.js Web Server

This code sets up a basic web server using Express in Node.js and implements rate limiting to prevent potential DDoS (Distributed Denial of Service) attacks. The `/Admin` route is specifically rate-limited to restrict access to it. Requests to this route are limited to 5 requests per 15 minutes.

## Implementation Details

- **Express Rate Limiting:** The `express-rate-limit` package is utilized to implement rate-limiting middleware. The `windowMs` property sets the time window for which to count requests, and the `max` property sets the maximum number of requests allowed in that window. If the limit is exceeded, the server responds with a "Too many requests" message.

- **Custom Rate Limiting Middleware:** A custom rate limiting middleware function (`customRateLimit`) is defined to apply the rate limit specifically to the `/Admin` route. All other routes are exempt from this rate limit.
