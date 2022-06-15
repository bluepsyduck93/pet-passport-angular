export interface Cat {
    id: number;
    name: string;
    details:{
        toy: string;
        owner: string;
        breed: string;
        size: string;
    }
    vaccinated: boolean;

}