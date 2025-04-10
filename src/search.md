---
permalink: /search/
heading: Search
title: Search
layout: layouts/base.njk
---
<script src="/pagefind/pagefind-ui.js"></script>
<div id="search"></div>
<script>
    window.addEventListener('DOMContentLoaded', (event) => {
        new PagefindUI({
            element: "#search",
            showSubResults: true,
            showImages: false
        });
    });
</script>