import Image from 'next/image';
import NewPatientForm from '../components/NewPatientForm';

export default function Home() {
  return (
    <main>
      
        <div className="navbar">
                <div className="logo-container">
                    <Image 
                        src="/assets/icon.webp" 
                        alt="App Icon" 
                        width={120}  // You can change this as needed
                        height={120}
                        className="app-icon"
                        priority={true}
                    />
                    <span className="brand-name">DoctorFlow</span>
                </div>
                <div className="nav-links">
                    <a href="/" className="nav-link">Home</a>
                    <a href="/contact" className="nav-link">Contact</a>
                    <a href="/about" className="nav-link">About</a>
                    <button className="sign-up-button">Sign Up!</button>
                </div>
            </div>
      <div className="curve-shape">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
      <NewPatientForm />

      
    </main>
  );
}
