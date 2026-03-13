# 📊 Smart SIP Calculator - Investment Growth Planner

A comprehensive, feature-rich SIP (Systematic Investment Plan) calculator designed for investor education. This tool helps users understand potential investment outcomes with interactive visualizations, goal planning, and advanced scenarios.

# Video Demo of Working Project: 
https://drive.google.com/file/d/1QAU8JiRnGbYInI8YIwyEfU0Xs3SdbVJs/view?usp=drive_link 


## ✨ Features

### 🎯 Core Calculator Features
- **Interactive Slider Inputs** - Adjust monthly investment (₹500-₹5L), returns (1-30%), and duration (1-40 years)
- **Real-time Calculations** - Instant results with animated transitions
- **Investment Summary Cards** - Clear breakdown of invested amount, future value, and wealth gained

### 📈 Advanced Features
1. **Interactive Growth Chart** - Visualize investment vs returns over time with Recharts
2. **Goal Visualization** - Select from 4 preset goals (House, Education, Travel, Car) with smart recommendations
3. **Inflation Impact Toggle** - See real purchasing power with 6% inflation adjustment
4. **Year-by-Year Breakdown Table** - Detailed annual progression in scrollable format
5. **Scenario Comparison** - Compare two investment plans side-by-side
6. **Top-Up SIP Simulator** - "What if?" scenarios showing impact of annual SIP increases
7. **Educational Tooltips** - Info icons with helpful explanations on all inputs
8. **Export Report** - Download investment summary as text file
9. **Dark Mode** - Full theme support with toggle in hero section
10. **Responsive Design** - Works seamlessly on mobile, tablet, and desktop

### 📚 Educational Content Pages
- **SIP Guide** - Complete guide on how SIP works, benefits, and getting started
- **Mutual Funds 101** - Types of funds, key terms, and selection criteria
- **Risk Assessment** - Interactive quiz with personalized investment recommendations
- **About** - Mission, team, and career information
- **Support** - Comprehensive FAQ with accordion interface
- **Contact** - Contact form and information
- **Feedback** - User feedback and rating system
- **Legal Pages** - Privacy Policy, Terms of Service, Disclaimer

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd sip-growth-planner

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Theme**: next-themes (dark mode support)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── CalculatorSection.tsx
│   ├── ChartSection.tsx
│   ├── GoalSelector.tsx
│   ├── TopUpSimulator.tsx
│   └── ...
├── pages/              # Route pages
│   ├── Index.tsx       # Main calculator page
│   ├── About.tsx
│   ├── SIPGuide.tsx
│   └── ...
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
└── App.tsx             # Main app component with routing
```

## 🎨 Key Components

### Calculator Section
- Slider-based inputs with live validation
- Educational tooltips on all fields
- Responsive grid layout

### Chart Section
- Area chart with gradient fills
- Hover tooltips showing exact values
- Responsive container

### Goal Selector
- 4 preset financial goals
- Smart recommendations based on projections
- Visual feedback on achievability

### Top-Up Simulator
- Annual SIP increase scenarios
- Real-time wealth impact calculation
- Percentage increase display

## 🔒 Privacy & Disclaimers

- All calculations performed locally in browser
- No personal data stored on servers
- Educational tool only - not financial advice
- See full disclaimer and terms in app

## 📝 License

This project is for educational purposes. See Terms of Service for usage guidelines.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

- Email: support@sipcalculator.com
- Website: [sipcalculator.com](https://sipcalculator.com)

## 🙏 Acknowledgments

- Built with [shadcn/ui](https://ui.shadcn.com/)
- Charts powered by [Recharts](https://recharts.org/)
- Icons from [Lucide](https://lucide.dev/)

**Note**: This is an educational tool. Always consult with qualified financial advisors before making investment decisions.
