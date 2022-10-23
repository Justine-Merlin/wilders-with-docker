import { IWilder } from '../../interfaces/interfaces';
import avatar from '../../assets/img/avatar_default.png';
import { AiFillEdit } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { DELETE_WILDER_MUTATION } from '../../graphql/mutations';

type Props = {
    wilder: IWilder | null;
}

const WilderInfos = ({ wilder }: Props) => {

    let navigate = useNavigate();

    const [deleteWilder, { loading, error }] = useMutation(DELETE_WILDER_MUTATION);

    const handleDelete = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const answer = window.confirm(`Souhaitez-vous supprimer ${wilder?.first_name} ${wilder?.last_name} ?`);
        if (answer) {
            deleteWilder({ variables: { deleteWilderId: wilder?.id } })
            if (!loading && !error) {
                navigate('/');
            };
        }
    }

    return (
        <div className='wilder-page-infos-container'>
            <img src={avatar} alt="" />
            <div>
                <h3>{wilder?.first_name} {wilder?.last_name}</h3>
                <p>Description : TODO</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus libero in rhoncus ullamcorper. Etiam ullamcorper, magna ac volutpat vestibulum, lectus neque tincidunt nunc, vel ornare neque tellus a turpis. Quisque fermentum nisl id nunc mattis ultricies. Phasellus finibus ultricies tristique. Quisque sollicitudin ex quam, sed pharetra lorem posuere vel. Vestibulum nec massa a urna semper convallis ut sit amet tellus.</p>
                <label>Compétences :</label>
                <div>
                    {wilder?.languages.length !== 0 ?
                        wilder?.languages.map((language, i) => (
                            <span className='wilder-page-infos-skill-item' key={language.label}>{i === wilder.languages.length - 1 ? language.label : language.label + " - "}</span>
                        )) :
                        <span>Aucune compétence renseignée</span>
                    }
                </div>
                <div className='wilder-page-infos-btn'>
                    <button>
                        <AiFillEdit />
                        <span>Modifier</span>
                    </button>
                    <button onClick={handleDelete}>
                        <MdDeleteForever />
                        <span>Supprimer</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WilderInfos