import React, { Suspense } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider, observer } from 'mobx-react'
import { I18nextProvider } from 'react-i18next'
import HomePage from './CommonModule/components/HomePage'
import './App.css'
import i18n from './CommonModule/i18n'
import { AuthRoutes } from './AuthenticationModule/Routes'
import stores from './CommonModule/stores'
import {
   SmartFoodManagementHomePageRoutes,
   SmartFoodManagementEditPageRoutes
} from './SmartFoodManagementModule/routes'

@observer
class App extends React.Component {
   render() {
      return (
         <Provider {...stores}>
            <I18nextProvider i18n={i18n}>
               <Suspense fallback={<div />}>
                  <Router basename={process.env.PUBLIC_URL}>
                     <Switch>
                        {AuthRoutes}
                        {SmartFoodManagementHomePageRoutes}
                        {SmartFoodManagementEditPageRoutes}
                        <Route path='/'>
                           <HomePage />
                        </Route>
                     </Switch>
                  </Router>
               </Suspense>
            </I18nextProvider>
         </Provider>
      )
   }
}

export default App
