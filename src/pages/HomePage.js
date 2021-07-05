import Navbar from "./../components/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <h1 id="about" style={{ marginTop: 300 }}>
        About Section
      </h1>
      <h1 id="features" style={{ marginTop: 300 }}>
        Features Section
      </h1>
      <h1 id="contact" style={{ marginTop: 300 }}>
        Contact Section
      </h1>
    </div>
  );
};

export default HomePage;
