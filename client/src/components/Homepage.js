import React,{useEffect, useState}  from "react";
import '../index.css';
import axios from "axios";
const Homepage = () => {
  const [userData, setUserData] = useState([]);


 



  

  useEffect(() => {
    // Function to fetch data from the server
    const fetchData = async () => {
      try {
        // Add the protocol (http:// or https://) before the URL
        await axios.get('http://localhost:5000/login').then((res) => {
          setUserData(res.data.user); // Assuming that the server response contains the "users" array
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    // debugger
    fetchData();
  }, []);

  return (
    <div>
      <div className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>Your Study Buddy: <br />Where Students Share Success</h1>
              <p>Discover, Share, Excel: Join 'Sharing is Caring' and elevate your learning journey with fellow students.<br/> Empower your studies with our knowledge-sharing platform!</p>
              <button>Get Started</button>
            </div>
          </div>
      </div>
      

      <section className="features-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>Easy Sharing</h2>
              <p>Share your notes and study materials with just a few clicks. Uploading and accessing resources has never been simpler!</p>
            </div>
            <div className="col-md-3">
              <h2>Collaborate Seamlessly</h2>
              <p>Connect with fellow students and collaborate on study materials. Working together has never been easier!</p>
            </div>
            <div className="col-md-3">
              <h2>Discover New Content</h2>
              <p>Explore a vast collection of study resources shared by students from all over. Discover new insights and ideas!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">What Our Users Say</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="testimonial">
                <p>"Sharing is Caring helped me ace my exams! The resources available here are top-notch, and the community is supportive."</p>
                <p className="user">- John Doe</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="testimonial">
                <p>"I've never had so much fun studying. Collaborating with other students has made learning enjoyable!"</p>
                <p className="user">- Jane Smith</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="testimonial">
                <p>"Sharing my notes has not only helped others but also improved my own understanding of the subjects. It's a win-win!"</p>
                <p className="user">- Michael Johnson</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section text-center py-5">
        <div className="container">
          <h2>Ready to Join?</h2>
          <p>Don't miss out on the benefits of our knowledge-sharing community. Sign up today and start exploring!</p>
          <button className="">Sign Up Now</button>
        </div>
      </section>



      <div className="container">
      <h1>Welcome to the Notes Sharing App</h1>
      {userData && userData.length > 0 ? (
        <ul>
          {userData.map((user, index) => (
            <li key={index}>
              <strong>Username:</strong> {user.username}, <strong>Email:</strong> {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
    {console.log(userData)}
    </div>
  );
};

export default Homepage;
