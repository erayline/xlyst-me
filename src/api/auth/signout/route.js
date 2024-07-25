// pages/api/signout.js
import { signOut } from "@/auth";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await signOut();
    res.status(200).json({ message: "Signed out successfully" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
