import { ButtonLink } from '../../elements/button';

const ButtonLogin = ({ ...props }) => {
	return (
		<ButtonLink
			bgcolor={'bg-tp-yellow'}
			textcolor={'text-tp-purppe'}
			url={'/login'}
		>
			Entrar
		</ButtonLink>
	);
};

export { ButtonLogin };
