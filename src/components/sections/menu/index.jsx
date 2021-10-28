import LogoCompact from '../../../public/logos/logo-compact.svg';
import { ListUnOrder, ListItem } from '../../elements/list';
import { ButtonLogin } from '../login';

function NavPageMenu() {
	return (
		<nav className={'w-full shadow-md fixed z-50 bg-tp-white'} id={'#'}>
			<div
				className={
					'container m-auto py-3 flex flex-row items-center justify-between '
				}
			>
				<LogoCompact />
				<ListUnOrder>
					<ListItem idSectionPage={'enviar'}>Enviar Pacote</ListItem>
					<ListItem idSectionPage={'rastrear'}>Rastrear</ListItem>
					<ListItem idSectionPage={'transpotter'}>Seja um transpotter</ListItem>
				</ListUnOrder>
				<ButtonLogin />
			</div>
		</nav>
	);
}

export { NavPageMenu };
