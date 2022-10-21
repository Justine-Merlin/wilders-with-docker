import { IWilder } from '../../interfaces/interfaces'
import { Link } from 'react-router-dom';
import avatar from './../../assets/img/avatar_default.png';

type Props = {
	wilder: IWilder
}

const WilderCard = ({ wilder }: Props) => {
	return (
		<div className='wilders-list-wilder-card'>
			<img src={avatar} alt="" />
			<div>
				<h5>{wilder.first_name} {wilder.last_name}</h5>
				<label>Compétences :</label>
				<div>
					{wilder.languages.length > 0 ?
						wilder.languages.map((language, i) => (
							<span key={language.label}>{i === wilder.languages.length - 1 ? language.label : language.label + " - "}</span>
						)) :
						<span>Aucune compétence renseignée</span>
					}
				</div>
			</div>
			<button>
				<Link to={"/wilder/" + wilder.id}>
					Voir la fiche
				</Link>
			</button>
		</div>
	)
}

export default WilderCard