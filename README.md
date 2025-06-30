Final Reflection - CS 465 Full-Stack Web Application Development
Architecture
In this project, I implemented two main interface styles:

Express HTML/JavaScript: The initial client interface was built using HTML and server-side JavaScript, displaying content through Express routes. This development style is simple, easy to implement but difficult to scale.

SPA with Angular: The admin interface uses a single-page application (SPA) with Angular, which enhances the user experience thanks to the ability to navigate smoothly without reloading the entire page.

The combination of these two interface styles clearly illustrates the tiered architecture model, in which the backend uses MongoDB, a NoSQL database that is ideal for the application because:

The data has a flexible structure (schema-less), easy to store JSON data.

Good scalability, suitable for modern cloud environments.

Easy to integrate with Node.js/Express.

Function
JSON (JavaScript Object Notation) is a lightweight format for data exchange, commonly used in communication between front-end and back-end. Although it has the same syntax as JavaScript objects, JSON is just data, not logic (function/method).

During the development process, I have refactored the code many times to improve performance and maintenance, for example:

Separate TripCardComponent from TripListingComponent in Angular for reuse.

Use ReactiveForms for more efficient form management.

Rewrite the backend API into separate controllers instead of putting them in one file.

Reusable interface components help reduce duplication, increase modularity, and make it easier to maintain and extend when requirements change.

Testing
During the API testing process, I have applied:

Manual testing with Postman to check REST endpoints such as /api/trips, /api/auth/login.

Test security by verifying that JWT tokens are sent correctly and rejecting them when they are expired or invalid.

Catch common errors like 401 Unauthorized, 403 Forbidden and handle them in the front-end to provide appropriate notifications.

The biggest challenge in testing is verifying security layers, for example testing routes that require authentication (route guard in Angular or middleware in Express) requires simulating the login flows properly.

Reflection
This course has helped me develop my skills in designing and implementing a real-world full-stack web application. I have mastered:

Designing a two-tier front-end/back-end architecture.

Using Angular for a professional SPA interface.

Creating and managing RESTful APIs with Express.

Efficiently connecting and querying MongoDB.

Securely applying JWT user authentication.

I am confident that these skills will make me a potential candidate in the field of web development or full-stack software development. This project will be a prominent part of my GitHub portfolio.
