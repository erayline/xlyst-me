import mongoose from "mongoose";

const userLinkSchema = new mongoose.Schema({
    user: { type: String, required:true },
    title: { type: String, default: "Link" },
    url: { type: String, default: "https://x.com/_erayl" },
    icon: { type: String, default: "https://cdn.prod.website-files.com/5d66bdc65e51a0d114d15891/64cebc6c19c2fe31de94c78e_X-vector-logo-download.png" },
    click: { type: Number, default: 0 }
});

export const UserLink = mongoose.models?.UserLink || mongoose.model("UserLink", userLinkSchema);
