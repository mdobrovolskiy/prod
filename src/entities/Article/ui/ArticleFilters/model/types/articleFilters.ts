export interface ArticleFiltersProps {
    order: ArticleOrder
    sort: ArticleSort
    search: string
}
export enum ArticleOrder {
    ASC = 'asc',
    DESC = 'desc',
}
export enum ArticleSort {
    VIEW = 'views',
    CREATEDAT = 'createdAt',
}
