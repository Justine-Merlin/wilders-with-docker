import { INewScore, IWilder } from '../../interfaces/interfaces'
// import axios from 'axios';
import { SyntheticEvent, useEffect, useState } from 'react'
import ScoreList from './ScoreList';
import WilderInfos from './WilderInfos';

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

    // const fetchData = async () => {
    //     const response = await axios.get('http://localhost:3050/wilders/' + wilderId)
    //     setWilder(response.data[0]);
    // }
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

    useEffect(() => {
        // fetchData()
        // eslint-disable-next-line
    }, [])

    return (
        <div className='wilder-page size-restrictions'>
            <h3>Fiche élève</h3>
            <WilderInfos wilder={wilder} />
            <ScoreList
                scores={wilder?.scores}
                languages={wilder?.languages}
                wilderId={wilder?.id}
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