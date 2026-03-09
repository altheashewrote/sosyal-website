type MerchStatus = "Available" | "Low Stock" | "Sold Out"
type MerchCat = "Tops" | "Bottoms" | "Accessories"
type MerchGender = "Men" | "Women" | "Unisex" | "Kids"

export interface Merch {
    readonly merchId: number,
    merchName: string,
    merchGender: MerchGender,
    merchCat: MerchCat,
    merchCost: number,
    merchStatus: MerchStatus,
}