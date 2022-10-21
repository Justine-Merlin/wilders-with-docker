import { ISortingScore } from '../../interfaces/interfaces';
import React, { Dispatch } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

type Props = {
    setSortBy: Dispatch<React.SetStateAction<ISortingScore>>;
    showName: boolean;
    showDate: boolean;
}
const ScoreHeader = ({ setSortBy, showName, showDate }: Props) => {
    return (
        <div className='score-item score-item-header'>
            {showName && <div>
                Nom
                <span>
                    <IoMdArrowDropup onClick={() => setSortBy({ label: "name", direction: "asc" })} />
                    <IoMdArrowDropdown onClick={() => setSortBy({ label: "name", direction: "desc" })} />
                </span>
            </div>}
            {showDate && <div>
                Date
                <span>
                    <IoMdArrowDropup onClick={() => setSortBy({ label: "date", direction: "asc" })} />
                    <IoMdArrowDropdown onClick={() => setSortBy({ label: "date", direction: "desc" })} />
                </span>
            </div>}
            <div>
                Note
                <span>
                    <IoMdArrowDropup onClick={() => setSortBy({ label: "score", direction: "asc" })} />
                    <IoMdArrowDropdown onClick={() => setSortBy({ label: "score", direction: "desc" })} />
                </span>
            </div>
            <div>
                Langage
                <span>
                    <IoMdArrowDropup onClick={() => setSortBy({ label: "language", direction: "asc" })} />
                    <IoMdArrowDropdown onClick={() => setSortBy({ label: "language", direction: "desc" })} />
                </span>
            </div>
        </div>
    )
}

export default ScoreHeader