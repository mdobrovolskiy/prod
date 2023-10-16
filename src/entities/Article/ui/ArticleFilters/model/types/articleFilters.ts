export interface ArticleFiltersProps {
    order: ArticleOrder | string
    sort: ArticleSort | string
    search: string
    type: ArticleType | null | string
}

export enum ArticleOrder {
    ASC = 'asc',
    DESC = 'desc',
}
export enum ArticleSort {
    VIEW = 'views',
    CREATEDAT = 'createdAt',
}
export enum ArticleType {
    ECONOMICS = 'Economics',
    IT = 'IT',
    BUSINESS = 'Business',
    SPORT = 'Sport',
    TECHNOLOGIES = 'Technologies',
    ART = 'Art',
}
