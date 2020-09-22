export interface Book
{
    id: number;
    Author: string;
    Title: string;
    PublishingHouse: string;
	Pages: number
}

export const Books: any = [
    {
        id: 1,
		Author: "J.R.R. Tolkien",
		Title: "Władca pierścieni",
		PublishingHouse: "Muza",
		Pages: 1024,
    },
    {
        id: 2,
		Author: "Sanderson Brandon",
		Title: "Z mgły zrodzony",
		PublishingHouse: "Mag",
		Pages: 972,
    },
    {
        id: 3,
		Author: "Sienkiewicz Henryk",
		Title: "Ogniem i mieczem",
		PublishingHouse: "BELLONA",
		Pages: 942,
    },
    {
        id: 4,
		Author: "Machanienko Wasilj",
		Title: "Droga Szamana Etap 2 Gambit Kartosa",
		PublishingHouse: "Insignis Media",
		Pages: 428,
    },
    {
        id: 5,
		Author: "Glukhovsky Dmitry",
		Title: "Metro 2033",
		PublishingHouse: "Insignis Media",
		Pages: 592,
    },
    {
        id: 6,
		Author: "Sienkiewicz Henryk",
		Title: "Krzyżacy",
		PublishingHouse: "aleksandria",
		Pages: 754,
    },
    {
        id: 7,
		Author: "Flanagan John",
		Title: "Zwiadowcy. Królewski zwiadowca",
		PublishingHouse: "Jaguar",
		Pages: 487,
    },
    {
        id: 8,
		Author: "Taran Matharu",
		Title: "Zaklinacz Początek",
		PublishingHouse: "Jaguar",
		Pages: 424,
    },
    {
        id: 9,
		Author: "Skowrońska Emilia",
		Title: "Czarny Mag. Pierwszy rok. Tom 1",
		PublishingHouse: "Grupa Wydawnicza Foksal",
		Pages: 380,
    },
    {
        id: 10,
		Author: "Golden Christie",
		Title: "Durotan warcraft",
		PublishingHouse: "Insignis Media",
		Pages: 320,
    }
    ];
    
    export function findCourseById(itemID:number) {
        return Books.find(item => item.id == itemID);
    }
    
