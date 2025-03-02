import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Shield, Award, Star, ArrowRight } from 'lucide-react';

const PublicHome: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://source.unsplash.com/featured/1600x800/?dental-clinic" 
            alt="Dental Clinic" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Smile Deserves The Best Care</h1>
            <p className="text-xl mb-8">Experience exceptional dental care with our team of professionals dedicated to your oral health and beautiful smile.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/book" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-blue-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Appointment
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-6 py-3 border border-white rounded-md shadow-sm text-base font-medium text-white bg-transparent hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose DentalCare Clinic?</h2>
            <p className="mt-4 text-lg text-gray-600">We combine advanced technology with compassionate care</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Technology</h3>
              <p className="text-gray-600">Our clinic is equipped with the latest dental technology for accurate diagnoses and comfortable treatments.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Experienced Team</h3>
              <p className="text-gray-600">Our dentists and staff have years of experience and stay updated with the latest dental practices.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Patient-Centered Care</h3>
              <p className="text-gray-600">We prioritize your comfort and satisfaction, ensuring a positive dental experience every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600">Comprehensive dental care for the whole family</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <img 
                src="https://source.unsplash.com/featured/600x400/?dental-cleaning" 
                alt="General Dentistry" 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">General Dentistry</h3>
              <p className="text-gray-600 mb-4">Regular check-ups, cleanings, and preventive care to maintain your oral health.</p>
              <Link to="/services#general" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                Learn more <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <img 
                src="https://source.unsplash.com/featured/600x400/?smile" 
                alt="Cosmetic Dentistry" 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cosmetic Dentistry</h3>
              <p className="text-gray-600 mb-4">Enhance your smile with teeth whitening, veneers, and other cosmetic procedures.</p>
              <Link to="/services#cosmetic" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                Learn more <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <img 
                src="https://source.unsplash.com/featured/600x400/?orthodontics" 
                alt="Orthodontics" 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Orthodontics</h3>
              <p className="text-gray-600 mb-4">Straighten your teeth with braces or clear aligners for a beautiful smile.</p>
              <Link to="/services#orthodontics" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                Learn more <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Patients Say</h2>
            <p className="mt-4 text-lg text-gray-600">Read testimonials from our satisfied patients</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"I've been coming to DentalCare for years and have always received excellent treatment. The staff is friendly and professional, and Dr. Johnson is the best!"</p>
              <div className="font-medium text-gray-900">Sarah M.</div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"As someone who used to be terrified of dental visits, I can't recommend DentalCare enough. They made me feel comfortable and explained everything clearly."</p>
              <div className="font-medium text-gray-900">Michael T.</div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"My children love coming to DentalCare! Dr. Davis is amazing with kids and makes the whole experience fun and stress-free. Highly recommended for families!"</p>
              <div className="font-medium text-gray-900">Jennifer L.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Schedule Your Visit?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Book an appointment today and take the first step towards a healthier smile.</p>
          <Link 
            to="/book" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-blue-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            <Calendar className="h-5 w-5 mr-2" />
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PublicHome;