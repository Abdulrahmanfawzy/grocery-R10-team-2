export type Address = {
  id: number
  type: string
  address: string
  instructions: string
}

export const addresses: Address[] = [
  {
    id: 1,
    type: "Home",
    address: "Villa 14, Street 23, District 5, New Cairo, Cairo",
    instructions: "Ring doorbell. Leave at door if no answer.",
  },
  {
    id: 2,
    type: "Work",
    address: "Office 9, Floor 2, 26 Talaat Harb Street, Downtown Cairo",
    instructions: "Ring doorbell. Leave at door if no answer.",
  },
]