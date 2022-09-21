import { Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useUser } from '../../context/userContext';

export const UserHome = () => {
	const { user } = useUser();

	return (
		<Stack p={20} display='flex' direction={'column'} align='center' justify='center'>
			<Flex
				width='100%'
				maxW={360}
				bg='gray.800'
				p='8'
				borderRadius={8}
				flexDir='column'
				align='center'
			>
				<Heading fontSize='4xl'>Home</Heading>
				<Text fontSize='2xl'>Bienvenido {user?.name}</Text>
				<Flex justify='center' alignItems='stretch' mt={4}>
					{user?.role === 'admin' ? (
						<Button as={RouterLink} colorScheme='teal' to='/post-products' m='1'>
							<Text fontWeight='bold'>Cargar productos</Text>
						</Button>
					) : (
						<Button as={RouterLink} colorScheme='teal' to='/cart' m='1'>
							<Text fontWeight='bold'>Ver carrito</Text>
						</Button>
					)}
					<Button as={RouterLink} colorScheme='teal' to='/products' m='1'>
						<Text fontWeight='bold'>Ver productos</Text>
					</Button>
				</Flex>
			</Flex>
		</Stack>
	);
};
