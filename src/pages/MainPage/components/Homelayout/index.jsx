import React from 'react';
import Present from './components/Present';
import Welcome from './components/Welcome';
import Gallery from './components/Gallery';
import Benefits from './components/Benefits';
import Questions from './components/Questions';

function Homelayout() {
    return (
        <main className='main'>
            <Present />

            <Welcome />
            
            <Gallery />

            <Benefits />

            <Questions />
        </main>
    );
}

export default Homelayout;