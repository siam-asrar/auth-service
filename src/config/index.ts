import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
    port: process.env.PORT || 0,
    db_url: process.env.DB_URL || '',
}
