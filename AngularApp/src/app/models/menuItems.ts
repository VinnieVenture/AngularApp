export interface MenuItem
{
    id: number;
    textButton: string;
    navigateTo: string;
    backgroundColor: string;
}

export const MenuItems: any = [
    {
        id: 1,
        textButton: "Zmień na test",
        navigateTo: "test",
        backgroundColor: "#3E6CC6",
    },
    {
        id: 2,
        textButton: "Zmień na test2",
        navigateTo: "test2",
        backgroundColor: "#3AB647",
    },
    {
        id: 3,
        textButton: "Check NgFor",
        navigateTo: "ngForComponent",
        backgroundColor: "#f1f1f1",
    },
    {
        id: 4,
        textButton: "Check NgIf",
        navigateTo: "ngIfComponent",
        backgroundColor: "#f171f1",
    },
    ];
    
    export function findCourseById(itemID:number) {
        return MenuItems.find(item => item.id == itemID);
    }
    
