import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Cart } from './components/cart/Cart';
import { Login } from './components/Form/Login';
import { PostPoducts } from './components/Form/PostProducts';
import { Register } from './components/Form/Register';
import { Home } from './components/Home/Home';
import { UserHome } from './components/Home/UserHome';
import { Navbar } from './components/Navbar/Navbar';
import { ListProducts } from './components/Products/ListProducts';
import { CartProvider } from './context/cartContext';
import { UserProvider } from './context/userContext';
const routes = [
	{ path: '/', element: <Home /> },
	{ path: '/home', element: <UserHome /> },
	{ path: '/products', element: <ListProducts /> },
	{ path: '/login', element: <Login /> },
	{ path: '/register', element: <Register /> },
	{ path: '/cart', element: <Cart /> },
	{ path: '/post-products', element: <PostPoducts /> },
];

function App() {
	return (
		<BrowserRouter>
			<UserProvider>
				<CartProvider>
					<Navbar />
					<Routes>
						{routes.map(({ path, element }, index) => (
							<Route key={index} path={path} element={element} />
						))}
					</Routes>
					<ToastContainer />
				</CartProvider>
			</UserProvider>
		</BrowserRouter>
	);
}

export default App;
