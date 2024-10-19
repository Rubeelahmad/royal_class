
# Royal Class Assignment

This project is a fully responsive e-commerce platform built using [Next.js 14](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [Sass](https://sass-lang.com/). The project also integrates [Redux](https://redux.js.org/) for state management, and [Axios](https://axios-http.com/) for API calls to manage products and categories. The project follows a mobile-first approach and is optimized for performance. The app is deployed on [Vercel](https://vercel.com/), which makes deployment easy and efficient.

## Table of Contents

1. [Features](#features)
2. [Technologies](#technologies)
3. [Project Structure](#project-structure)
4. [API Integration](#api-integration)
5. [Installation and Setup](#installation-and-setup)
6. [How to Run the Project](#how-to-run-the-project)
7. [Deployment on Vercel](#deployment-on-vercel)
8. [Learn More](#learn-more)

## Features

- **Next.js 14**: Latest version of Next.js for server-side rendering (SSR) and static site generation (SSG).
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Sass**: CSS preprocessor for writing maintainable and scalable styles.
- **Redux Toolkit**: State management library for handling the app's state efficiently.
- **Axios**: Promise-based HTTP client for API calls to fetch products and categories.
- **Mobile-First Approach**: The app is built with responsiveness and mobile compatibility in mind.
- **Product and Category Management**: The app fetches product and category data from APIs and dynamically displays them.
- **Deployed on Vercel**: Fast and seamless deployment using Vercel.

## Technologies

- [Next.js](https://nextjs.org) 14
- [Tailwind CSS](https://tailwindcss.com)
- [Sass](https://sass-lang.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Axios](https://axios-http.com/)
- [Vercel](https://vercel.com/)

## Project Structure

```bash
├── components           # Reusable components
│   ├── Cards            # Product cards and category cards
│   ├── Header           # Header section with navigation
│   ├── Footer           # Footer section
│   ├── Loader           # Loading spinner component
│   ├── Buttons          # Custom button components
│   └── FlashSales       # Flash sales components and slider
│   └── BestSelling      # Best Selling componentr
│   └── Catogry          # Catogry  component
│   └── CatogryBanner    # Catogry Music Banner component
│   └── OurProducts      #Explore Our  Products component
│   └── NewArrivals      #New Arrivals/ Featured  Products component
│   └── HelpSupportSec   #Help and Support Section component
│  
├── app                # Next.js App routes
│   └── page.tsx         # Homepage
│   └── images           # Image assets
|   └── layout.tsx         # Layout component
│   └── gllobal.scss      # Global SCSS file
│   └── clientWrapper.tsx # Client-side wrapper for Redux
├── store                # Redux store setup
│   ├── slices           # Redux slices for product and category management
│   └── index.ts         # Store configuration
├── utils                # Utility functions
│   └── Helpers          # Helper functions
│   └── Constants        # Constant values
├── SliderData.tsx       # Slider data for the carousel
├── SliderIcons         # Icons for the carousel
├
├── next.config.js       # Next.js configuration file
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## API Integration

We are using the following APIs to fetch products and categories:

- **Products API**: [https://api.escuelajs.co/api/v1/products](https://api.escuelajs.co/api/v1/products)
- **Categories API**: [https://api.escuelajs.co/api/v1/categories](https://api.escuelajs.co/api/v1/categories)

These APIs provide real-time data about products and categories, which are fetched using Axios and stored in the Redux store for state management.

## Installation and Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/Rubeelahmad/royal_class.git
cd royal_class
```

### Step 2: Install Dependencies

You can install the required dependencies using either npm, yarn, pnpm, or bun. Choose one of the following commands:

```bash
# Using npm
npm install

# Using yarn
yarn install

```

### Step 3: Configure Environment Variables

If your project requires environment variables (for example, API keys), you can create a `.env` file in the root directory and add your environment variable as given below:

```bash
NEXT_PUBLIC_API_URL=https://api.escuelajs.co
```

## How to Run the Project

After the installation is complete, you can run the project in development mode:

```bash
npm run dev
# or
yarn dev

```

Open [http://localhost:3000](http://localhost:3000) to view the app in the browser. The page will automatically reload when you make changes to the code.

### Production Build

To build the project for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

To preview the production build:

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

## Deployment on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js. Follow these steps:

1. **Push your code to GitHub** or any other Git repository.
2. **Sign in to Vercel**: Go to [Vercel](https://vercel.com/) and log in with your GitHub account.
3. **Import the project**: Click on `New Project`, import your project from GitHub, and follow the setup instructions.
4. **Automatic Deployments**: Vercel will automatically deploy your app after every push to the main branch.

You can also check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more information.

## Learn More

To learn more about the tools and technologies used in this project, visit the following links:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Sass Documentation](https://sass-lang.com/documentation)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Axios Documentation](https://axios-http.com/)

Feel free to contribute and enhance the project. Any feedback or contribution is welcome!
