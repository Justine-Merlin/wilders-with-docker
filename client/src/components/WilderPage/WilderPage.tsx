import { INewScore } from '../../interfaces/interfaces'
import { SyntheticEvent, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client';
import { GET_WILDER_BY_ID } from '../../graphql/querries';
import { NEW_SCORE_MUTATION } from '../../graphql/mutations';
import ScoreList from './ScoreList';
import WilderInfos from './WilderInfos';

const WilderPage = () => {

    //Get id from url to get data by id
    const url = window.location.pathname.split('/');
    const wilderId: string | number | undefined = url.at(-1);

    //apollo client querries and mutations
    const { data, loading, refetch } = useQuery(GET_WILDER_BY_ID, {
        variables: {
            getWilderByIdId: wilderId
        }
    });
    const [sendNewScore, newScoreSending] = useMutation(NEW_SCORE_MUTATION);

    //states
    const [newScore, setNewScore] = useState<INewScore>({
        value: "",
        language: "",
        wilder: wilderId
    })
    const [addNewScore, setAddNewScore] = useState(false);

    //functions
    const handleSubmitNewScore = async (e: SyntheticEvent) => {
        e.preventDefault();
        if (newScore.value !== "" && newScore.language !== "" && newScore.wilder !== undefined) {
            console.log(newScore);
            sendNewScore({
                variables: {
                    newScore: {
                        value: newScore.value,
                        language: newScore.language,
                        wilder: parseInt(newScore.wilder)
                    }
                }
            });
            if (!newScoreSending.loading && !newScoreSending.error) {
                setNewScore({
                    value: "",
                    language: "",
                    wilder: undefined
                });
                refetch({ getWilderByIdId: wilderId });
            } else {
                alert("Une erreur s'est produite")
            }
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