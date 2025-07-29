Product Requirements Document: Hill Icon Website

1. Introduction & Vision
1.1. Project Overview
Hill Icon provides premium accommodation, transport, and tour services in the Skardu region. This project is to create a modern, minimalistic, and user-friendly website that serves as the primary digital storefront for the business. The website's core function is to elegantly present Hill Icon's services and streamline the inquiry and booking process through a direct WhatsApp integration.

1.2. Project Goals & Objectives
Primary Goal: Increase customer inquiries and bookings by providing a clear, compelling, and easy-to-navigate online presence.

Secondary Goals:

Effectively communicate the brand's identity: premium, reliable, and deeply connected to the local landscape.

Provide potential customers with all necessary information to make a booking decision.

Create a seamless and intuitive booking experience that directs users to WhatsApp with pre-filled information.

Establish a scalable platform that can grow with the business.

1.3. Target Audience
The primary audience includes:

Domestic Tourists: Families, couples, and solo travelers from within Pakistan seeking a luxury travel experience in Skardu.

International Tourists: Travelers from abroad looking for reliable and high-quality services for their visit to Northern Pakistan.

Corporate Clients: Businesses looking for off-site or travel arrangements for employees.

2. User Stories
As a potential customer, I want to see a visually stunning video of the location on the homepage so I can immediately get a feel for the experience.

As a traveler planning a trip, I want to easily browse different room types with clear descriptions and lists of amenities.

As a user interested in a specific room, I want to click on it to see more detailed information and photos without navigating away from the main list.

As a customer ready to book a room, I want to fill out a simple form with my details (name, dates, guests) and have that information sent directly to the business via WhatsApp.

As a tourist needing transportation, I want to see the types of vehicles available for different terrains (e.g., sedans for airport, SUVs for valleys).

As a user booking transport, I want to specify my needs (e.g., airport pickup) and send an inquiry via WhatsApp.

As an adventure seeker, I want to explore pre-defined tour packages to destinations like Deosai and Shigar Valley.

As a user on my mobile phone, I want the website to be fully responsive and easy to use on a smaller screen.

3. Functional Requirements
3.1. Global Elements
Navigation Bar:

Must be present on all pages.

Should be clean and minimalistic.

Links: Home, Rooms, Transport, Tours, Contact.

The Hill Icon logo should be displayed and link back to the Home page.

Footer:

Must be present on all pages.

Should contain contact information (Phone, Email), a link to the WhatsApp number, and social media links (if any).

A short "About Us" blurb.

Copyright information.

3.2. Home Page
Hero Section:

The background must be a high-quality, auto-playing, looping, and muted video showcasing the beauty of the location/property.

A dark, transparent overlay should be placed over the video to ensure text readability.

Headline text must be positioned on the left side of the screen. The text should be compelling and welcoming (e.g., "Experience Serenity. Welcome to Hill Icon.").

Services Overview Section:

A section below the hero that briefly introduces the main services (Rooms, Transport, Tours) with high-quality images and a short description for each.

Each service summary must link to its respective detailed page.

3.3. Rooms Page
Room Listing:

The page will display all available room types in a grid or card-based layout.

Each card must show: a representative image, the room type name (e.g., "Deluxe Suite"), and a short description.

Each card must be clickable to reveal more details.

Room Detail View:

Upon clicking a room card, a detailed view should appear smoothly on the same page (e.g., an expanding section or a modal pop-up).

This view must contain:

More images or a photo gallery of the room.

A detailed description of the room's features.

A list of all amenities (WiFi, Room Service, etc.).

The booking form.

Booking & Inquiry Flow:

The user fills out a form within the detailed view with fields for:

Full Name (Required)

Phone Number (Required)

Check-in Date

Check-out Date

Number of Guests

The user clicks a button labeled "Book via WhatsApp" (or similar).

This action opens a new tab to the WhatsApp Web/Desktop/Mobile app.

The chat with the designated Hill Icon number is opened with a pre-filled message containing all the information the user entered in the form. Example message:

"Hello Hill Icon, I'd like to inquire about a room booking.
Room Type: Deluxe Suite
Name: John Doe
Phone: 03001234567
Check-in: 2025-09-15
Check-out: 2025-09-20
Guests: 2
Please confirm availability and pricing. Thank you."

3.4. Transport Page
Vehicle Listing:

Displays available vehicle types (e.g., Premium Sedan, Toyota Prado TZ) in a card-based layout.

Each card shows an image of the vehicle, its name, and a brief description of its ideal use case (e.g., "For rugged terrain and valley tours").

Inquiry Flow:

Similar to the Rooms page, clicking a vehicle reveals a simple inquiry form.

Form fields: Full Name, Phone Number, Service Required (e.g., a text area for users to describe their itinerary like "Airport pickup on [Date]").

A "Inquire via WhatsApp" button will redirect the user to WhatsApp with a pre-filled message.

3.5. Guided Tours Page
Tour Package Listing:

Displays available tour packages (e.g., "Deosai National Park Day Trip") in a card layout.

Each card shows a stunning image of the destination, the tour name, and key inclusions (e.g., "Includes transport and meals").

Inquiry Flow:

Follows the same model as Rooms and Transport: user selects a tour, fills in their name and phone number, and is redirected to WhatsApp with a pre-filled inquiry message.

3.6. Food & Dining / Contact Page
This can be a combined page.

Content:

A brief description of the dining options available (Traditional, Pakistani cuisine).

A clear statement that the full menu and pricing are available on-site.

Contact information: Phone number, email address, and physical address with a Google Maps embed.

A simple contact form for general inquiries that sends an email to the business (as an alternative to WhatsApp).

4. Non-Functional Requirements
Design & Aesthetics:

Modern & Minimalist: The design must be clean, with ample white space.

Color Palette: Primarily black and white, with shades of gray. A single, subtle accent color may be used for call-to-action buttons if desired.

Typography: A clean, highly-readable sans-serif font (e.g., Inter, Poppins).

Performance:

The website must load quickly, especially the homepage with the background video. Video files must be optimized for the web.

Page transitions should be smooth.

Responsiveness:

The website must be fully responsive and provide an optimal viewing experience on all devices, including desktops, tablets, and mobile phones.

Usability & Accessibility:

Navigation must be intuitive.

Text must have sufficient contrast against its background.

Interactive elements (buttons, links) must be clearly identifiable and have a large enough tap target for mobile users.