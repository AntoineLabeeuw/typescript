class Sejour {
    constructor(private _nom: string, private _prix: number) {
    }
    get nom() {
        return this._nom;
    }
    set nom(nom: string) {
        this._nom = nom;
    }
    get prix() {
        return this._prix;
    }
    set prix(prix: number) {
        this._prix = prix;
    }
}

class SejourService {
    private _sejours: Sejour[];
    constructor() {
        this._sejours = [new Sejour('Paris', 100), new Sejour('Rio de Janeiro', 800), new Sejour('Tokyo', 1100)];
    }
    // Sejour | null == retourne soit sejour, soit null
    findByNom(nom: string): Sejour | string {
        for (const s of this._sejours) {
            if(s.nom === nom) {
                return s;
            }
        }
        return 'non trouvé';
    } 
}
const s = new SejourService();
// OK
console.log(s.findByNom('Paris'));
// KO
console.log(s.findByNom('test'));