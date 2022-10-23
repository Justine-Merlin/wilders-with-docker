import { ILanguage, INewScore, IScore, ISortingScore } from '../../interfaces/interfaces'
import { Dispatch, SyntheticEvent, useState } from 'react';
import NewScoreForm from '../shared/NewScoreForm';
import Score from '../shared/Score';
import ScoreHeader from '../shared/ScoreHeader';

type Props = {
    scores: IScore[] | undefined;
    languages: ILanguage[] | undefined;
    setNewScore: Dispatch<React.SetStateAction<INewScore>>;
    newScore: INewScore;
    handleSubmitNewScore: (e: SyntheticEvent) => void;
    addNewScore: boolean;
    setAddNewScore: Dispatch<React.SetStateAction<boolean>>;
}

const ScoreList = ({ scores, languages, setNewScore, newScore, handleSubmitNewScore, addNewScore, setAddNewScore }: Props) => {
    const [sortBy, setSortBy] = useState<ISortingScore>({
        label: "createdDate",
        direction: "asc"
    })

    return (
        <div className='wilder-page-scores-list-section'>
            <NewScoreForm
                addNewScore={addNewScore}
                setAddNewScore={setAddNewScore}
                newScore={newScore}
                setNewScore={setNewScore}
                languages={languages}
                handleSubmitNewScore={handleSubmitNewScore} />
            {scores?.length === 0 ?
                <>
                    <h4>Aucune note enregistrée !</h4>
                </>
                :
                <>
                    <ScoreHeader setSortBy={setSortBy} showName={false} showDate={true} />
                    {scores?.map((score) => (
                        <Score score={score} key={score.id} showName={false} showDate={true} />
                    ))}
                </>
            }
        </div>
    )
}

export default ScoreList