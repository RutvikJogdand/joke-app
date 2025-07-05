# Jokester - Interactive Joke Application

## 🎭 Overview

Jokester is a full-stack web application that delivers jokes with an interactive twist. Built with React frontend and Node.js backend, it fetches jokes from external APIs and provides unique features like custom punchlines, content filtering, and multiple joke categories.

## ✨ Key Features

### 🎯 Interactive Joke Experience
- **Custom Punchlines**: For two-part jokes, users can write their own punchlines before revealing the original
- **Multiple Joke Categories**: Choose from Programming, Dark, Spooky, or Any random jokes
- **Punchline Toggle**: View or hide original punchlines for two-part jokes
- **Copy to Clipboard**: Easy sharing of jokes with a single click

### 🛡️ Content Filtering
- **AI-Powered Moderation**: Uses OpenAI GPT-3.5 to detect and modify potentially offensive content
- **Automatic Filtering**: Scans jokes for inappropriate racial content and generates safer alternatives
- **Maintains Humor**: Preserves the comedic value while removing offensive elements

### 🎨 User Interface
- **Modern Design**: Clean, responsive interface with Bootstrap components
- **Loading States**: Visual feedback during joke fetching
- **Interactive Elements**: Buttons with FontAwesome icons for different joke categories
- **Real-time Updates**: Instant joke display with smooth transitions

## 🏗️ Architecture

### Frontend (React)
```
jokester/
├── src/
│   ├── components/
│   │   ├── JokeDashBoard/     # Main container component
│   │   ├── JokeDisplay/       # Joke rendering and interaction
│   │   └── Buttons/           # Category selection and controls
│   ├── App.js                 # Root component
│   └── index.js               # Entry point
```

### Backend (Node.js/Express)
```
jkstr-backend/
├── index.js                   # Express server with API endpoints
└── package.json              # Dependencies and configuration
```

## 🔧 Technical Stack

### Frontend Technologies
- **React 18.0.0**: Modern React with hooks
- **Axios**: HTTP client for API requests
- **CSS Modules**: Scoped styling for components
- **Bootstrap**: UI framework for responsive design
- **FontAwesome**: Icon library for buttons

### Backend Technologies
- **Express.js**: Web framework for Node.js
- **Axios**: HTTP client for external API calls
- **CORS**: Cross-origin resource sharing
- **OpenAI API**: GPT-3.5 for content moderation
- **dotenv**: Environment variable management

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- OpenAI API key
- Access to joke API

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd joke-app
   ```

2. **Setup Frontend**
   ```bash
   cd jokester
   npm install
   ```

3. **Setup Backend**
   ```bash
   cd ../jkstr-backend
   npm install
   ```

4. **Environment Configuration**
   
   Create `.env` files in both directories:
   
   **Backend (.env)**:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   APP_JOKE=your_joke_api_endpoint
   PORT=5000
   ```
   
   **Frontend (.env)**:
   ```
   REACT_APP_JOKE=http://localhost:5000/chat
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd jkstr-backend
   node index.js
   ```
   Server will run on `http://localhost:5000`

2. **Start the Frontend**
   ```bash
   cd jokester
   npm start
   ```
   Application will open on `http://localhost:3000`

## 🎮 How to Use

1. **Select a Category**: Click on one of the joke category buttons:
   - 🔀 **Any**: Random jokes from all categories
   - 💻 **Programming**: Developer humor
   - 💀 **Dark**: Dark humor jokes
   - 👻 **Spooky**: Halloween/scary themed jokes

2. **Interactive Punchlines** (for two-part jokes):
   - Read the setup line
   - Try writing your own punchline in the input field
   - Click "Submit" to see your version
   - Click "View Original Punchline" to reveal the actual punchline

3. **Copy and Share**:
   - Click the copy button (📋) to copy the joke to your clipboard
   - Share with friends or save for later

## 🔒 Content Moderation

The app includes sophisticated content filtering:

- **Detection**: Scans jokes for potentially offensive content
- **Modification**: Uses OpenAI GPT-3.5 to rewrite problematic jokes
- **Preservation**: Maintains the humor while removing offensive elements
- **Transparency**: Users receive the filtered version seamlessly

## 📱 Component Details

### JokeDashboard
- Main container component that orchestrates the entire app
- Manages the overall layout and structure

### Buttons
- Handles joke category selection
- Manages API calls to the backend
- Controls loading states and error handling
- Renders different joke category buttons with icons

### JokeDisplay
- Renders jokes based on type (single-line or two-part)
- Manages interactive punchline functionality
- Handles user input for custom punchlines
- Provides copy-to-clipboard functionality
- Shows/hides original punchlines on demand

## 🛣️ API Endpoints

### POST /chat
- **Purpose**: Fetch and filter jokes
- **Parameters**: `jokeTopic` (string) - Category of joke to fetch
- **Response**: Filtered joke object with setup, delivery, and type
- **Processing**: 
  - Fetches joke from external API
  - Scans for inappropriate content
  - Applies AI filtering if needed
  - Returns clean joke data

## 🔧 Development Notes

### Frontend Development
- Uses functional components with React hooks
- Implements CSS modules for scoped styling
- Follows React best practices for state management
- Responsive design with Bootstrap integration

### Backend Development
- RESTful API design with Express.js
- Async/await for promise handling
- Error handling and logging
- Environment-based configuration

## 🎯 Future Enhancements

Potential features to implement:
- User accounts and favorite jokes
- Joke rating system
- Custom joke submissions
- Social sharing integration
- Offline joke storage
- More joke categories
- Mobile app version
- Multi-language support

## 🐛 Troubleshooting

### Common Issues
1. **API Key Issues**: Ensure OpenAI API key is correctly set in backend .env
2. **CORS Errors**: Make sure backend is running on port 5000
3. **Joke Loading**: Check external joke API availability
4. **Copy Function**: Requires HTTPS or localhost for clipboard access

### Development Tips
- Use browser developer tools to debug API calls
- Check network tab for failed requests
- Monitor console for error messages
- Verify environment variables are loaded correctly

## 📄 License

This project is for educational and entertainment purposes.

## 🤝 Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Improving documentation
- Adding new joke categories
- Enhancing the UI/UX

---

*Built with ❤️ and humor in mind* 