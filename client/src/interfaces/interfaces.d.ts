export interface IWilder {
    id: number;
    first_name: string;
    last_name: string;
    age?: number;
    languages: ILanguage[];
    scores?: IScore[];
}
export interface INewWilder extends IWilder {
    id?: number;
    age?: string | undefined;
}

export interface ILanguage {
    id: number;
    label: string;
}

export interface IScore {
    id: number;
    value: number;
    wilder: IWilder;
    language: ILanguage;
    createdDate: string;
}

export interface ISortingScore {
    label: string;
    direction: string;
}

export interface INewScore {
    value: number | string;
    language: number | string;
    wilder: undefined | string;
}