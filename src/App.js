import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Support from "./pages/Support";
import Contact from "./pages/ContactUs";
import Home from "./pages/Home";
function App() {
return (
	<Router>
	<Navbar />
	<Switch>
		<Route path="/" exact component={Home} />
		<Route path="/about-us" component={AboutUs} />
		<Route path="/services" component={Services} />
		<Route path="/contact" component={Contact} />
		<Route path="/support" component={Support} />
	</Switch>
	</Router>
);
}

export default App;
