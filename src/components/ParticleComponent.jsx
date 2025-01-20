import React, { useEffect } from 'react';

const ParticleComponent = ({children}) => {
    useEffect(() => {
        // Load the particles.js configuration
        particlesJS.load('particles-js', '/particle.json', function() {
        });
    }, []);

    return (
           <>
        <div id="particles-js" style={{ position: 'fixed', top: '0', left: '0',bottom: '0', right:'0',zIndex:'0' }}>
        </div>
        </>
    );
};

export default ParticleComponent;