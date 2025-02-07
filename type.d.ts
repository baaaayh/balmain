export interface LinkButtonType {
    buttonText: string;
    linkString: string;
    buttonColorClass: string;
}

export interface CardSectionDataType {
    imageUrl_desktop: string;
    imageUrl_mobile: string;
    title: string;
    link: string;
    buttons: LinkButtonType[];
}

export interface CircleDataType {
    imageUrl: string;
    title: string;
}

export interface ReinsuranceDataType extends LinkButtonType {
    title: string;
    paragraph: string;
}

export interface MenuDataType {
    menu_id: number;
    parent_menu_id: number | null;
    depth1: string;
    depth2: string;
    depth3: string;
    depth4: string;
    depth_level: number;
    path: string;
    border: boolean | null;
    link: string | null;
    prev_path: string | null;
    prev_menu_id: number | null;
    prev_menu: string | null;
}

export interface SideNavMenuProps {
    expandedDepth2: number | null;
    expandedDepth3: number | null;
    setExpandedDepth2: (
        value: number | null | ((prev: number | null) => number | null)
    ) => void;
    setExpandedDepth3: (
        value: number | null | ((prev: number | null) => number | null)
    ) => void;
    depth1: {
        menu_id: number;
        depth1: string;
        border: boolean | null;
        link: string | null;
    };
    depth2Menus: Array<{
        menu_id: number;
        depth2: string;
        border: boolean | null;
        path: string | null;
        link: string | null;
    }>;
    menus: Array<menuDataType>;
    index: number;
    path: string;
}

export interface ProductDataType {
    product_id: number;
    base_item_code: string;
    item_code: string;
    name: string;
    category1: string | null;
    category1_1: string | null;
    category1_3: string | null;
    category1_4: string | null;
    collections1: string | null;
    collections2: string | null;
    collections3: string | null;
    collections4: string | null;
    menu_id: number;
    category_id: number;
    price: number;
    image_alt: string;
    image_filenames: Array<string>;
    color: string;
}

export interface ProductDetailDataType extends ProductDataType {
    sizes: Array<string>;
    colors: Array<{
        id: number;
        name: string;
    }>;
    description_contents: string;
}

export interface CartProductDataType {
    product_id: number;
    item_code: string;
    menu_id: number;
    name: string;
    price: number;
    quantity: number;
    selectedSize: string;
    selectedColor: {
        id: string;
        name: string;
    };
    thumbUrl: string;
}

export interface ChangedStateType {
    productId: number | null;
    selectedColor: {
        id: string;
        name: string;
    } | null;
    selectedSize: string;
}
