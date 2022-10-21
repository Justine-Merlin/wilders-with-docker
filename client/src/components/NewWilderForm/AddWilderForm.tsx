// import axios from 'axios';
import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import LanguageBtn from './LanguageBtn'
import FormInput from './FormInput'
import { ILanguage, INewWilder } from '../../interfaces/interfaces';
import { useMutation, useQuery } from '@apollo/client';
import { NEW_WILDER } from '../../graphql/mutations';
import { GET_LANGUAGES } from '../../graphql/querries';
import { log } from 'console';

const AddWilderForm = () => {
    const [newWilder, setNewWilder] = useState<INewWilder>({
        first_name: "",
        last_name: "",
        age: "",
        languages: []
    });
    const [formMessages, setFormMessages] = useState({
        firstNameError: false,
        lastNameError: false,
        submitMessageSuccess: false,
        submitMessageFail: false
    })
    const languages = useQuery(GET_LANGUAGES);
    const [sendNewWilder, { data, loading, error }] = useMutation(NEW_WILDER);
    console.log(newWilder);

    const handleSubmitNewWilder = async (e: SyntheticEvent) => {
        e.preventDefault();
        if (newWilder.first_name !== "" && newWilder.last_name !== "") {
            const answer = window.confirm(`Souhaitez-vous ajouter ${newWilder.first_name.trim()} ${newWilder.last_name.trim()} ?`);
            if (answer) {
                sendNewWilder({
                    variables: {
                        newWilder: {
                            first_name: newWilder.first_name,
                            last_name: newWilder.last_name,
                            age: newWilder.age ? parseInt(newWilder.age) : null,
                            languages: newWilder.languages
                        }
                    }
                })
                setNewWilder({
                    first_name: "",
                    last_name: "",
                    age: "",
                    languages: []
                });
                if (error) {
                    setFormMessages({ ...formMessages, submitMessageFail: true });
                };
                if (!loading && !error) {
                    setFormMessages({ ...formMessages, submitMessageSuccess: true });
                };
            }
        } else {
            if (newWilder.first_name === "")
                setFormMessages({ ...formMessages, firstNameError: true })
            if (newWilder.last_name === "")
                setFormMessages({ ...formMessages, lastNameError: true })
            if (newWilder.last_name === "" && newWilder.first_name === "")
                setFormMessages({ ...formMessages, firstNameError: true, lastNameError: true })
        }
    };

    if (languages.loading) {
        return <h1>Data Loading</h1>
    }
    return (
        <div className='new-wilder-form size-restrictions'>
            <h4>Enregistrer un nouveau wilder</h4>
            <div>
                <FormInput
                    type="text"
                    label="Prénom"
                    name="firstname"
                    value={newWilder.first_name}
                    onChangeFunction={(e: ChangeEvent<HTMLInputElement>) => setNewWilder({ ...newWilder, first_name: e.target.value.toLowerCase() })}
                />
                {formMessages.firstNameError && <p className='error-message'>Veuillez entrer un prénom</p>}
                <FormInput
                    type="text"
                    label="Nom"
                    name="lastname"
                    value={newWilder.last_name}
                    onChangeFunction={(e: ChangeEvent<HTMLInputElement>) => setNewWilder({ ...newWilder, last_name: e.target.value.toLowerCase() })}
                />
                {formMessages.lastNameError && <p className='error-message'>Veuillez entrer un nom</p>}
                <FormInput
                    type="number"
                    label="Age"
                    name="age"
                    value={newWilder.age}
                    onChangeFunction={(e) => setNewWilder({ ...newWilder, age: e.target.value })}
                />
                <label>Compétences</label>
                <div>
                    {languages.data.getAllLanguages.map((language: ILanguage) => (
                        <LanguageBtn key={language.id} language={language} setNewWilder={setNewWilder} newWilder={newWilder} />
                    ))}
                </div>
                <button onClick={handleSubmitNewWilder}>Ajouter aux Wilders</button>
                {formMessages.submitMessageSuccess && <p className='success-message'>Un nouveau wilder rejoint l'équipe !</p>}
                {formMessages.submitMessageFail && <p className='error-message'>Une erreur est survenue, veuillez réessayer.</p>}
            </div>
        </div>
    )
}

export default AddWilderForm