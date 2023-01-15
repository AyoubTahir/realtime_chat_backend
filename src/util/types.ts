import { PrismaClient } from "@prisma/client";
import { ISODateString } from "next-auth";

export interface graphQLContext {
  session: Session | null;
  prisma: PrismaClient;
}

/**
 * User
 */
export interface Session {
  user: User;
  expires: ISODateString;
}
export interface User {
  id: string;
  username: string;
  email: string;
  image: string;
  name: string;
  emailVerified: boolean;
}
export interface createUsernameResponse {
  success?: Boolean;
  error?: String;
}
