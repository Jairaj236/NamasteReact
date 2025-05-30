import React from 'react';
import ReactDOM from 'react-dom/client'
// React.createElement => Object => Html element (render)
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About';
import ConatctUs from './components/ConatctUs';
import RestauranstMenu from './components/RestaurantsMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Error from './components/Error';


const heading = React.createElement(
    'h1',
    {id:"parent"},
    "heading from the React Element"
  )
 // jsx is different it is like html like structure it has diffrent synatax
 // jsx => translate before reaching to js - parcel(any bundler, webpack or vite) along with babel
 // jsx -> babel translate to React.createElement => ReactElement js Object => HTML element
  // let headingJsx = <h2 id="heading">this is from jsx heloooooo 🐦‍🔥</h2>
  // console.log(heading,headingJsx);
  
  // component 1. functional based 2. class based
  
  

  
  const AppLayout = ()=>{
    return(
      <div className='layout'>
                <Header/>
                <Outlet/>
    
      </div>
    )
  }

  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <AppLayout/>,
      children:[
        {
          path : "/",
          element : <Body/>
        },

        {
          path : "/about",
          element : <About/>
        },
        {
          path : "/contact",
          element : <ConatctUs/>
        },
        {
          path : "/restaruants/:resId",
          element : <RestauranstMenu/>
        }

      ],
      errorElement : <Error/>
    },
   

  ])
  const HeadingComponent = () =>(<h1 className='heading'>This is an Functional Component Heading 😍</h1>)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)
