export interface Location{


    Vesrion: number;
    Key: string;
    Type: string;
    Rank: number;
    LocalizedName: string;
    Country: {};
    AdministrativeArea: {};
    
    //for refernce
    // {
    //     "Version": 1,
    //     "Key": "215854",
    //     "Type": "City",
    //     "Rank": 31,
    //     "LocalizedName": "Tel Aviv",
    //     "Country": {
    //       "ID": "IL",
    //       "LocalizedName": "Israel"
    //     },
    //     "AdministrativeArea": {
    //       "ID": "TA",
    //       "LocalizedName": "Tel Aviv"
    //     }
    //   }
}