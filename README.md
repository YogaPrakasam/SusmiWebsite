# SS Biomedical Innovation - Website

This is the official website for SS Biomedical Innovation, an institute focused on teaching biomedical hardware and providing hands-on training.

## Features

- Responsive design that works on all devices
- Contact form with validation
- Direct WhatsApp integration for instant communication
- Social media links
- Modern and clean user interface

## Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (for testing locally)

## How to Run Locally

### Option 1: Using Python's built-in HTTP server

1. Open a terminal or command prompt
2. Navigate to the project directory:
   ```
   cd Y:\QSP\Susmiwebsite
   ```
3. Start a Python HTTP server:
   - For Python 3:
     ```
     python -m http.server 8000
     ```
   - For Python 2:
     ```
     python -m SimpleHTTPServer 8000
     ```
4. Open your web browser and visit:
   ```
   http://localhost:8000
   ```

### Option 2: Using Live Server in VS Code

1. Open the project folder in VS Code
2. Install the "Live Server" extension if you haven't already
3. Right-click on `index.html` and select "Open with Live Server"
4. The website will open automatically in your default browser

## File Structure

```
Susmiwebsite/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── script.js       # JavaScript functionality
└── logo/               # Directory containing logo files
    ├── logo.png        # Main logo
    └── logo-white.png  # White version for dark backgrounds
```

## Customization

1. **Logo**: Replace the logo files in the `logo` directory with your own
2. **Colors**: Modify the CSS variables in `css/style.css` to change the color scheme
3. **Content**: Update the content in `index.html` as needed
4. **Contact Form**: The form currently logs to console. To make it functional, you'll need to:
   - Set up a server-side script to handle form submissions
   - Update the form action URL in `index.html`

## Testing

1. **Responsive Design**:
   - Test the website on different screen sizes using browser dev tools
   - Check on mobile devices if possible

2. **Links**:
   - Verify all navigation links work correctly
   - Test the WhatsApp contact links
   - Check social media links

3. **Form**:
   - Test form validation
   - Verify the form submission works (check browser console)

## Deployment

To make the website live, you can:

1. **Netlify** (Recommended for beginners):
   - Drag and drop the `Susmiwebsite` folder to Netlify's dashboard
   - Or connect your GitHub/GitLab repository

2. **GitHub Pages**:
   - Create a repository on GitHub
   - Upload your files
   - Enable GitHub Pages in the repository settings

3. **Traditional Web Hosting**:
   - Upload all files to your web hosting via FTP/SFTP
   - Make sure to maintain the directory structure

## Support

For any issues or questions, please contact:
- Email: info.ssbiomedicalinnovation30@gmail.com
- Phone: +91 93444 33782 / +91 82208 48225

---

© 2025 SS Biomedical Innovation. All rights reserved.
