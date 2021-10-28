import { ButtonSubmit } from '../../elements/button';
import { Input } from '../../elements/input';
import { Paragraph } from '../../elements/paragraph';
import { Form } from '../../elements/form';
import { SubTitle } from '../../elements/headers';

import SVGMobileProfile from '../../../public/assets/mobile-profile.svg';

const SectionHomeTranspotter = () => {
	return (
		<section
			className={'xl:h-screen bg-tp-yellow text-tp-purppe xl:py-0 py-32'}
			id={'transpotter'}
		>
			<div
				className={'xl:grid xl:grid-cols-2 xl:h-full container m-auto xl:gap-4'}
			>
				<div className={'flex items-center justify-end'}>
					<SVGMobileProfile />
				</div>
				<div
					className={
						'flex flex-col items-start justify-center xl:mr-20 xl:mt-0 mt-10'
					}
				>
					<SubTitle>Venha ser um transpotter</SubTitle>
					<Paragraph>
						É mais seguro: você fica em casa ou na sua empresa sem precisar
						pegar filas ou ir até uma agência, por exemplo. Insira todas as
						informações do envio na plataforma, a gente encontra o melhor
						veículo e vai até seu endereço para retirar seus pacotes. Sem custo
						extra ou mínimo de pacote.
					</Paragraph>
					<Form className={'xl:mt-0 mt-5'}>
						<div>
							<Input
								placeholder={'Como você se identifica'}
								name={'full_name'}
							/>
						</div>
						<div>
							<Input
								type={'email'}
								placeholder={'Seu melhor email'}
								name={'email'}
							/>
						</div>
						<div>
							<Input
								placeholder={'whatsapp'}
								name={'phone_number'}
								type={'tel'}
							/>
						</div>
						<div>
							<ButtonSubmit formMethod={'GET'}>Cadastrar</ButtonSubmit>
						</div>
					</Form>
				</div>
			</div>
		</section>
	);
};

export { SectionHomeTranspotter };
