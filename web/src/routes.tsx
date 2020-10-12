import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'; /* Faz o direcionamento para outras paginas */
import Landing from './pages/Landing'; /* Uma pagina */
import OrphanagesMap from './pages/OrphanagesMap'; /* Uma pagina */

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrphanagesMap} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;