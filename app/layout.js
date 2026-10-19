import "./globals.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-gray-100 p-5">
        <h1 className="text-3xl font-bold text-blue-600">
          WeatherNow
        </h1>

        <nav className="bg-blue-500 p-3 my-3">
          <a href="/" className="text-white mr-5">Home</a>


          <a href="/forecast" className="text-white mr-5">
            Forecast
          </a>

          <a href="/about" className="text-white">
            About
          </a>
        </nav>

        {children}
      </body>
    </html>
  );
};

export default RootLayout;