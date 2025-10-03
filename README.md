# <img src="public/logo.png" alt="Course Buddy Logo" width="32" height="32" style="vertical-align: middle;"> Course Buddy

A modern, responsive learning management system built with React, TypeScript, and Tailwind CSS. Course Buddy provides an intuitive platform for managing courses, tracking progress, and connecting with an AI learning assistant.

> ⚠️ **Work in Progress**: This project is currently under development. Only 3 frontend screens have been implemented (Onboarding, Courses, and Chat) with mock data and UI components.

## ✨ Features

### 🎓 Course Management
- Browse and search through available courses
- Track learning progress with visual progress bars
- View course details including duration and lesson count
- Responsive course cards with beautiful thumbnails

### 💬 AI Learning Assistant
- Interactive chat interface for learning support
- Real-time messaging with typing indicators
- Offline detection and status alerts
- Personalized learning guidance

### 🚀 User Experience
- Smooth onboarding process with progressive steps
- Mobile-first responsive design
- Beautiful gradient themes and animations
- Intuitive bottom navigation

### 🎨 Modern UI/UX
- Built with shadcn/ui components
- Tailwind CSS for styling
- Dark/light theme support
- Smooth animations and transitions
- Mobile-optimized interface

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Routing**: React Router DOM v6
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **State Management**: React Query (TanStack Query)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Charts**: Recharts
- **Notifications**: Sonner

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd course_buddy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Pages & Features

### 🏠 Onboarding (`/`)
- Welcome screen with progress stepper
- Goal setting and user introduction
- Smooth navigation to courses

### 📚 Courses (`/courses`)
- Course catalog with search functionality
- Progress tracking for each course
- Skeleton loading states
- Responsive grid layout

### 💬 Chat (`/chat`)
- AI learning assistant interface
- Real-time messaging experience
- Offline detection and handling
- Message history and timestamps

## 🧩 Component Architecture

### Core Components
- `CourseCard` - Individual course display with progress
- `ChatMessage` - Chat interface message component
- `BottomNav` - Mobile navigation bar
- `ProgressStepper` - Onboarding progress indicator
- `TypingIndicator` - Chat typing animation

### UI Components (shadcn/ui)
Complete set of accessible UI components including:
- Form controls (Input, Button, Select, etc.)
- Layout components (Card, Sheet, Dialog, etc.)
- Feedback components (Alert, Toast, Progress, etc.)
- Navigation components (Breadcrumb, Tabs, etc.)

## 🎨 Styling & Theming

- **Design System**: Consistent spacing, colors, and typography
- **Responsive Design**: Mobile-first approach with breakpoints
- **Theme Support**: Light/dark mode compatibility
- **Custom Gradients**: Brand-specific gradient backgrounds
- **Animations**: Smooth transitions and micro-interactions

## 📱 Mobile Optimization

- Touch-friendly interface design
- Optimized for various screen sizes
- Bottom navigation for mobile UX
- Gesture-friendly interactions
- Performance optimized for mobile devices

## 🔧 Configuration Files

- `vite.config.ts` - Vite build configuration
- `tailwind.config.ts` - Tailwind CSS customization
- `components.json` - shadcn/ui configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint rules and settings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Future Enhancements

- [ ] User authentication and profiles
- [ ] Real AI integration for the chat assistant
- [ ] Course completion certificates
- [ ] Social learning features
- [ ] Advanced progress analytics
- [ ] Push notifications
- [ ] Offline course content

## � Current Development Status

This is a **work-in-progress** project with the following implementation status:

### ✅ Completed
- 3 main frontend screens (Onboarding, Courses, Chat)
- Responsive UI components using shadcn/ui
- Mobile-first design and navigation
- Component architecture and routing setup

### 🔄 In Development
- Backend API integration
- Real AI chat functionality
- User authentication system
- Database connectivity

## �🐛 Known Issues

- Chat functionality is currently mock data
- Course content is placeholder data  
- No backend integration yet
- Limited to frontend-only functionality

## 📞 Support

If you encounter any issues or have questions, please open an issue on GitHub or contact the development team.

---

**Built with ❤️ using React, TypeScript, and modern web technologies**