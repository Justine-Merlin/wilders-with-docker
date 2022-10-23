import { ILanguage, INewScore } from '../../interfaces/interfaces';
import React, { ChangeEvent, Dispatch, SyntheticEvent } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai';
type Props = {
    addNewScore: boolean;
    setAddNewScore: Dispatch<React.SetStateAction<boolean>>;
    newScore: INewScore;
    setNewScore: Dispatch<React.SetStateAction<INewScore>>;
    languages: ILanguage[] | undefined;
    handleSubmitNewScore: (e: SyntheticEvent) => void
}

const NewScoreForm = ({ addNewScore, setAddNewScore, newScore, setNewScore, languages, handleSubmitNewScore }: Props) => {
    return (
        <div className='new-score-form'>
            {
                !addNewScore ?
                    <button onClick={() => setAddNewScore(true)}>
                        <AiFillPlusCircle />
                        <span>
                            Ajouter une note
                        </span>
                    </button>
                    :
                    <div>
                        <div className='new-score-form-input'>
                            <label htmlFor="language">Langage :</label>
                            <select defaultValue={"default"} onChange={(e: ChangeEvent<HTMLSelectElement>) => setNewScore({ ...newScore, language: parseInt(e.target.value) })} >
                                <option value={"default"} disabled>
                                    Sélectionner
                                </option>
                                {
                                    languages?.map((language) => (
                                        <option value={language.id} key={language.id}>{language.label}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='new-score-form-input'>
                            <label htmlFor="value">Note :</label>
                            <input type="number" name="value" id="value" max="20" value={newScore.value} onChange={(e: ChangeEvent<HTMLInputElement>) => setNewScore({ ...newScore, value: parseInt(e.target.value) })} />
                        </div>
                        <button onClick={handleSubmitNewScore} >Envoyer</button>
                    </div>
            }
        </div>
    )
}

export default NewScoreForm;