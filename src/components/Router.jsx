import { Routes, Route } from 'react-router-dom';  // removing duplicate BrowserRouter being aliased as Router. Problem with wrapping Browser Router twice
import Home from '../pages/Home';
import About from '../pages/About';
import Property from '../pages/Property';
import Error from '../pages/Error';

function AppRouter() {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/property/:id" element={<Property />} />
            <Route path="*" element={<Error />} />
        </Routes>

    );
}

export default AppRouter;