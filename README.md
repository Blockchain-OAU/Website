# Website
The repo holds the source code for Blockchain OAU's website.

## For Contributors
This repo has a different branch for each page. To add your code, fork this repository and, clone to your local machine, then follow these steps.

1. Switch to the branch that concerns your code with `git checkout branchname` replace `branchname` with the name of your branch. E.g `git checkout blog`
2. Run `npm install` to install all the packages in your node_modules folder.
3. Run `npm start` to build the website if build  is successfull, you can access the site on your browser at `localhost:8080`
3. Go to the src/pages folder, find your page there and replace the `h1` element on your page with the content of your `body` tag in your html file. **Note**: Do not add the body tag only it's content.
4. Go to the css folder, find your page's css file there and fill it with the content of your css file. You should have only one css file.
5. Go to the js folder, find your page's js file there and fill it with the content of your js file. You should have only one js file.
6. As you make changes to the files you will notice that the website at `localhost:8080` is updated automatically. 
7. Adjust your, html, css and js to make sure that they follow the design on the figma board.
8. When you are sure its been done to specification, push your code to your fork and then make a pull request. It will be reviewed before it is accepted.

**Note: Do not touch any file that does not concern your branch. You are only allowed to touch 3 files on your branch, your branch's css, js and html files. Your pull request will not be accepted if you do otherwise.**
