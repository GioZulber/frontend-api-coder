import {
	Box,
	Flex,
	Avatar,
	HStack,
	Link,
	IconButton,
	Button,
	Menu,
	MenuButton,
	Icon,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { FiShoppingCart } from 'react-icons/fi';
import { Link as RouteLink, useNavigate } from 'react-router-dom';
import { useUser } from '../../context/userContext';

export const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { user, logoutUser } = useUser();
	const navigate = useNavigate();

	const Links = [
		user !== null ? { to: '/home', text: 'Inicio' } : { to: '/', text: 'Inicio' },
		{ to: '/products', text: 'Products' },
	];

	const handleLogout = () => {
		logoutUser();
		navigate('/login');
	};

	return (
		<>
			<Box bg={{ base: 'purple.800', md: 'purple.900' }} px={4}>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<IconButton
						size={'md'}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						bg={'purple.900'}
						aria-label={'Open Menu'}
						display={{ md: 'none' }}
						onClick={isOpen ? onClose : onOpen}
						_hover={{ bg: 'purple.500' }}
					/>
					<HStack spacing={8} alignItems={'center'}>
						<Box>Logo</Box>
						<HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
							{Links.map(({ to, text }) => (
								<Link
									as={RouteLink}
									to={to}
									key={text}
									px={2}
									py={1}
									rounded={'md'}
									_hover={{
										textDecoration: 'none',
										bg: 'purple.300',
									}}>
									{text}
								</Link>
							))}
						</HStack>
					</HStack>
					<Flex alignItems={'center'}>
						<Button
							onClick={handleLogout}
							variant={'solid'}
							colorScheme={'teal'}
							size={'sm'}
							mr={4}>
							Cerrar Sesión
						</Button>
						<Button variant={'solid'} colorScheme={'teal'} size={'sm'} mr={4}>
							<Link as={RouteLink} to={'/cart'}>
								<Icon as={FiShoppingCart} h={6} w={6} mt={1} alignSelf={'center'} />
							</Link>
						</Button>

						<Menu>
							<MenuButton
								as={Button}
								rounded={'full'}
								variant={'link'}
								// cursor={'pointer'}
								minW={0}>
								<Avatar size={'sm'} src={user?.avatar} />
							</MenuButton>
							{/* <MenuList bg={'gray.900'}>
								<MenuItem>Link 1</MenuItem>
								<MenuItem></MenuItem>
								<MenuDivider />
								<MenuItem>Eliminar Cuenta</MenuItem>
							</MenuList> */}
						</Menu>
					</Flex>
				</Flex>

				{isOpen ? (
					<Box pb={4} display={{ md: 'none' }}>
						<Stack as={'nav'} spacing={4}>
							{Links.map(({ to, text }) => (
								<Link
									as={RouteLink}
									to={to}
									key={text}
									px={2}
									py={1}
									rounded={'md'}
									_hover={{
										textDecoration: 'none',
										bg: 'purple.500',
									}}>
									{text}
								</Link>
							))}
						</Stack>
					</Box>
				) : null}
			</Box>
		</>
	);
};
