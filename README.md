# Front-end only Coffee Shop POS System developed by The Happy Part-time Barista of 1521kohi

A Front-end only Point of Sale system for a coffee shop with invoice generation capabilities.

## Features

- Product catalog with images
- Add-on options
- Cart management (add, remove, adjust quantities)
- Customer details collection
- Service type selection (Dine-in, Pick-up, Delivery)
- Dynamic delivery fee calculation
- Invoice generation as downloadable image
- Responsive design
- Offline capability with service worker

## Installation

1. Clone this repository
2. Open the `kohi-dashboard` folder in VS Code
3. Install required dependencies:
   ```bash
   npm install html2canvas


## Additional Instructions

1. **Product and Add-on Images**:
   - Create folders `assets/product-images` and `assets/addon-images`
   - Add all your product and add-on images with the filenames matching those in the `products` and `addOns` arrays in `scripts.js`

2. **html2canvas Setup**:
   - Install html2canvas via npm:
     ```bash
     npm install html2canvas
     ```
   - Add this script to your `index.html` before the closing `</body>` tag:
     ```html
     <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
     ```
3. **Deployment to Netlify**:
   - Make sure your GitHub repository is connected to Netlify
   - Set the publish directory to `kohi-dashboard`
   - No build command is needed for this static site

4. **Responsive Design**:
   - The system is already designed to be responsive
   - On mobile devices, the layout will stack vertically for better usability

5. **Label Printer Compatibility**:
   - The invoice image generated should be compatible with most label printers
   - You may need to adjust the invoice dimensions in the CSS for perfect printing

## Complete System Features

1. **Order Management**:
   - Add products to cart
   - Adjust quantities
   - Remove items
   - Clear entire order

2. **Dynamic Pricing**:
   - Automatic subtotal calculation
   - Dynamic delivery fees based on drink count
   - Add-on pricing included in totals

3. **Invoice Generation**:
   - Professional invoice layout
   - Download as PNG image
   - Includes all order details
   - Compatible with Nimbot label printer

4. **Responsive UI**:
   - Works on desktop and mobile
   - Adapts to screen size
   - Touch-friendly controls

5. **Offline Capability**:
   - Service worker caches assets
   - Works without internet connection
   - Progressive Web App features

6. **User role Capability**:
   - Admin/Barista & Guest users
   - All access for Admin/Barista
   - POS only access for Guest user


To complete the setup, make sure to:
1. Add all your product and add-on images to the correct folders
2. Update the product and add-on arrays in `scripts.js` if needed
3. Deploy to Netlify following the instructions
4. Test all functionality before going live

The system is now ready for use in your coffee shop with all the requested features implemented!

# Future Enhancements
1. Database Storage
2. Inventory Feature
3. Reporting