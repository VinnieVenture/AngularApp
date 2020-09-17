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
        textButton: "Item1",
        navigateTo: "Item1",
        backgroundColor: "#3E6CC6",
    },
    {
        id: 2,
        textButton: "Item2",
        navigateTo: "Item2",
        backgroundColor: "#3AB647",
    },
    {
        id: 3,
        textButton: "Item3",
        navigateTo: "Item13",
        backgroundColor: "#BD3737",
    }
    ];
    
    export function findCourseById(itemID:number) {
        return MenuItems.find(item => item.id == itemID);
    }
    
