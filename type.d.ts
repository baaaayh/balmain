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
