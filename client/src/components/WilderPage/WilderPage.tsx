import { INewScore, IWilder } from '../../interfaces/interfaces'
// import axios from 'axios';
import { SyntheticEvent, useEffect, useState } from 'react'
import ScoreList from './ScoreList';
import WilderInfos from './WilderInfos';
import { useQuery } from '@apollo/client';
import { GET_WILDER_BY_ID } from '../../graphql/querries';

type Props = {}

const WilderPage = (props: Props) => {
    const url = window.location.pathname.split('/');
    const wilderId = url.at(-1)

    const [wilder, setWilder] = useState<IWilder | null>(null);
    const [newScore, setNewScore] = useState<INewScore>({
        value: "",
        language: "",
        wilder: undefined
    })
    const [addNewScore, setAddNewScore] = useState(false);
    const { data, loading, error } = useQuery(GET_WILDER_BY_ID, {
        variables: {
            getWilderByIdId: wilderId
        }
    });

    const handleSubmitNewScore = async (e: SyntheticEvent) => {
        e.preventDefault();
        if (newScore.value !== "" && newScore.language !== "" && newScore.wilder !== undefined) {
            // const response = await axios.post('http://localhost:3050/scores', newScore);
            // setNewScore({
            //     value: "",
            //     language: "",
            //     wilder: undefined
            // });
            // setAddNewScore(false);
            // fetchData();
        }
    }

    if (loading) {
        return <h1>Loading</h1>
    }
    return (
        <div className='wilder-page size-restrictions'>
            <h3>Fiche élève</h3>
            <WilderInfos wilder={data.getWilderById} />
            <ScoreList
                scores={data.getWilderById?.scores}
                languages={data.getWilderById?.languages}
                wilderId={data.getWilderById?.id}
                newScore={newScore}
                setNewScore={setNewScore}
                handleSubmitNewScore={handleSubmitNewScore}
                addNewScore={addNewScore}
                setAddNewScore={setAddNewScore}
            />
        </div>
    )
}

export default WilderPage