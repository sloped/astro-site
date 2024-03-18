#Astro Project for Conner McCall's blog


## Enabling Webmentions

You need to setup to a [webmentiond](https://webmentiond.org/) endpoint, and set the following variables. 

`PUBLIC_WEBMENTIOND_TOKEN` = The url that is used to access your webmentiond instance
`PUBLIC_WEBMENTIOND_URL` = a access token set with `--auth-admin-access-key` when starting the webmentiond server. [Docs](https://webmentiond.org/configuration/)

Once that is setup your posts will look for approved webmentions that match the slug of the post and display them underneath your content. 