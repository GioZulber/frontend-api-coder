import { createContext, useContext, useEffect, useState } from 'react';
import { createCart } from '../components/cart/cartService';
import { CartType } from '../components/cart/CartTypes';
import { ProviderProps } from './contextProps';
import { useUser } from './userContext';

const CartContext = createContext({} as any);

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: ProviderProps) => {
	const { user } = useUser();
	const [cart, setCart] = useState<CartType>();

	useEffect(() => {
		if (user) {
			const res = async () => {
				try {
					const set = await createCart(user)
						.then((res) => {
							setCart(res?.data.newCart.data);
							return res?.data;
						})
						.catch((err) => {
							console.log(err);
						});
				} catch (error) {
					console.log(error);
				}
			};
			res();
		}
	}, [user, cart]);

	const totalPrice = () => {
		if (cart) {
			return cart.products.reduce((acc, cur) => acc + cur.price, 0);
		} else {
			return 0;
		}
	};

	return (
		<CartContext.Provider value={{ cart, setCart, totalPrice }}>
			{children}
		</CartContext.Provider>
	);
};
