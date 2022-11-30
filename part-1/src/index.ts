import { AppDataSource } from "./data-source"
import App from './App'

// This is going to be our default local port for our backend. Feel free to change it.
const PORT = 8090

// Initializes the Datasource for TypeOrM
AppDataSource.initialize().then(async () => {
  // Express setup
  const app = App()
   app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}).catch((err) => {
  console.error(err.stack)
})
