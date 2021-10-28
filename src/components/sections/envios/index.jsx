import { ButtonLink } from '../../elements/button';
import { SubTitle } from '../../elements/headers';

import SVGModality from '../../../public/assets/modality.svg';
import { Paragraph } from '../../elements/paragraph';

const SectionHomeEnvios = () => {
	return (
		<section className={'xl:h-screen bg-tp-purppe text-tp-white'} id={'enviar'}>
			<div
				className={
					'container m-auto xl:grid xl:grid-cols-2 xl:gap-1 xl:h-full py-32 flex flex-col items-center'
				}
			>
				<div className={'h-full flex items-center justify-center'}>
					<SVGModality className={'w-full'} />
				</div>
				<div
					className={
						'xl:h-full flex flex-col justify-center xl:items-start items-center gap-2 xl:mr-20 xl:mt-0 mt-10'
					}
				>
					<SubTitle className={'self-start'}>Em qualquer lugar</SubTitle>
					<Paragraph>
						Na transporta, o envio é do jeito que você precisa. Ideal para
						qualquer encomenda de todos os tamanhos, você envia sem se preocurar
						com as taxas{' '}
					</Paragraph>
					<Paragraph>
						A transporta busca o pacote, você acompanha o andamento e paga só no
						mês seguinte. Tudo isso sem sair do seu endereço e sem pesar no seu
						bolso.
					</Paragraph>
					<ButtonLink
						bgcolor={'bg-tp-yellow'}
						textcolor={'text-tp-purppe'}
						style={'border-none'}
						url={'/envio'}
					>
						Quero enviar agora
					</ButtonLink>
				</div>
			</div>
		</section>
	);
};

export { SectionHomeEnvios };
