import {createBrowserRouter} from 'react-router-dom'
import MainPage from './pages'
import About from './pages/About'
import Skills from './pages/Skills'
import Expriences from './pages/Expriences'
import Education from './pages/Education'
import Contacts from './pages/Contacts'
import Projects from './pages/Projects'
import Services from './pages/Services'
import SinglePagePortfolio from './pages/SinglePagePortfolio'


const router = createBrowserRouter([
    {
        path : '/',
        element: <MainPage/>,
        children : [
            {
                index : true,
                element : <SinglePagePortfolio/>
            }, 
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/skills",
                element : <Skills/>
            },
            {
               path : "/experience",
               element : <Expriences/>
            },
            {
                path : "/projects",
                element : <Projects/>

            },
            {
                path : "/education",
                element: <Education/>
            },
            {
                path : "/services",
                element : <Services/>
            },
            {
                path : "/contact",
                element : <Contacts/>
            }
        ]
    }

])



export default router