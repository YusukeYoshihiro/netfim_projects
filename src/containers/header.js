import React  from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import Logo from '../Y\'sFILM.png';




export function HeaderContainer ({ children }) {
   return(
     <Header>
       <Header.Frame>
         <Header.Logo to={ROUTES.HOME} alt="NetFilm" src={Logo} />
         <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
       </Header.Frame>
       {children}
     </Header>
   )
};

