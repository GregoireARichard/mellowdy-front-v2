
import './Articles.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {NavLink} from 'react-router-dom'
import Article1 from './Subcomponents/Article1';
import Article2 from './Subcomponents/Article2';
import Article3 from './Subcomponents/Article3';
import Article4 from './Subcomponents/Article4';
import Article5 from './Subcomponents/Article5';
import Article6 from './Subcomponents/Article6';
import Article7 from './Subcomponents/Article7';
import Article8 from './Subcomponents/Article8';
import Article9 from './Subcomponents/Article9';
import Article10 from './Subcomponents/Article10';



function Articles() {
  return (
    <div className='articlesgrid'>

        <div className='articlesContainer'>

            <div className='articlesLinks'>
                <NavLink to='/articles/1'>1</NavLink>
                <NavLink to='/articles/2'>2</NavLink>
                <NavLink to='/articles/3'>3</NavLink>
                <NavLink to='/articles/4'>4</NavLink>
                <NavLink to='/articles/5'>5</NavLink>
                <NavLink to='/articles/6'>6</NavLink>
                <NavLink to='/articles/7'>7</NavLink>
                <NavLink to='/articles/8'>8</NavLink>
                <NavLink to='/articles/9'>9</NavLink>
                <NavLink to='/articles/10'>10</NavLink>
            </div>

            <Routes>
                <Route path='/1' element={<Article1/>}/>
                <Route path='/2' element={<Article2/>}/>
                <Route path='/3' element={<Article3/>}/>
                <Route path='/4' element={<Article4/>}/>
                <Route path='/5' element={<Article5/>}/>
                <Route path='/6' element={<Article6/>}/>
                <Route path='/7' element={<Article7/>}/>
                <Route path='/8' element={<Article8/>}/>
                <Route path='/9' element={<Article9/>}/>
                <Route path='/10' element={<Article10/>}/>
            </Routes>
          
        </div>

        
    </div>
  );
}

export default Articles;