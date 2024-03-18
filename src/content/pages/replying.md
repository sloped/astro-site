---
pubDate: 'Mar 15 2024'
updatedDate: 'Mar 15 2024'
title: Replying with Webmentions
heroImage: ./images/3018x2280.gif
---

This site is Webmention ready. [Webmentions](https://indieweb.org/Webmention) are an open protocol created to notify a webpage about links, likes, comments, etc. There is a W3C [recommendation](https://www.w3.org/TR/webmention/) for this protocol.  They are intended to enable richer conversations across the web. 

Webmentions work by allowing a *source* webpage to notify a *target* webpage that the *source* has mentioned the *target*. This is done with a really simple web request to a url defined on the *target* webpage that is tagged with a `rel=webmention` attribute. 