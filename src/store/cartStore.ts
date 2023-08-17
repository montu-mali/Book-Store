import { type } from "os";
import create from "zustand";

type CartStore = {
  items: number[];
  addToCart: (bookId: number) => void;
  removeFromCart: (bookId: number) => void;
  addBooks: (bookIds: number[]) => void;
};



export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addToCart: (bookId: number) =>
    set((state) => ({
      items: [...state.items, bookId],
    })),
  addBooks: (bookIds: number[]) =>
    set(() => ({
      items: bookIds,
    })),
  removeFromCart: (bookId: number) =>
    set((state) => ({
      items: state.items.filter((id) => id !== bookId),
    })),
}));

type SaveForLater = {
  item: number[];
  addToSaveLater: (bookId: number) => void;
  removeSaveLater: (bookId: number) => void;
  addSaveBooks: (bookIds: number[]) => void;
};

export const useSaveForLater = create<SaveForLater>((set) => ({
  item: [],
  addToSaveLater: (bookId: number) =>
    set((state) => ({
      item: [...state.item, bookId],
    })),
  addSaveBooks: (bookIds: number[]) =>
    set(() => ({
      item: bookIds,
    })),
  removeSaveLater: (bookId: number) =>
    set((state) => ({
      item: state.item.filter((id) => id !== bookId),
    })),
}));

type WishStore ={
  wishItems:number[];
  addWishItem:(bookId:number)=>void;
  removeWishItem:(bookId:number)=>void;
  addedItems:(bookId:number[])=>void;
};

export const useWishStore = create<WishStore>((set)=> ({
  wishItems:[],
  addWishItem:(bookId:number) =>
    set((state)=>({
      wishItems:[...state.wishItems,bookId],
    })),
  removeWishItem:(bookId:number)=>
  set((state)=>({
    wishItems: state.wishItems.filter((id)=>id!=bookId),
  })),
  addedItems:(bookIds:number[])=>
  set((state)=>({
    wishItems:bookIds,
  })),

}))


type AddressStore = {
  address:object[];
  addAddress: (objectAdd:object) => void;
  removeAddress: (objectAdd:object) => void;
  addLocalAddress: (objectAdds:object[]) => void;
};

export const useAddressStore = create<AddressStore>((set) => ({
  address: [],
  addAddress: (objectAdd:object) =>
    set((state) => ({
      address: [...state.address, objectAdd],
    })),
    addLocalAddress: (objectAdds:object[]) =>
    set(() => ({
      address: objectAdds,
    })),
    removeAddress: (objectAdd:object) =>
    set((state) => ({
      address: state.address.filter((id) => id !== objectAdd),
    })),
}));

