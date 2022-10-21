import React, { Dispatch, useEffect, useState } from 'react'
import { ILanguage, INewWilder } from '../../interfaces/interfaces'

type Props = {
  language: ILanguage;
  newWilder: INewWilder;
  setNewWilder: Dispatch<React.SetStateAction<INewWilder>>;
}
const LanguageBtn = ({ language, newWilder, setNewWilder }: Props) => {
  const [isSelected, setIsSelected] = useState(false)
  const handleAddOrRemoveLanguage = () => {
    if (!isSelected) {
      let lang = {
        id: language.id,
        label: language.label
      };
      setNewWilder({ ...newWilder, languages: [...newWilder.languages, lang] })
    } else {
      let tempLanguages = newWilder.languages;
      tempLanguages = tempLanguages.filter(element => element.id !== language.id)
      setNewWilder({ ...newWilder, languages: tempLanguages })
    }
    setIsSelected(!isSelected);
  }
  useEffect(() => {
    if (newWilder.languages.length === 0) {
      setIsSelected(false)
    }
  }, [newWilder.languages])

  return (
    <span
      className={isSelected ? "new-wilder-form-language-item selected" : "new-wilder-form-language-item"}
      onClick={handleAddOrRemoveLanguage}
    >{language.label}</span>
  )
}

export default LanguageBtn