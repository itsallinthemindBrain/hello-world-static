# RK Private Resort and Hotels

A luxurious static website showcasing RK Private Resort and Hotels, featuring premium accommodations, world-class amenities, and an unforgettable hospitality experience.

## Features

- **Responsive Design**: Optimized for all devices with glassmorphism styling
- **Interactive Gallery**: 16 high-quality images with zoom hover effects
- **Room Showcase**: Detailed presentation of room types and features
- **Amenities Overview**: Highlighting resort facilities and services
- **Contact Information**: Direct access to reservation details
- **Smooth Animations**: Fade-in effects and hover interactions

## Technologies Used

- HTML5
- CSS3 (Glassmorphism, Grid, Flexbox)
- JavaScript (ES6+)
- Azure Static Web Apps

## Project Structure

```
rk-private-resort/
├── frontend/
│   ├── index.html          # Main website
│   ├── login.html          # Admin login (GitHub OAuth)
│   ├── assets/
│   │   ├── css/
│   │   │   └── styles.css  # Styling and animations
│   │   ├── js/
│   │   │   └── scripts.js  # Interactive functionality
│   │   └── images/         # Hotel photos (16 images)
│   ├── css/                # Alternative CSS location
│   └── js/                 # Alternative JS location
├── api/                    # Backend API (if needed)
├── staticwebapp.config.json # Azure SWA configuration
└── README.md
```

## Setup

1. Clone the repository
2. Add 16 hotel images to `frontend/assets/images/`
3. Update contact information in `index.html`
4. Deploy to Azure Static Web Apps or your preferred hosting

## Deployment

This project is configured for Azure Static Web Apps with GitHub Actions CI/CD.

## License

© 2024 RK Private Resort and Hotels. All rights reserved.
