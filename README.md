
# Project Title: NatyaDarpan: A Webapp to Learn and Shop Bharatanatyam

## 1. Introduction

NatyaDarpan is a web-based platform designed to preserve, promote, and provide easy access to the traditional Indian classical dance form of Bharatanatyam. The project combines structured Bharatanatyam learning resources with an integrated e-commerce platform, providing users with both educational content and access to essential dance products in one place.

The platform provides information about the history, cultural significance, and techniques of Bharatanatyam along with categorized video tutorials covering different movements such as hand, leg, eye, neck, and head movements. It also provides an online store where users can browse and purchase Bharatanatyam-related products such as costumes, ornaments, ghungroos, and books.

## 2. Problem Statement

Traditional methods of learning Bharatanatyam can be limited by geographical accessibility and availability of structured learning resources. Learners may also face difficulty finding reliable tutorials and essential dance accessories on a single platform.

NatyaDarpan addresses this problem by providing a dedicated digital platform that brings together Bharatanatyam education, cultural information, movement demonstrations, and an integrated online store.

## 3. Objectives

The main objectives of NatyaDarpan are:

* To digitally preserve and promote the cultural heritage of Bharatanatyam.
* To provide structured and categorized video tutorials for Bharatanatyam movements.
* To support self-paced learning through accessible online resources.
* To provide informative content about the cultural, historical, and spiritual significance of Bharatanatyam.
* To provide an integrated e-commerce platform for purchasing Bharatanatyam accessories.
* To provide secure user authentication and personalized access.
* To provide an admin panel for managing users, learning content, products, orders, and user queries.

## 4. Proposed System

NatyaDarpan is developed as a full-stack web application using the MERN stack. The system provides separate functionality for registered users and administrators.

Registered users can access the Learn and Store modules after authentication. The Learn module organizes Bharatanatyam movements into categories and provides video demonstrations. The Store module allows users to browse products, filter products, add items to a cart, and complete purchases through secure payment processing.

The administrator can manage users, learning content, product inventory, orders, and queries through the admin panel. The system also uses cloud-based media storage for images and videos.

## 5. Major Modules

### A. Authentication Module

* User registration and login.
* Secure authentication and access control.
* Restricted access to Learn and Store modules.
* JWT-based protected route handling.

### B. Home Module

* Introduction to the platform.
* Bharatanatyam-related shlokas and cultural content.
* Navigation to different sections of the platform.

### C. About Us Module

* History and evolution of Bharatanatyam.
* Cultural and spiritual significance.
* Information about Bharatanatyam techniques and principles.

### D. Learn Module

* Categorized Bharatanatyam movement tutorials.
* One-hand and two-hand gestures.
* Eye, neck, head, and leg movements.
* Video demonstrations for individual movements.
* Support for self-paced learning.

### E. Store Module

* Bharatanatyam costumes, ornaments, ghungroos, books, and other accessories.
* Product categorization and filtering.
* Product sorting.
* Cart and checkout functionality.
* Address validation.
* Secure online payment using Stripe.

### F. Contact Us Module

* Users can submit queries through a contact form.
* Admin can respond to user queries.
* Users receive notifications when the admin responds.

### G. Admin Module

* User management.
* Learning-content management.
* Product and inventory management.
* Order-status management.
* Query management and responses.

## 6. Technology Used

**Frontend:**

* React.js
* Tailwind CSS
* JavaScript / JSX

**Backend:**

* Node.js
* Express.js

**Database:**

* MongoDB

**Additional Technologies:**

* Cloudinary – image and video storage
* Redux – state management
* Stripe – payment processing
* JWT – authentication
* Git – version control

The project report specifically identifies React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Cloudinary, Redux, and related tools as part of the proposed technology stack.

## 7. Methodology

The project follows the **Iterative Software Development Life Cycle (SDLC) model**. Development is performed through repeated iterations involving planning, designing, implementation, testing, and refinement.

This approach allows individual modules such as authentication, learning resources, store functionality, and contact features to be developed and tested progressively. Feedback and testing results can then be used to improve subsequent versions of the system.

## 8. Scope

The scope of NatyaDarpan includes:

* Digital preservation and promotion of Bharatanatyam.
* Online learning for beginners and experienced dancers.
* Access to categorized dance tutorials from anywhere.
* Online purchase of Bharatanatyam accessories.
* Digital management of users, products, content, orders, and queries.
* Potential use by dance academies, teachers, cultural institutions, practitioners, students, and researchers.

## 9. Expected Outcome

The expected outcome of the project is a user-friendly and accessible platform that combines Bharatanatyam education, cultural information, and e-commerce functionality. NatyaDarpan enables learners to access structured learning resources while also providing convenient access to traditional dance essentials.

The system also simplifies administrative management through dedicated controls for users, learning content, products, orders, and queries.

## 10. Conclusion

NatyaDarpan provides a focused digital solution for learning and promoting Bharatanatyam while addressing the difficulty of finding structured learning resources and dance-related products in one place. By combining a categorized learning module with an integrated e-commerce store, the platform creates an all-in-one digital environment for Bharatanatyam enthusiasts and practitioners.

The use of the MERN stack along with Tailwind CSS, Cloudinary, Redux, JWT authentication, and Stripe payment processing provides the technical foundation required for a scalable, interactive, and user-friendly web application.
