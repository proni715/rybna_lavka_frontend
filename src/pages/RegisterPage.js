import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RegistrationForm from "../components/RegistrationForm";

export const RegisterPage = () => {
  return (
    <div className="page">
      <Navbar />
      <div className="page-container">
        <div className="auth-container">
          <RegistrationForm />
        </div>
      </div>
      <Footer/>
    </div>
  );
};
