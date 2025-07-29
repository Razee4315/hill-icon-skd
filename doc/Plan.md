Hill Icon: Website Development Plan
This document outlines a phased development plan to build the Hill Icon website based on the established Product Requirements Document (PRD).

Phase 1: Foundation & Data Structure
This initial phase focuses on setting up the project's skeleton and organizing all the necessary data and assets.

Project Structure Setup:

Inside the src directory, create the following folders: components, pages, data, and assets.

Move your existing video and any images into the src/assets folder.

Data Centralization:

Create a single file: src/data/servicesData.js.

Inside this file, define and export JavaScript objects or arrays for all the business information mentioned in the PRD:

roomsData: An array of room objects, each with an id, name, description, amenities, and image path.

transportData: An array of vehicle objects.

toursData: An array of tour package objects.

contactInfo: An object containing the WhatsApp number, email, and phone number.

Global Styles & Fonts:

In your main index.css or App.css file, define the base styles for the entire website.

Set the primary fonts (e.g., import 'Inter' from Google Fonts).

Define the core color palette (e.g., background color, primary text color).

Create basic styles for common HTML elements like body, h1, p, and button to ensure consistency.

Phase 2: Global Components & Home Page
With the foundation in place, the next step is to build the reusable elements and the main landing page.

Build the Navbar Component:

Create Navbar.jsx in the components folder.

Add the Hill Icon logo (as text or an SVG) on the left.

Add the navigation links as specified in the PRD: Home, Rooms, Transport, Tours, Contact. These will be simple links for now.

Build the Footer Component:

Create Footer.jsx in the components folder.

Add all required information: contact details, social media links, "About Us" blurb, and copyright notice.

Build the Hero Component:

Create Hero.jsx in the components folder.

Implement the video background, ensuring it autoplays, is muted, and loops.

Add the dark overlay to ensure text is readable.

Add the main headline text and position it to the left.

Assemble the Home Page:

Create Home.jsx in the pages folder.

Import and render the Hero component.

Below the hero, create the "Services Overview" section. For now, you can use placeholder cards with images and text that will eventually link to the other pages.

Phase 3: The Rooms Page (Core Functionality)
This is the most complex page and will serve as a template for the others.

Create the Rooms Page Structure:

Create Rooms.jsx in the pages folder.

Import the roomsData from your data file.

Map over the roomsData array to render a list of "Room Cards." Each card should display the room's image, name, and short description.

Implement the Detailed View:

Add state management (e.g., useState) to the Rooms page to track which room is currently "selected."

When a user clicks a Room Card, update the state to that room.

Create a "Room Detail" section that only renders when a room is selected. This section will display the detailed description, list of amenities, and the booking form.

Build the BookingForm Component:

Create BookingForm.jsx in the components folder.

Add the required input fields: Name, Phone, Check-in/out dates, and Guests.

This component will manage the user's input in its own state.

Integrate the WhatsApp Logic:

Create a WhatsappButton.jsx component.

This component will take a message prop. When clicked, it will construct the https://wa.me/ URL with the encoded message and open it in a new tab.

In the BookingForm component, add a "Prepare Message" button. When clicked, it will format the user's input into the required message string and pass it to the WhatsappButton component, which then becomes visible.

Phase 4: Transport & Tours Pages
Now, replicate the pattern from the Rooms page for the other services, reusing components where possible.

Build the Transport Page:

Create Transport.jsx in the pages folder.

Import transportData and map over it to display vehicle cards.

Reuse the BookingForm component. You can pass a prop like serviceType="Transport" to conditionally show different fields if needed (e.g., just Name, Phone, and a text area for requirements).

Build the Tours Page:

Create Tours.jsx in the pages folder.

Import toursData and map over it to display tour package cards.

Reuse the BookingForm again for tour inquiries.

Phase 5: Finalization & Routing
This phase connects everything and adds the final pieces.

Create the Contact Page:

Create Contact.jsx in the pages folder.

Add the dining information, all contact details, and embed a Google Map.

Include a simple contact form for email inquiries as an alternative to WhatsApp.

Set Up Routing:

In App.jsx, import BrowserRouter, Routes, and Route from react-router-dom.

Import all your page components (Home, Rooms, etc.).

Define the routes for each page (e.g., / for Home, /rooms for Rooms).

Place the Navbar and Footer components outside the Routes switch so they appear on every page.

Update the links in your Navbar to use the <Link> component from react-router-dom.

Phase 6: Styling, Refinement & Testing
The final phase is to polish the visual design and ensure everything works perfectly.

Apply Detailed Styling:

Go through each component and page, applying the minimalistic black-and-white styling. Focus on spacing, alignment, and typography.

Add subtle hover effects to buttons and links for better user feedback.

Ensure Responsiveness:

Thoroughly test the entire website on different screen sizes (mobile, tablet, desktop).

Use CSS media queries to adjust layouts, font sizes, and spacing as needed. Ensure the video hero looks good on mobile and doesn't consume excessive data.

End-to-End Testing:

Click through every link and button.

Test the booking/inquiry flow for each service. Fill out the forms and confirm that the correct, pre-filled message opens in WhatsApp.

Check for any console errors or warnings.