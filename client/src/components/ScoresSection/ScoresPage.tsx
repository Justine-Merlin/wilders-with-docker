import { useEffect, useState } from 'react'
import Score from '../shared/Score';
// import {
//     fetchScoresSortedByAscName,
//     fetchScoresSortedBDescName,
//     fetchScoresSortedBAscScores,
//     fetchScoresSortedBDescScores,
//     fetchScoresSortedBDescLanguages,
//     fetchScoresSortedBAscLanguages
// } from '../../api';
import ScoreHeader from '../shared/ScoreHeader';
import { IScore, ISortingScore } from '../../interfaces/interfaces';

const ScoresPage = () => {
    const [scores, setScoresList] = useState<IScore[] | []>([]);
    const [sortBy, setSortBy] = useState<ISortingScore>({
        label: "name",
        direction: "asc"
    })
    const fetchScores = async () => {
        // let response;
        // // sort by asc names
        // if (sortBy.label === "name" && sortBy.direction === "asc")
        //     response = await fetchScoresSortedByAscName();
        // // sort by desc names
        // if (sortBy.label === "name" && sortBy.direction === "desc")
        //     response = await fetchScoresSortedBDescName();
        // // sort by asc scores
        // if (sortBy.label === "score" && sortBy.direction === "asc")
        //     response = await fetchScoresSortedBAscScores();
        // // sort by desc scores
        // if (sortBy.label === "score" && sortBy.direction === "desc")
        //     response = await fetchScoresSortedBDescScores();
        // // sort by asc languages
        // if (sortBy.label === "language" && sortBy.direction === "asc")
        //     response = await fetchScoresSortedBAscLanguages();
        // // sort by desc languages
        // if (sortBy.label === "language" && sortBy.direction === "desc")
        //     response = await fetchScoresSortedBDescLanguages();
        // setScoresList(response);
    }

    useEffect(() => {
        fetchScores();
        // eslint-disable-next-line
    }, [sortBy])
    console.log(scores);

    return (
        <div className='scores-section size-restrictions'>
            <h4>Tableau des évaluations</h4>
            <ScoreHeader setSortBy={setSortBy} showName={true} showDate={false} />
            {scores.map((score: IScore) => (
                <Score score={score} key={score.id} showName={true} showDate={false} />
            ))}
        </div>
    )
}

export default ScoresPage