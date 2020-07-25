import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import getStart from './pages/GetStart/GetStart';
import setting from './pages/Setting/Setting';
import noContacts from './pages/Contact/NoContact';
import AccountSetting from './pages/Setting/AccountSetting';
import searchOverview from './pages/Search/Search';
import contactDetail from './pages/Contact/ContactDetail';
import selectAvatar from './pages/User/SelectAvatar';
import discoverVote from './pages/User/DiscoverVote';
import discover from './pages/User/Discover';
import editProfile from './pages/User/EditProfile';
import myAccount from './pages/Contact/MyContacts';
import matchs from './pages/Matchs/matchs';
import experiences from './pages/Experiences/experiences';
import login from './pages/Auth/Login';
import logout from './pages/Auth/Logout';
import signUp from './pages/Auth/Signup';
import passwordForgotten from './pages/Auth/PasswordForgotten';
import Notifications from './pages/Setting/Notifications/Notifications'
import SecuritySetting from './pages/Setting/Security/Security'
import EmailAndSMS from './pages/Setting/Notifications/EmailAndSMS';
import Password from './pages/Setting/Security/Password';

import EventActivate from './pages/Event/EventActivate';
import Confirmed from './pages/Event/Confirmed';
import Events from './pages/Event/EventsList';
import EventDetail from './pages/Event/EventDetail';
import EventBook from './pages/Event/EventBook';
/* apollo client part */
import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import config from './config';

/* okta auth part */
import { Security, LoginCallback } from '@okta/okta-react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/index.scss';



const cache = new InMemoryCache();

const client = new ApolloClient({
  link: new WebSocketLink({
    uri: 'wss:experiencehasura.herokuapp.com/v1/graphql',
    options: {
      reconnect: true,
      connectionParams: {
        headers: {
          //Authorization: `Bearer ${authToken}`
          "x-hasura-access-key": "f23aee34c10c1abda86bcb1321c398f2553923f461e5abd2ce704179723cc4ff",
          "x-hasura-role": "client-app",
        }
      }
    }
  }),
  cache: cache
});



const App: React.FC = (props) => {

  const customAuthHandler = (props) => {props.history.push('/login')}
  return (
    <ApolloProvider client={client}>
      <IonApp>
        <Security {...config.okta} onAuthRequired={customAuthHandler}>
          <IonReactRouter>
              <IonRouterOutlet>
                <Route path="/login" component={login} exact={true} />
                <Route path="/register" component={signUp} exact={true} />
                <Route path="/password_forgotten" component={passwordForgotten} exact={true} />
                <Route path="/logout"  component={logout} exact={true} />
                <Route path="/getstart" component={getStart} exact={true} />
                <Route path="/setting" component={setting} exact={true} />

                <Route path="/account_setting" component={AccountSetting} exact={true} />
                <Route path="/account_setting/notifications" component={Notifications} exact={true} />
                <Route path="/account_setting/notifications/emailandsms" component={EmailAndSMS} exact={true}/>
                <Route path="/account_setting/security" component={SecuritySetting} exact={true} />
                <Route path="/account_setting/security/password" component={Password} />
                
                <Route path="/events_list" component={Events} exact={true} />
                <Route path="/event_detail" component={EventDetail} exact={true} />
                <Route path="/event_book" component={EventBook} exact={true} />
                <Route path="/events_activate" component={EventActivate} exact={true} />
                <Route path="/conformed" component={Confirmed} exact={true} />

                <Route path="/mycontacts" component={myAccount} exact={true} />
                <Route path="/no_contacts" component={noContacts} exact={true} />
                <Route path="/search_overview" component={searchOverview} exact={true} />
                <Route path="/editprofile" component={editProfile} exact={true} />
                <Route path="/contactdetail" component={contactDetail} exact={true} />
                <Route path="/selectavatar" component={selectAvatar} exact={true} />
                <Route path="/discovervote" component={discoverVote} exact={true} />
                <Route path="/discover" component={discover} exact={true} />
                <Route path="/matches" component={matchs} exact={true} />
                <Route path="/experiences" component={experiences} exact={true} />
                <Route path="/implicit/callback" component={LoginCallback} exact />
                <Route path="/" render={() => <Redirect to="/getstart" />} exact={true} />
                <Route component={getStart} />
              </IonRouterOutlet>
          </IonReactRouter>
        </Security>
      </IonApp>
    </ApolloProvider>
  );
}
export default App;