import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Home from '../pages/Home';
import Sabores from '../pages/Sabores';
import Sobre from '../pages/Sobre';

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/gelateria' element={<Home/>}/>
            <Route path='/sabores' element={<Sabores/>}/>
            <Route path='/sobre' element={<Sobre/>}/>
        </Routes>
    </BrowserRouter>
)

export default AppRoutes;