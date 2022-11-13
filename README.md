## Description
ReactJS Single Page App demo which has the following features:
1. Search: When a user enters a username, it should be able to get a full list of public gists by that user.
2. Filetype: Convert the filetypes of the files in the gist into a tag/badge, (e.g, if the returned gist has list of files containing python and javascript files, the gist should have the respective tags/badges).
3. Gist details : when clicking on a gist , new page where item details are displayed
4. Fork: Username/Avatar of the last 3 users who forked it with avatar linking to the fork. (I did that on item details page because Github API has a api request limit)

## Libraries/Components used
-> create-react-app: Starter kit to create a reactjs app.
-> css : For styling and basic layout.
-> react-router-dom : For routing between the search results screen and the detail screen.
-> node: made a REST server where it's endpoints made the calls to Github API and there rawResponses were edited and sent to frontend
-> for api calls I am using the fetch() method, which returns a Promise.


## Project setup and testing
-> clone the project
-> for each of the main folders , open in terminal and use npm install , for node modules
-> to start the server : in terminal, opened in the server folder, npm start . The server will now run on localhost:3000
-> to start client: npm start, from terminal , same as above
