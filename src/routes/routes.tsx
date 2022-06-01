
import CreateNewPassword from '../pages/CreateNewPassword'
import LoginPage from '../pages/LoginPage'
import RecoverPassword from '../pages/RecoverPassword'
import RegisterPage from '../pages/RegisterPage'



export const ROUTES =[
  {path:"/", element:<LoginPage/>},
  {path:"/login", element:<LoginPage/>},
  {path:"/register", element:<RegisterPage/>},
  {path:"/recover", element:<RecoverPassword/>},
  {path:"/create_password", element:<CreateNewPassword/>},

 
]
export default ROUTES