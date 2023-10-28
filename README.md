# GorillaNews

GorillaNews is a React web application that displays news articles sourced from the NewsAPI website. This application utilizes React, React Router, and other technologies to create a seamless news browsing experience. With GorillaNews, users can stay updated with the latest news articles in various categories.

## Features

- **News Categories:** Browse news articles from different categories such as business, technology, entertainment, health, and more.
- **Infinite Scroll:** Utilizes the [`react-infinite-scroll-component`](https://www.npmjs.com/package/react-infinite-scroll-component) package for infinite scrolling, allowing users to scroll endlessly through news articles, providing a seamless browsing experience.
- **Loading Bar:** Utilizes the [`react-top-loading-bar`](https://www.npmjs.com/package/react-top-loading-bar) package. A loading bar indicates the progress of fetching news articles, ensuring users are aware of ongoing data retrieval.
- **Responsive Design:** GorillaNews is designed to be responsive, providing an optimal viewing experience across different devices and screen sizes.

## Installation

To run GorillaNews locally on your machine, follow these steps:

1. **Clone the Repository:**

   ```
   git clone https://github.com/GivenBY/GorillaNews.git
   ```

2. **Navigate to the Project Directory:**

   ```
   cd GorillaNews
   ```

3. **Create a .env.local File:**
   Create a file named .env.local in the project directory and add your NewsAPI key:

   ```
   REACT_APP_NEWS_API="your_api_key_here"
   ```

   Replace "your_api_key_here" with your actual NewsAPI key. This step is necessary to enable data retrieval.

4. **Install Dependencies:**

   ```
   npm install
   ```

5. **Start the Development Server:**

   ```
   npm start
   ```

   The application should now be running on http://localhost:3000.

## Usage

Customize the application further to fit your specific needs. You can modify the styling, add new features, or enhance the existing functionality as desired.

## Contributing

Contributions to GorillaNews are welcome! If you find a bug or have a suggestion for improvement, please create an issue or submit a pull request. Your feedback and contributions help make this project better for everyone.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the license terms.
