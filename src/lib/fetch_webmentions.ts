let promise: Promise<Response>;
let fetching = false;
import type { Response } from "./webmentions";
export default async function(approved=true) {
    if(!fetching) {
        fetching = true;
        
        promise = new Promise(async (resolve) => {
            const mentions = await fetchMentions()
            if(approved) {
                resolve({items: mentions.items.filter((mention) => {
                    return mention.status === "approved"
                })});
                return
            }
            
            resolve(mentions);
        })
    }
    return promise;
}

async function fetchJWT(){
    if(!import.meta.env.PUBLIC_WEBMENTIOND_URL || !import.meta.env.PUBLIC_WEBMENTIOND_TOKEN) {
        return ''
    }
    try {
        return await (await fetch(`${import.meta.env.PUBLIC_WEBMENTIOND_URL}/authenticate/access-key`, {
            method: "POST", // Using POST method
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `key=${import.meta.env.PUBLIC_WEBMENTIOND_TOKEN}`,
        })).text();
    } catch(e) {
        console.error(e);
        return null;
    }
}

async function fetchMentions(): Promise<Response>{
    if(!import.meta.env.PUBLIC_WEBMENTIOND_URL || !import.meta.env.PUBLIC_WEBMENTIOND_TOKEN) {
        return {items: []}
    }
    try {
        const jwt = await fetchJWT();
        return await (await fetch(`${import.meta.env.PUBLIC_WEBMENTIOND_URL}/manage/mentions`, {
            headers: {'Authorization': `Bearer ${jwt}`},
        })).json()
    } catch(e) {
        console.error(e);
        return {items: []}
    }
}