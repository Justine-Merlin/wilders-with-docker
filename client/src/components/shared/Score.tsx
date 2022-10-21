import { IScore } from '../../interfaces/interfaces'

type Props = {
    score: IScore;
    showName: boolean;
    showDate: boolean;
}
const Score = ({ score, showName, showDate }: Props) => {
    let createdDate = new Date(score.createdDate);

    return (
        <div className='score-item'>
            {showName && <div>{score.wilder?.last_name} {score.wilder?.first_name}</div>}
            {showDate && <div>{createdDate.toLocaleDateString("fr")}</div>}
            <div>{score.value}</div>
            <div>{score.language?.label}</div>
        </div>
    )
}

export default Score