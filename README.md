## EpochGraph

### Descritption ✍️

---

Introducing **"EpochGraph"** – Your Ultimate Tool for Tracking Epochs and Harnessing The Graph API

EpochGraph is a revolutionary mobile app designed for users seeking to streamline their experience with The Graph API. With this user-friendly application, you can effortlessly access and explore a comprehensive list of all epochs in a seamless and intuitive manner. Whether you're a developer, data analyst, or simply curious about blockchain data, EpochGraph empowers you to harness the power of The Graph API with ease. 🫡

### Technical specifications 👨‍💻

---

#### Stack 📝

- **Typescript** (v5.1.6)
- **React** (v18.2.0)
- **NextJS** (v13.4.13)
- **GraphQL** (v16.3.0)
- **Graphql-requests** (v6.1.0)
- **React-Redux** (v8.1.3)

#### Folder Structure 🗂

- **components**: Here are the elements that can be used in many parts of the code.
- **services**: Contains all the needed GraphQL configuration and queries
- **store**: To handle global variables, data and functions, we use Redux
- **contexts**: It has all the context and providers of the app.
- **app**: NextJS routes containing the screens that are gonna be rendered.
- **public**: Public files such us images, favicon and more.
- **styles**: Global styles and theme configuration.
- **tests**: To make sure our app is running as it supposed.
- **types**: Data types used for Typescript purposes.
- **utils**: Useful functions that could be reused

#### Get it running locally 💻

1. `git clone git@github.com:ftarantuviez/epoch-graph.git`
2. `npm install` or `yarn`
3. `npm run dev` or `yarn dev`

### Deploy 🚀

---

The app is deployed in Vercel.
You can find a production version in [this url](https://epoch-graph.vercel.app/).
