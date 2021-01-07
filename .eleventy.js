module.exports = (eleventyConfig) => {

    // Create custom collection for markdown pages
    eleventyConfig.addCollection("conversions", function(collectionAPI) {
        return collectionAPI.getFilteredByGlob("conversions/*.md");
    });

    // Get the current year to be used in the footer
    eleventyConfig.addShortcode("getYear", function() {
        const year = new Date().getFullYear();
        return `${year}`;
    });

    // Include the folders necessary in the sites output _site
    eleventyConfig.addPassthroughCopy("css/");
    eleventyConfig.addPassthroughCopy("js/");

    return {
        dir: {
            input: ".",
            output: "_site",
            layouts: "_includes/layouts",
            includes: "_includes",
            data: "_data"
        },
        templateFormats: ["md", "njk", "liquid"],
        passthroughFileCopy: true
    };
}