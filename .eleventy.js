module.exports = function (eleventyConfig) {

  // watch and pass through css folder
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addWatchTarget("./src/css/");

  // watch and pass through assets folder
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addWatchTarget("./src/assets/");

  // watch and pass through js folder
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addWatchTarget("./src/js/");

  //ignore blog
  //eleventyConfig.ignores.add("blog.*");

  // eleventyConfig.ignores.add("./src/upcoming-events/template.njk");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
