export default async function fetchRecipe(slug: string) {
	const response = await fetch(`https://demo.recipurl.com/api/recipes/${slug}`, {
	method: 'GET',
	headers: {
		'Authorization': `Bearer ${import.meta.env.PUBLIC_MEALIE_API_KEY} `
	}
})
    if(response.statusText == 'OK') {
        const recipe = await response.json();
        return recipe
    } else {
        throw new Error(`Recipe Fetch Failed. ${response.statusText}`);
    }
}