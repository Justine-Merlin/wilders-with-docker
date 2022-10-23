import { useState } from 'react'
import Score from '../shared/Score';
import { useEffect } from 'react';
import ScoreHeader from '../shared/ScoreHeader';
import { IScore, ISortingScore } from '../../interfaces/interfaces';
import { useQuery } from '@apollo/client';
import { GET_SCORES_QUERRY } from '../../graphql/querries';

const ScoresPage = () => {

    const { data, loading, refetch } = useQuery(GET_SCORES_QUERRY);

    const [sortBy, setSortBy] = useState<ISortingScore>({
        label: "name",
        direction: "asc"
    })

    useEffect(() => {
        refetch();
        // eslint-disable-next-line
    }, [])

    if (loading) {
        return <h1>Loading</h1>
    }
    return (
        <div className='scores-section size-restrictions'>
            <h4>Tableau des évaluations</h4>
            <ScoreHeader setSortBy={setSortBy} showName={true} showDate={false} />
            {data?.getAllScores.map((score: IScore) => (
                <Score score={score} key={score.id} showName={true} showDate={false} />
            ))}
        </div>
    )
}

export default ScoresPage