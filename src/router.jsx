import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {Sobre} from './pages/Sobre'
import {Curriculo} from './pages/Curriculo'
import {Hobbies} from './pages/Hobbies'
import {Galeria} from './pages/Galeria'
import {Contato} from './pages/Contato'

import {Header, Footer} from './components/Main'

export const Router = () => {
	return(
		<BrowserRouter>
			<Header></Header>
			<Switch>
				<Route path={['/','/home']} exact component={Home}></Route>
				<Route path='/sobre' component={Sobre}></Route>
				<Route path='/curriculo' component={Curriculo}></Route>
				<Route path='/hobbies' component={Hobbies}></Route>
				<Route path='/galeria' component={Galeria}></Route>
				<Route path='/contato' component={Contato}></Route>
			</Switch>
			<Footer></Footer>
		</BrowserRouter>
	)
}