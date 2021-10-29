import { ButtonLink } from '../../elements/button';
import { SubTitle } from '../../elements/headers';

import SVGMobileView from '../../../public/assets/mobile-view.svg';
import SVGSend from '../../../public/assets/moving_re_pipp.svg';
import SVGRouter from '../../../public/assets/on_the_way_re_swjt.svg';
import SVGDelivery from '../../../public/assets/package_arrived_63rf.svg';

const SectionHomeRastreios = () => {
	return (
		<section
			className={'xl:h-screen bg-tp-white text-tp-purppe'}
			id={'rastrear'}
		>
			<div
				className={
					'container m-auto xl:grid xl:grid-cols-2 xl:h-full xl:py-0 py-32 flex flex-col-reverse gap-10 '
				}
			>
				<div
					className={'flex flex-col justify-center xl:items-start mr-20 gap-2'}
				>
					<SubTitle>Acompanhe ate chegar</SubTitle>
					<p>
						É mais seguro: você fica em casa ou na sua empresa sem precisar
						pegar filas ou ir até uma agência, por exemplo. Insira todas as
						informações do envio na plataforma, a gente encontra o melhor
						veículo e vai até seu endereço para retirar seus pacotes. Sem custo
						extra ou mínimo de pacote.
					</p>
					<ButtonLink
						bgcolor={'bg-tp-yellow'}
						textcolor={'text-tp-purppe'}
						className={'border-none xl:self-auto self-center'}
						url={'/rastrear'}
					>
						Quero rastrear
					</ButtonLink>
				</div>
				<div className={' flex justify-center items-center'}>
					<SVGMobileView />
				</div>
			</div>
		</section>
	);
};

export { SectionHomeRastreios };
