import {createBrowserRouter,RouterProvider} from "react-router"

import RootLayout from "./Components/RootLayout"
import Home from "./Components/Home"
import CreateEmp from "./Components/CreateEmp"
import ListOfEmps from "./Components/ListOfEmps"
import Employees from "./Components/Employees"
import EditEmployee from "./Components/EditEmployee"


export default function App() {
      const  routeObj = createBrowserRouter([
        {
          path:"/",
          element:<RootLayout/>,
          children:[
            {
              path:"",
              element:<Home/>
            }
            ,
            {
              path:"CreateEmp",
              element:<CreateEmp/>
            },
            {
              path:"ListOfEmps",
              element:<ListOfEmps/>
            },
            {
              path:"Employee",
              element:<Employees/>
            },
            {
              path:"EditEmployee",
              element:<EditEmployee/>
            }
          ]
        }
      ])
  return (
    <div>
      <RouterProvider router = {routeObj}/>
    </div>
  )
}
