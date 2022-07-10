export type Item = IItem

interface IItem {
    name: string;
    id: number;
}

export class ItemClass {
    name: string;
    id: number;
    
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
}

   
