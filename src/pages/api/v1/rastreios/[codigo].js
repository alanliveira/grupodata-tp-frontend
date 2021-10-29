import { rastrearEncomendas } from 'correios-brasil';

// 'QH335576397BR'
// 'QH318626249BR'
// 'QH315676674BR'
// 'QH360829481BR'
// 'NX465605758BR'

export default async function handler(req, res) {
	const { codigo } = req.query;

	const response = await rastrearEncomendas([codigo]);

	if ((await response[0].length) !== 0)
		return res.status(200).json({ code: response[0] });
	else {
		return res.status(404).json({ message: 'não encontrado' });
	}
}
