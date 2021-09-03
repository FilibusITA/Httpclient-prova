export interface Categories {
    uid:string,
    skill_name:string,
}

export interface PopularCategoriesResponse {
    popular_categories: Categories[]
}