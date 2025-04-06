import React, { useState, useEffect } from 'react';

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      name: "John Doe",
      age: "66",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh scelerisque eu dignissim suscipit velit sit arcu. Egestas dolor consequat quis integer sed in magna a."
    },
    {
      name: "John Doe",
      age: "66",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh scelerisque eu dignissim suscipit velit sit arcu. Egestas dolor consequat quis integer sed in magna a. dolor consequat quis integer sed in magna a. dolor consequat quis integer sed in."
    },
    {
      name: "John Doe",
      age: "66",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh scelerisque eu dignissim suscipit velit sit arcu. Egestas dolor consequat quis integer sed in magna a."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center'
    }}>
      <h2 style={{
        fontSize: '32px',
        fontWeight: 'bold',
        marginBottom: '40px',
        color: '#333'
      }}>What Our Clients Say?</h2>
      
      <div style={{
        position: 'relative',
        height: '300px',
        overflow: 'hidden',
        marginBottom: '30px'
      }}>
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              transition: 'all 0.5s ease',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transform: `translateX(${100 * (index - currentSlide)}%)`,
              opacity: index === currentSlide ? 1 : 0.5
            }}
          >
            <div style={{
              maxWidth: '600px',
              padding: '20px',
              backgroundColor: '#f9f9f9',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px'
              }}>
                <p style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  margin: 0
                }}>{testimonial.name}</p>
                <p style={{
                  fontSize: '16px',
                  margin: 0,
                  color: '#666'
                }}>{testimonial.age}</p>
              </div>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: '#444',
                textAlign: 'center'
              }}>{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px'
      }}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              backgroundColor: index === currentSlide ? '#000' : '#ccc'
            }}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
