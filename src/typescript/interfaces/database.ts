import { Kategorite, KategoriteQellFinanc } from "../enums/category";

interface ListaShpenzimeve {
  id: number;
  shuma: number | string;
  kategoria: Kategorite;
  data: Date;
  tag: string;
  pershkrimi: string;
}
[];

// --> E kam vendosur shumen string ose numer per arsye se ajo do enkriptohet InshaaAllah

interface Kuleta {
  shumaKuletes: number | string;
  perditesuar: Date;
  qellimetFinanciare: {
    id: number;
    lloji: KategoriteQellFinanc;
    titulli: string;
    shuma: number | string;
    arritur: boolean;
  }[];
  kufijteBuxhetore: {
    kategoria: Kategorite;
    kufiri: number | string;
    kohezgjatja: "Mujor" | "Javor";
    dataRregjistrimit: Date;
  }[];
}

interface AnalizaMujore {
  miniData: {
    nisiAnalizen: Date;
    nisur: boolean;
    perfundon: Date;
    nisurMePare: boolean;
    vazhdoAuto: boolean; // Opsion qe userat e zgjedhin qe mos te duhet ta nisin vet analizen cdo muaj InshaaAllah
  };
  analizat: {
    datat: {
      nisi: Date;
      mbaroi: Date;
    };
    katgShpenzMeShum: {
      kategori: Kategorite;
      shuma: number | string;
    }[];
    qellimetFinancArritura: {
      titulli: string;
      lloji: KategoriteQellFinanc;
    }[];
    buxhetiDhen: {
      kategoria: Kategorite;
      shuma: number | string;
    }[];
    grafikuKuletes: {
      data: Date;
      shuma: number | string;
    }[];
  };
}

export interface UserObject extends ListaShpenzimeve, Kuleta, AnalizaMujore {
  userid: string | number;
  name: string;
  from: Date;
  njoftimet: string;
}
[];
