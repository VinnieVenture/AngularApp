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
        navigateTo: "test",
        backgroundColor: "#3E6CC6",
    },
    {
        id: 2,
        textButton: "Item2",
        navigateTo: "test2",
        backgroundColor: "#3AB647",
    },
    ];
    
    export function findCourseById(itemID:number) {
        return MenuItems.find(item => item.id == itemID);
    }
    
