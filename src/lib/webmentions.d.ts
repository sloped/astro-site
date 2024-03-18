export interface Mention {
    id: string;
    source: string;
    target: string;
    created_at: string
    status: string;
    title: string;
    content?: string;
    author_name?: string;
    type?: string;
} 
export interface Response {
    items: Array<Mention>
}