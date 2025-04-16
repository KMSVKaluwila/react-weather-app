# Simple Weather Application

This project is a lightweight weather application built using **ReactJS**. It retrieves real-time weather data from the Meteosource Weather API and presents it in a clean, user-friendly interface. The application allows users to check current weather conditions for any location with ease.

## Features

- Search for weather data by city or location.
- Display current temperature, humidity, wind speed, and weather conditions.
- Responsive design for seamless use on desktop and mobile devices.
- Simple and intuitive user interface.

## Tech Stack

- **Frontend**: ReactJS, Tailwind CSS
- **API**: Meteosource Weather API
- **Tools**: JavaScript (ES6+), Vite (for build tooling), Axios (for API requests)

## Installation

Follow these steps to set up and run the project locally:

### Prerequisites

- Node.js (v16 or higher)
- npm or Yarn
- A valid Meteosource Weather API key (sign up at Meteosource to get one)

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/simple-weather-app.git
   cd simple-weather-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Set up environment variables**: Create a `.env` file in the root directory and add your Meteosource API key:

   ```
   VITE_API_KEY=your_meteosource_api_key
   ```

4. **Run the application**:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

   The app will be available at `http://localhost:5173`.

## Usage

- Enter a city name in the search bar to fetch and display the current weather.
- The app will show details like temperature, humidity, wind speed, and a weather icon representing the current conditions.
- Toggle between Celsius and Fahrenheit (if implemented) for temperature display.

## Project Structure

```
simple-weather-app/
├── public/                 # Static assets
├── src/                    # Source code
│   ├── components/         # Reusable React components
│   ├── assets/             # Images and other assets
│   ├── App.jsx             # Main App component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── .env                    # Environment variables (API key)
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- Meteosource Weather API for providing accurate weather data.
- ReactJS for the amazing frontend framework.
- Tailwind CSS for rapid and responsive styling.

## Contact

For questions or feedback, feel free to reach out:

- GitHub: KMSVKaluwila
- Email: kmsvsachin@gmail.com
Happy coding! 🌤️
