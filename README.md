# BenthonCord Website

## 🚀 Advanced Discord RPC Manager Website

This is the official website for BenthonCord - an advanced Discord Rich Presence (RPC) management client.

## 📁 File Structure

```
BenthonWebsite/
│
├── index.html              # Homepage
├── download.html           # Download page with all versions
├── latest.html            # Latest version display page
├── faq.html               # FAQ page
├── application-id-guide.html  # Tutorial for getting Discord Application ID
│
├── css/
│   └── style.css          # Main stylesheet
│
├── js/
│   └── script.js          # Main JavaScript file
│
├── images/
│   ├── step1.png          # Tutorial step 1 image (replace with your own)
│   ├── step2.png          # Tutorial step 2 image (replace with your own)
│   ├── step3.png          # Tutorial step 3 image (replace with your own)
│   ├── step4.png          # Tutorial step 4 image (replace with your own)
│   ├── step5.png          # Tutorial step 5 image (replace with your own)
│   ├── step6.png          # Tutorial step 6 image (replace with your own)
│   ├── step7.png          # Tutorial step 7 image (replace with your own)
│   └── step8.png          # Tutorial step 8 image (replace with your own)
│
├── icon.png               # Website favicon (ADD YOUR OWN)
└── logo.png               # Website logo (ADD YOUR OWN)
```

## 🎨 Design Features

- **Black & White Theme**: Minimalist, professional dark theme
- **Fully Responsive**: Works on all devices and screen sizes
- **Smooth Animations**: Modern UI with engaging transitions
- **FAQ Accordion**: Expandable questions for better UX
- **Download Management**: All versions available with platform options
- **Interactive Elements**: Hover effects, parallax, and scroll animations

## 📄 Pages Overview

### 1. **index.html** - Homepage
- Hero section with call-to-action
- Key features showcase
- Statistics counter animation
- Links to download and latest version

### 2. **download.html** - Download Page
- Latest version cards for all platforms (Windows x64/x86, Linux, macOS)
- Previous versions list
- Installation instructions
- Platform-specific download buttons

### 3. **latest.html** - Latest Version
- Large display of current version number (3.2.1)
- Download button
- Changelog with new features

### 4. **faq.html** - FAQ
- Comprehensive list of frequently asked questions
- Accordion-style expandable answers
- Link to Application ID guide

### 5. **application-id-guide.html** - Tutorial
- 8-step guide to get Discord Application ID
- Image placeholders for each step
- Troubleshooting section
- **IMPORTANT**: Replace all images (step1.png through step8.png) with your actual screenshots

## 🔧 Setup Instructions

1. **Add Your Logo and Icon**:
   - Place `logo.png` in the root directory (recommended: 200x50px, transparent background)
   - Place `icon.png` in the root directory (recommended: 64x64px or 128x128px)

2. **Replace Tutorial Images**:
   - Take screenshots for each step of the Application ID tutorial
   - Save them as `step1.png`, `step2.png`, etc. in the `images/` folder
   - Images should be clear and easy to understand

3. **Update Version Numbers**:
   - Change version numbers in `download.html` to match your actual releases
   - Update the version in `latest.html` (currently 3.2.1)

4. **Configure Download Links**:
   - Edit the download button handlers in `js/script.js`
   - Add actual download URLs for your releases

5. **Test Everything**:
   - Open `index.html` in a web browser
   - Test all navigation links
   - Check responsive design on mobile
   - Verify all interactive elements work

## 🌐 Deployment

To deploy this website:

1. **GitHub Pages**: Upload to a GitHub repository and enable GitHub Pages
2. **Netlify**: Drag and drop the folder to Netlify
3. **Vercel**: Import the project to Vercel
4. **Traditional Hosting**: Upload via FTP to your web host

## 🎯 Key Features to Implement

Before going live, make sure to:

- [ ] Add logo.png and icon.png
- [ ] Replace all tutorial images (step1.png - step8.png)
- [ ] Update version numbers
- [ ] Add actual download links
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test responsive design on mobile devices
- [ ] Update copyright year if needed
- [ ] Add Google Analytics (optional)
- [ ] Add social media links (optional)

## 💡 Customization

### Changing Colors:
Edit CSS variables in `css/style.css`:
```css
:root {
    --bg-primary: #000000;
    --text-primary: #ffffff;
    /* etc. */
}
```

### Adding New Pages:
1. Create new HTML file
2. Copy navbar from existing page
3. Add link in all navigation menus
4. Style using existing CSS classes

### Modifying Download Versions:
Edit the download cards in `download.html` and update the version list.

## 📱 Responsive Breakpoints

- Desktop: > 968px
- Tablet: 600px - 968px
- Mobile: < 600px

## 🔒 Security Notes

- All links to external sites use `target="_blank"` for security
- No inline JavaScript (all in external file)
- Clean HTML structure

## 📞 Support

For questions or issues with the website, visit: https://projects.exolyte.pl

## 📄 License

© 2024 BenthonCord. All rights reserved.

---

**Built with ❤️ for the BenthonCord community**
