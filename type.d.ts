export interface LinkButtonType {
    text: string;
    linkString: string;
    buttonColorClass: string;
}

export interface CardSectionDataType {
    imageUrl_desktop: string;
    imageUrl_mobile: string;
    title: string;
    buttonText: string;
    linkString: string;
}

export interface CircleDataType {
    imageUrl: string;
    title: string;
}

export interface ReinsuranceDataType extends LinkButtonType {
    title: string;
    paragraph: string;
}

export interface menuDataType {
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
}

export interface ProductDataType {
    product_id: number;
    base_item_code: string;
    item_code: string;
    name: string;
    category1: string;
    category1_1: string;
    category1_3: string;
    category1_4: string;
    collections1: string;
    collections2: string;
    collections3: string;
    collections4: string;
    menu_id: number;
    category_id: number;
    price: number;
    image_alt: string;
    image_filenames: Array<string>;
    color: string;
}
