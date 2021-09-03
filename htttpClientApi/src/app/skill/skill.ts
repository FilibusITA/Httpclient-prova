export interface Skill{
    uid:string
    skill_name:string
/*
    "skill_id": "EbRrGLJExjofCyZinw4hUr",
    "skill_name": "CCNA",
    "has_direct_child_skills": 1,
    "has_indirect_child_skills": 0,
    "has_parent_skills": 0,
    "has_siblings_skills": 1,
    "has_relatives_skills_categories": 0,
    "rating_type": 1,
    "rating_legend": 59
    */
}

export interface SkillSearchResponse{
    search_query: string,
    offset: number,
    limit: number,
    total: number,
    skills: Skill[]
}