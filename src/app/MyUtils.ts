import { nextAuthOptions } from "@/lib/configs/next-auth-config";
import { getServerSession } from "next-auth";

export async function getUseToken() {
    const session = await getServerSession(nextAuthOptions);
    return session?.user?.tokenUser || null;
}