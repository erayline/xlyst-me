import { UserLink } from '@/models/UserLink';
import mongoose from 'mongoose';

export async function POST(req, res) {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        const { id } = JSON.parse(req.body);

        await UserLink.findByIdAndDelete(id);

        res.status(200).json({ message: 'Link deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}