import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

const port = process.env.PORT
const db = process.env.DB_URL
export default {
  port,
  db,
}
