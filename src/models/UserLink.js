import mongoose from "mongoose";

const userLinkSchema = new mongoose.Schema({
    user: { type: String, required:true},
    title: { type: String, default: "Link" },
    url: { type: String, default: "https://x.com/_erayl" },
    icon: { type: String, default:"https://static.thenounproject.com/png/730315-200.png"},
    click: { type: Number, default: 0 }
});

export const UserLink = mongoose.models?.UserLink || mongoose.model("UserLink", userLinkSchema);
