import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";

export const AuthPage = () => {
  return (
    <div className="page">
      <Navbar />
      <div className="page-container">
        <div className="auth-container">
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};
