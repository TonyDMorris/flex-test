# SameFlex front-end React app

Try a working verison of the app here ----> [SameFlex](https://sameflex.netlify.com/)

or you can view the repo here ---> [Sameflex](https://github.com/TonyDMorris/SameFlex)

SameFlex is an attempt at recreating a similar post-sharing site like reddit.

Some of the key functionality implemented is:

- Article creation

- Account creation

- article and comment voting

- Login functionality

- infinate pagination

- article and comment deletion

- Dynamic navigation through the site e.g. clicking on user profile pictures or topic buttons to find relevant content.

SameFlex is primarily a light hearted take on social media distributions such as reddit and in part FaceBook.

The site has articles categorised by topic and the user who posted them, the articles can be sorted manually by post date, author or votes(Flex).

the user can navigate around the articles by clicking on a posting users profile image to get a list of their articles or clicking on a topic pill which will load articles of that topic.

by design the articles cannot be directly searched but using reach router each article has its own unique url which can be shared, or articles can discovered by clicking the supplied topic pills.

Each article can be upvoted (Flex) or downvoted (Hate).

logged in users can comment on articles and in turn these comments can also be voted on.

## Built with

The site was built on top of a [Knex](https://knexjs.org/) and [Express](https://expressjs.com/) back end which can be found here ---> [NC-News](https://pure-falls-39051.herokuapp.com/) which is a production deployment of [NC-News](https://github.com/TonyDMorris/NC-News)(repo).

Built with [React](https://reactjs.org/)^16.8.6
Bootstrapped with [create-react-app](https://facebook.github.io/create-react-app/docs/getting-started)

using styled components from [Shards-React](https://designrevision.com/docs/shards-react/getting-started)^1.0.3

Api interactions powered by [axios](https://github.com/axios/axios)^0.18.0

with site navigation powerd by [@Reach-Router](https://reach.tech/router)^1.2.1

infinate scrolling provided by [react-infinite-scroller](https://www.npmjs.com/package/react-infinite-scroller)^1.2.4

## Running the app locally

Start by cloning this repository.

```bash
git clone https://github.com/TonyDMorris/SameFlex.git
```

Once the download has completed you can install the dependencies.

```bash
cd SameFlex
```

```bash
npm install
```

Once all the dependencies have been installed you can run the app with

```bash
npm start
```
